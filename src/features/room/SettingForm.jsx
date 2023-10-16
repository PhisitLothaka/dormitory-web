import { useState } from "react";
import axios from "../../config/axios";
import ButtonForm from "../../components/ButtonForm";

export default function SettingForm({ roomObj }) {
  console.log("🚀 ~ file: SettingForm.jsx:2 ~ SettingForm ~ roomObj:", roomObj);
  const [input, setInput] = useState({
    name: "",
    floor: "",
    price: "",
    id: roomObj.id,
  });
  const handleOnChange = (e) => {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmitForm = async () => {
    await axios.patch("/room", input);
  };
  return (
    <form className="grid grid-cols-2 gap-2 " onSubmit={handleSubmitForm}>
      <div>ชื่อห้อง</div>
      <input
        type="text"
        value={input.name}
        className="bg-gray-100 p-1 rounded-md focus:outline-[--primary-color]"
        onChange={handleOnChange}
        placeholder={roomObj.name}
        name="name"
      />

      <div>ชั้นที่</div>
      <input
        type="text"
        className="bg-gray-100 p-1 rounded-md focus:outline-[--primary-color]"
        value={input.floor}
        onChange={handleOnChange}
        placeholder={roomObj.floor}
        name="floor"
      />

      <div>ราคาห้องพัก</div>
      <input
        type="text"
        className="bg-gray-100 p-1 rounded-md focus:outline-[--primary-color]"
        value={input.price}
        onChange={handleOnChange}
        placeholder={roomObj.price}
        name="price"
      />
      <ButtonForm
        text="บันทึก"
        className=" bg-[--primary-color] text-white hover:bg-gray-200 hover:text-[--primary-color]"
      />
      <div
        className=" bg-[--primary-color] text-white hover:bg-gray-200 hover:text-[--primary-color] rounded-md"
        onClick={() => axios.delete(`/room/${roomObj.id}`)}
      >
        <button className="w-full">ลบ</button>
      </div>
    </form>
  );
}
