import { SettingIcon, UserSettingIcon } from "../../icons";
import SettingContainer from "./SettingContainer";
import { useState } from "react";

export default function RoomItem({
  roomObj,
  name,
  userName = "-",
  mobile = "-",
  price,
  statusPayment = "-",
  statusRoom,
}) {
  const [isSettingUser, setIsSettingUser] = useState(false);

  return (
    <div>
      <div className="grid grid-cols-7 bg-white text-[--primary-color] p-2 text-center rounded-md">
        <div>{name}</div>
        <div>{userName}</div>
        <div>{mobile}</div>
        <div>{price}</div>
        <div>{statusPayment === "PAID" ? "ชำระแล้ว" : "ค้างชำระ"}</div>
        <div>{statusRoom === "IDLE" ? "ห้องว่าง" : "ห้องไม่ว่าง"}</div>
        <div className="flex justify-center  gap-3">
          <SettingContainer roomObj={roomObj} isSettingUser={isSettingUser}>
            <div onClick={() => setIsSettingUser(false)}>
              <SettingIcon />
            </div>
          </SettingContainer>

          <SettingContainer roomObj={roomObj} isSettingUser={isSettingUser}>
            <div onClick={() => setIsSettingUser(true)}>
              <UserSettingIcon />
            </div>
          </SettingContainer>
        </div>
      </div>
    </div>
  );
}
