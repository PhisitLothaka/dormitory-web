import { SettingIcon } from "../../icons";

export default function RoomItem({
  name,
  user = "-",
  mobile = "-",
  price,
  statusPayment = "-",
  statusRoom,
}) {
  return (
    <div>
      <div className="grid grid-cols-7 bg-white text-[--primary-color] p-2 text-center rounded-md">
        <div>{name}</div>
        <div>{user}</div>
        <div>{mobile}</div>
        <div>{price}</div>
        <div>{statusPayment}</div>
        <div>{statusRoom === "IDLE" ? "ห้องว่าง" : "ห้องไม่ว่าง"}</div>
        <div className="flex justify-center cursor-pointer">
          <SettingIcon />
        </div>
      </div>
    </div>
  );
}
