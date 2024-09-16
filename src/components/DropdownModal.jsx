import React from "react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from '../AuthContext';

import { FaUser } from "react-icons/fa";

const DropdownModal = ({ isOpen, handleClose, user }) => {
    
    const { logout } = useContext(AuthContext);
  
  return (
    <div
      className={`modal-overlay ${isOpen ? "open" : ""}`}
      onClick={handleClose}
    >
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <div className="btn-div">
          <div className="flex items-start flex-col justify-between w-full cursor-pointer">
            <div className="flex justify-center items-center w-full">
                {/* <img src={user.image} /> */}
              <FaUser
                className="w-8 h-8"
              />
            </div>
            <div className="flex justify-center items-center space-x-4">
              <p className="">Full name:</p>
              <h1 className="text-[12px] md:text-[16px] font-semibold">
                {user.displayName
                  ? user.displayName
                  : user.email}
              </h1>
            </div>
            <div className="flex justify-center items-center space-x-4">
              <p>Email:</p>
              <h1 className="text-[12px] md:text-[14px] font-semibold">
                {user.email}
              </h1>
            </div>
            <div className="flex justify-between space-x-2 w-full">
            <div className="flex justify-center w-full">
                <Link to="/create" className="bg-secondary text-white font-bold py-1 px-3 rounded-md hover:bg-primary/35">Create Post</Link>
            
            </div>
            <div className="flex justify-center w-full">
                <Link to="/wishlist" className="bg-secondary text-white font-bold py-1 px-3 rounded-md hover:bg-primary/35">My Wishlist</Link>
            
            </div>
            </div>
            <div className="w-full flex justify-center">
              <Link                
                className="bg-red-600 py-1 px-8 rounded-3xl text-white text-[14px]"
                onClick={logout}
              >
                <button className="w-[100%]  text-white font-semibold h-[48px]">
                  Log Out
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DropdownModal;

