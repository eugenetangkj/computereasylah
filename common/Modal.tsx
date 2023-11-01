import { ReactNode } from "react";
import { MdClose } from "react-icons/md";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, children }) => {
  if (!isOpen) {
    return null;
  }

  return (
    <div
      className="fixed inset-0 flex items-center justify-center z-50"
      onClick={onClose}
    >
      <div className="fixed inset-0 bg-black bg-opacity-50" />
      <div className="fixed z-50 bg-white p-8 rounded-lg shadow-md">
        <div className="absolute top-0 right-0" dir="rtl">
          <MdClose className="cursor-pointer" size={32} onClick={onClose} />
        </div>
        {children}
      </div>
    </div>
  );
};

export default Modal;
