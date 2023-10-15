import axios from "../../config/axios";
import ButtonForm from "../../components/ButtonForm";
import { useState } from "react";

export default function CreateRoomForm() {
  const [input, setInput] = useState({ name: "", floor: "", price: "" });
  const handleOnChange = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };
  const handleSubmitForm = async () => {
    await axios.post("/room", input);
  };
  return (
    <form className="grid grid-cols-2 gap-2 " onSubmit={handleSubmitForm}>
      <div>ชื่อห้อง</div>
      <input
        type="text"
        value={input.name}
        className="bg-gray-100 p-1 rounded-md focus:outline-[--primary-color]"
        onChange={handleOnChange}
        name="name"
      />

      <div>ชั้นที่</div>
      <input
        type="text"
        className="bg-gray-100 p-1 rounded-md focus:outline-[--primary-color]"
        value={input.floor}
        onChange={handleOnChange}
        name="floor"
      />

      <div>ราคาห้องพัก</div>
      <input
        type="text"
        className="bg-gray-100 p-1 rounded-md focus:outline-[--primary-color]"
        value={input.price}
        onChange={handleOnChange}
        name="price"
      />
      <ButtonForm
        text="บันทึก"
        className="col-span-2 bg-[--primary-color] text-white hover:bg-gray-200 hover:text-[--primary-color]"
      />
    </form>
  );
}
