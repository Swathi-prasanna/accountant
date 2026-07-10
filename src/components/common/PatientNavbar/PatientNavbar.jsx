import React from "react";
import { CiSearch } from "react-icons/ci";
import { CiHome } from "react-icons/ci";
import { IoIosNotificationsOutline } from "react-icons/io";
import "./PatientNavbar.css";
const PatientNavbar = () => {
  return (
    <div>
      <nav id="header" className="navbar navbar-expand-lg bg-white fixed-top">
        <div className="container-fluid">
          <input
            type="search"
            placeholder="Search Patients, ID, Phone"
            className="formcontrol rounded"
          />
          <div className="nav-inner">
            <span className="home-btn">
              <CiHome />
              Main Campus
            </span>
            <div className="bell-btn">
              <IoIosNotificationsOutline size={24} />
              <span className="red-dot"></span>
            </div>
            <div className="admin-section">
              <span className="admin-data1">John Anderson</span>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};
export default PatientNavbar;
