import React, { useState } from "react";
import "react-responsive-modal/styles.css";
const ReactModal = ({ showModal, setShowModal }) => {
  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <>
      {/* <button
        onClick={openModal}
        className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full"
      >
        Open Modal
      </button> */}

      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center overflow-auto m-auto ">
          <div className="relative bg-white rounded-lg shadow-xl max-w-lg w-full">
            <div className="absolute top-0 right-0 m-4">
              <button
                onClick={closeModal}
                className="text-gray-500 hover:text-gray-700"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
            <div className="p-8">
              {/* TikTok-like content goes here */}
              <h2 className="text-2xl font-bold mb-4">TikTok Modal</h2>
              <p className="text-gray-600">This is a TikTok-style modal.</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ReactModal;
