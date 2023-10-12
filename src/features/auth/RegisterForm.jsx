import { useState } from "react";
import { useAuth } from "../../hooks/use-auth";
import RegisterInput from "./RegisterInput";
import InputErrorMessage from "../../components/InputErrorMessage";
import Joi from "joi";
import { toast } from "react-toastify";

const registerSchema = Joi.object({
  firstName: Joi.string().trim().required(),
  lastName: Joi.string().trim().required(),
  email: Joi.string().email({ tlds: false }).required(),
  password: Joi.string()
    .pattern(/^[a-zA-Z0-9]{6,30}$/)
    .trim()
    .required(),
  confirmPassword: Joi.string()
    .valid(Joi.ref("password"))
    .trim()
    .required()
    .strip(),
  idCard: Joi.string()
    .pattern(/^[0-9]{13}$/)
    .required(),
  mobile: Joi.string()
    .pattern(/^[0-9]{10}$/)
    .required(),
});

const validateRegister = (input) => {
  const { error } = registerSchema.validate(input, { abortEarly: false });
  if (error) {
    const result = error.details.reduce((acc, el) => {
      const { message, path } = el;
      acc[path[0]] = message;
      return acc;
    }, {});
    return result;
  }
};

export default function RegisterForm() {
  const [inputRegister, setInputRegister] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    idCard: "",
    mobile: "",
  });
  const [error, setError] = useState({});

  const { registerAdmin } = useAuth();
  const handleChangeInput = (e) => {
    setInputRegister({ ...inputRegister, [e.target.name]: e.target.value });
  };

  const handleSubmitForm = (e) => {
    e.preventDefault();
    const validationError = validateRegister(inputRegister);
    if (validationError) {
      return setError(validationError);
    }
    setError({});
    registerAdmin(inputRegister).catch((err) => {
      toast.error(err.response?.data.message);
    });
  };

  return (
    <form
      className="grid grid-cols-2 gap-x-3 gap-y-4 "
      onSubmit={handleSubmitForm}
    >
      <div className="col-span-full">
        <RegisterInput
          placeholder="Email"
          value={inputRegister.email}
          onChange={handleChangeInput}
          name="email"
          hasError={error.email}
        />
        {error.email && <InputErrorMessage message={error.email} />}
      </div>
      <div className="col-span-full">
        <RegisterInput
          type="password"
          placeholder="Password"
          value={inputRegister.password}
          onChange={handleChangeInput}
          name="password"
          hasError={error.password}
        />
        {error.password && <InputErrorMessage message={error.password} />}
      </div>
      <div className="col-span-full">
        <RegisterInput
          type="password"
          placeholder="Confirm Password"
          value={inputRegister.ConfirmPassword}
          onChange={handleChangeInput}
          name="confirmPassword"
          hasError={error.confirmPassword}
        />
        {error.confirmPassword && (
          <InputErrorMessage message={error.confirmPassword} />
        )}
      </div>

      <div>
        <RegisterInput
          placeholder="ชื่อจริง"
          value={inputRegister.firstName}
          onChange={handleChangeInput}
          name="firstName"
          hasError={error.firstName}
        />
        {error.firstName && <InputErrorMessage message={error.firstName} />}
      </div>
      <div>
        <RegisterInput
          placeholder="นามสกุล"
          value={inputRegister.lastName}
          onChange={handleChangeInput}
          name="lastName"
          hasError={error.lastName}
        />
        {error.lastName && <InputErrorMessage message={error.lastName} />}
      </div>
      <div>
        <RegisterInput
          placeholder="เลขบัตรประชาชน"
          value={inputRegister.idCard}
          onChange={handleChangeInput}
          name="idCard"
          hasError={error.idCard}
        />
        {error.idCard && <InputErrorMessage message={error.idCard} />}
      </div>
      <div>
        <RegisterInput
          placeholder="เบอร์โทรศัพท์"
          value={inputRegister.mobile}
          onChange={handleChangeInput}
          name="mobile"
          hasError={error.mobile}
        />
        {error.mobile && <InputErrorMessage message={error.mobile} />}
      </div>
      <div className="col-span-2 ">
        <button
          type="submit"
          className="bg-[--primary-color] text-white px-4 py-1.5 w-full rounded-md"
        >
          Submit
        </button>
      </div>
    </form>
  );
}
