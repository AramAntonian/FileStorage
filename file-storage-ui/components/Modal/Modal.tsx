import React from "react";

interface ModalProps {
    handleClose: () => void;
    children: React.ReactNode;
}

function Modal({handleClose, children}: ModalProps) {
    return (
        <>
        <div className='absolute top-0 left-0 bg-black opacity-30 w-screen h-screen z-40' onClick={handleClose}></div>
        {children}
        </>
    )
}

export default Modal;