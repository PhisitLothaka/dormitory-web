import axios from "../../config/axios";
import ButtonForm from "../../components/ButtonForm";
import { useState } from "react";

export default function SettingFormNoUser({ roomObj }) {
  const [input, setInput] = useState({
    idCardUser: "",
    idRoom: roomObj.id,
  });

  const handleSubmitForm = async () => {
    await axios.post("/room/user", input);
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
        className="bg-gray-100 rounded-md p-1 focus:outline-[--primary-color]"
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
