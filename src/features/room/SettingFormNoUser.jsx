import axios from "../../config/axios";
import ButtonForm from "../../components/ButtonForm";
import { useState } from "react";
// import Joi from "joi";
import { toast } from "react-toastify";

// const idCardUserSchema = Joi.object({
//   idCardUser: Joi.string()
//     .pattern(/^[0-9]{13}$/)
//     .required(),
// });

// const validateIdCard = (input) => {
//   const { error } = idCardUserSchema.validate(input, { abortEarly: false });
//   console.log(
//     "🚀 ~ file: SettingFormNoUser.jsx:15 ~ validateIdCard ~ error:",
//     error
//   );
//   if (error) {
//     const { message, path } = error.details;

//     const result = {};
//     result[path[0]] = message;
//     return result;
//   }
// };

export default function SettingFormNoUser({ roomObj }) {
  // const [error, setError] = useState({});

  const [input, setInput] = useState({
    idCardUser: "",
    idRoom: roomObj.id,
  });

  const handleSubmitForm = async () => {
    // e.preventDefault();
    await axios.post("/room/user", input).catch((err) => {
      toast.error(err.response?.data.message);
    });
  };

  const handleOnChange = (e) => {
    setInput({ ...input, idCardUser: e.target.value });
  };

  return (
    <form
      className="flex flex-col  gap-3 justify-center items-center"
      onSubmit={handleSubmitForm}
    >
      <input
        type="text"
        className={`bg-gray-100 rounded-md p-1 focus:outline-[--primary-color]`}
        placeholder="เลขบัตรประชาชน"
        onChange={handleOnChange}
      />
      <ButtonForm
        text="เพิ่มผู้เช่า"
        className="bg-[--success-color] text-white"
      />
    </form>
  );
}
