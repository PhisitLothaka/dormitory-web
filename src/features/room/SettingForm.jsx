import { useState } from "react";
import axios from "../../config/axios";
import ButtonForm from "../../components/ButtonForm";

export default function SettingForm({ roomObj }) {
  const [input, setInput] = useState({
    name: roomObj.name,
    floor: roomObj.floor,
    price: roomObj.price,
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
        className=" bg-[--success-color] text-white hover:bg-gray-200 hover:text-[--primary-color]"
      />
      <div
        className=" bg-[--alert-color] text-white hover:bg-gray-200 hover:text-[--primary-color] rounded-md p-1"
        onClick={() => axios.delete(`/room/${roomObj.id}`)}
      >
        <button className="w-full ">ลบ</button>
      </div>
    </form>
  );
}
