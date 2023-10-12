import { useState } from "react";
import Modal from "../../components/Modal";
import RegisterForm from "./RegisterForm";

export default function RegisterContainer({ text }) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="flex justify-center">
      <button
        className="text-white bg-[--primary-color] rounded-md px-4 py-2 w-32 "
        onClick={() => setIsOpen(true)}
      >
        {text}
      </button>
      <Modal
        title="Register"
        maxWidth="40"
        open={isOpen}
        onClose={() => setIsOpen(false)}
      >
        <RegisterForm />
      </Modal>
    </div>
  );
}
