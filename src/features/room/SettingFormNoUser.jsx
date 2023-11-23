import axios from "../../config/axios";
import ButtonForm from "../../components/ButtonForm";
import { useState } from "react";
// import Joi from "joi";
import { toast } from "react-toastify";

export default function SettingFormNoUser({ roomObj, setIsOpen }) {
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
    <form className="flex flex-col  gap-3 justify-center items-center">
      <input
        type="text"
        className={`bg-gray-100 rounded-md p-1 focus:outline-[--primary-color]`}
        placeholder="เลขบัตรประชาชน"
        onChange={handleOnChange}
      />
      <ButtonForm
        onClick={(e) => {
          e.preventDefault();
          handleSubmitForm();
          setIsOpen(false);
        }}
        text="เพิ่มผู้เช่า"
        className="bg-[--success-color] text-white"
      />
    </form>
  );
}
