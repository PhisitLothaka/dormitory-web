import axios from "axios";
import ButtonForm from "../../components/ButtonForm";

export default function SettingFormHaveUser({ roomObj }) {
  console.log(
    "🚀 ~ file: SettingFormHaveUser.jsx:4 ~ SettingFormHaveUser ~ roomObj:",
    roomObj
  );

  const handleSubmitForm = async () => {
    await axios.delete(`/room/user/${roomObj?.userRoom[0]?.id}`);
  };
  return (
    <form className="grid grid-cols-2 gap-3" onSubmit={handleSubmitForm}>
      <div className="p-1">ชื่อ</div>
      <div className="bg-gray-100 rounded-md p-1 ">
        {`${roomObj?.userRoom[0]?.user?.firstName}  ${roomObj?.userRoom[0]?.user?.lastName}`}
      </div>
      <div className="p-1">เบอร์โทรศัพท์</div>
      <div className="bg-gray-100 rounded-md p-1 ">
        {roomObj?.userRoom[0]?.user?.mobile}
      </div>
      <div className="p-1">อีเมล</div>
      <div className="bg-gray-100 rounded-md p-1 ">
        {roomObj?.userRoom[0]?.user?.email}
      </div>

      <ButtonForm
        text="ลบ"
        className="col-span-2 bg-[--alert-color] text-white"
      />
    </form>
  );
}
