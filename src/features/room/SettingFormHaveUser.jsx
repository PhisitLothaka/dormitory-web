import ButtonForm from "../../components/ButtonForm";

export default function SettingFormHaveUser({ roomObj }) {
  return (
    <form className="grid grid-cols-2 gap-3">
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
