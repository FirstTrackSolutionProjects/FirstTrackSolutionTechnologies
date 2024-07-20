import React, { useState, useEffect, useRef } from 'react';

const WhatsAppChatPopup = ({ phoneNumber, message }) => {
  const [isOpen, setIsOpen] = useState(false);
  const modalRef = useRef(null);

  const toggleChat = () => {
    setIsOpen(!isOpen);
  };

  const openWhatsApp = () => {
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const handleClickOutside = (event) => {
    if (modalRef.current && !modalRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  return (
    <div className="fixed bottom-4 right-4 z-50">
      <button
        className="bg-green-500 text-white p-3 rounded-full shadow-lg hover:bg-green-600 transition duration-300"
        onClick={toggleChat}
      >
        <svg
          className="w-6 h-6"
          fill="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M21.633 20.305l-1.575-5.563a9.626 9.626 0 001.118-4.517c0-5.337-4.354-9.691-9.691-9.691S1.794 4.887 1.794 10.224c0 5.336 4.354 9.691 9.691 9.691a9.626 9.626 0 004.517-1.118l5.563 1.575zM9.774 13.98c-1.23 0-2.331-.399-3.316-1.191a1.11 1.11 0 01-.43-1.094l.382-1.305a1.117 1.117 0 011.091-.872h1.308a1.117 1.117 0 011.091.872c.061.212.123.426.184.639.215.732.429 1.465.641 2.198a1.117 1.117 0 01-.348 1.192 3.127 3.127 0 01-1.604.661z" />
        </svg>
      </button>

      {isOpen && (
        <div
          ref={modalRef}
          className="bg-white p-4 rounded-lg shadow-lg mt-2 w-64"
        >
          <h2 className="text-lg font-bold mb-2">Chat with us on WhatsApp</h2>
          <p className="mb-4">Our team is here to help you.</p>
          <button
            onClick={openWhatsApp}
            className="bg-green-500 text-white p-2 rounded-full shadow-lg hover:bg-green-600 transition duration-300 block text-center w-full"
          >
            Start Chat
          </button>
        </div>
      )}
    </div>
  );
};

export default WhatsAppChatPopup;
