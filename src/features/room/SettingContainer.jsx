import Modal from "../../components/Modal";
import { useState } from "react";
import SettingForm from "./SettingForm";
import SettingUserForm from "./SettingUserForm";

export default function SettingContainer({ roomObj, children, isSettingUser }) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
      <div onClick={() => setIsOpen(true)} className="cursor-pointer">
        {children}
      </div>
      <Modal title="แก้ไขข้อมูล" open={isOpen} onClose={() => setIsOpen(false)}>
        {isSettingUser ? (
          <SettingUserForm roomObj={roomObj} />
        ) : (
          <SettingForm roomObj={roomObj} />
        )}
      </Modal>
    </div>
  );
}
