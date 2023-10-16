import Modal from "../../components/Modal";
import { SettingIcon } from "../../icons";
import { useState } from "react";
import SettingForm from "./SettingForm";

export default function SettingContainer({ roomObj }) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
      <div onClick={() => setIsOpen(true)}>
        <SettingIcon />
      </div>
      <Modal title="แก้ไขข้อมูล" open={isOpen} onClose={() => setIsOpen(false)}>
        <SettingForm roomObj={roomObj} />
      </Modal>
    </div>
  );
}
