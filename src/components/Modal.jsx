const Modal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-[#F5CF6B] text-white p-8 rounded-2xl shadow-lg w-[90%] max-w-md relative">
        <button
          onClick={onClose}
          className="absolute top-2 right-4 text-white hover:text-gray-300"
        >
          &times;
        </button>

        <div className="bg-gradient-to-r from-[#17212e] to-[#17212e] w-full p-6 rounded-lg text-center">
          <h2 className="text-3xl font-bold mb-4">Congratulations!</h2>
          <p className="text-2xl">You have successfully registered for </p>
          <strong className="text-2xl font-bold text-[#F5cf6b]">
            Hack-a-thon 4.0 !
          </strong>
          <p className="mt-2">Join the WhatsApp Group for further updates:</p>
          <a
            href="https://wa.link/e1k1gy"
            className="text-[#F5CF6B] font-semibold underline block mt-2"
          >
            [ Link ]
          </a>
          <p className="mt-4 text-xl font-bold">All the Best!!!</p>
        </div>
      </div>
    </div>
  );
};

export default Modal;
