import { useState } from "react";
import InputForm from "./InputForm";
import ButtonForm from "./ButtonForm";
import { useAuth } from "../hooks/use-auth";
import { toast } from "react-toastify";

export default function FormLogin() {
  const [input, setInput] = useState({
    email: "",
    password: "",
  });

  const { loginAdmin, loginUser, setIsAdmin, isAdmin } = useAuth();

  const handleClickAdmin = () => {
    setIsAdmin(true);
  };
  const handleClickUser = () => {
    setIsAdmin(false);
  };

  const handleSubmitForm = (e) => {
    e.preventDefault();
    isAdmin
      ? loginAdmin(input).catch((err) => {
          toast.error(err.response.data.message);
        })
      : loginUser(input).catch((err) => {
          toast.error(err.response.data.message);
        });
  };

  return (
    <form
      className="flex items-center justify-center min-h-screen "
      onSubmit={handleSubmitForm}
    >
      <div className="p-3 shadow-lg flex flex-col gap-3 items-center  w-80 bg-white rounded-md">
        <div className="flex gap-3">
          <ButtonForm
            type="button"
            text="Owner"
            onClick={handleClickAdmin}
            className={isAdmin && "bg-gray-200 text-[--primary-color]"}
          />
          <ButtonForm
            type="button"
            text="User"
            onClick={handleClickUser}
            className={!isAdmin && "bg-gray-200 text-[--primary-color]"}
          />
        </div>
        <InputForm
          placeholder="email"
          value={input.email}
          onChange={(e) => setInput({ ...input, email: e.target.value })}
        />
        <InputForm
          type="password"
          placeholder="password"
          value={input.password}
          onChange={(e) => setInput({ ...input, password: e.target.value })}
        />
        <ButtonForm text="Login" />
      </div>
    </form>
  );
}
