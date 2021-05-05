import React from "react";
import ReactDOM from "react-dom";

const Modal = ({ isShowing, hide,children }) =>
    isShowing
        ? ReactDOM.createPortal(
        <>
            <div className="fixed bg-black bg-opacity-50 w-full h-screen top-0">
                <div className="flex h-full justify-center items-center">
                    <div className="modal w-2/5 bg-white rounded-md">
                        <div className="relative">
                            <button
                                type="button"
                                className="absolute top-2 right-3 hover:text-green-500"
                                onClick={hide}
                            >
                                <span className={"text-3xl"}>&times;</span>
                            </button>
                            {children}
                        </div>
                    </div>
                </div>
            </div>
        </>,
        document.body
        )
        : null;

export default Modal;