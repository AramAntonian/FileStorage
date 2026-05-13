import React from "react";

interface ModalProps {
    handleClose: () => void;
    children: React.ReactNode;
    open: boolean;
}

function Modal({handleClose, children, open}: ModalProps) {
    return (
        <div className={open ? 'block' : 'hidden'}>
            <div className={`absolute top-0 left-0 bg-black opacity-30 w-screen h-screen z-40`} onClick={handleClose}></div>
            {children}
        </div>
    )
}

export default Modal;