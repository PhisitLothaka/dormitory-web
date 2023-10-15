import { useState } from "react";
import Modal from "../../components/Modal";
import CreateRoomForm from "./CreateRoomForm";

export default function CreateRoomContainer() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className="px-4">
        <button
          className="bg-[--primary-color] text-white rounded-md p-2 hover:bg-gray-100 hover:ring hover:ring-[--primary-color] hover:text-[--primary-color]"
          onClick={() => {
            setIsOpen(true);
          }}
        >
          เพิ่มห้องพัก
        </button>
      </div>
      <Modal
        open={isOpen}
        onClose={() => setIsOpen(false)}
        title="เพิ่มห้องพัก"
        maxWidth="20"
      >
        <CreateRoomForm />
      </Modal>
    </>
  );
}
