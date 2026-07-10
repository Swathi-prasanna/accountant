import React from "react";
import { RiDashboardLine } from "react-icons/ri";
import { MdOutlineBed } from "react-icons/md";
import { RxPeople } from "react-icons/rx";
import task from "../../../assets/task.png";
import admin from "../../../assets/admin.png";
import medicareicon from "../../../assets/mediicon.png";
import { IoCloseSharp } from "react-icons/io5";
import { CiLogin } from "react-icons/ci";
import { NavLink } from "react-router-dom";
import { CiCalendar } from "react-icons/ci";
import { RiCapsuleLine } from "react-icons/ri";
import { LuTestTube } from "react-icons/lu";
import { FiDollarSign } from "react-icons/fi";
import { FaRegFileAlt } from "react-icons/fa";
import { MdOutlineFileUpload } from "react-icons/md";
import "./PatientSidebar.css";
const PatientSidebar = () => {
  return (
    <header>
      <nav
        id="sidebarMenu"
        className="collapse d-lg-block sidebar collapse bg-white"
      >
        <div className="position-fixed">
          <div className="list-group list-group-flush mx-3 mt-2">
            <div className="header container">
              <div className="header-content">
                <img src={medicareicon} className="medi-icon"></img>
                <div className="medicare-data">MediCare HIS</div>
              </div>
              <div>
                <span>
                  <IoCloseSharp
                    size={30}
                    color="#0F172B"
                    className="close me-5"
                  />
                </span>
              </div>
            </div>
            <div className="dashboard-item">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive ? "sidebar-items active-menu" : "sidebar-items"
                }
              >
                <span className="dashboard">
                  <RiDashboardLine size={20} />
                  &nbsp; Dashboard
                </span>
              </NavLink>
            </div>
            <NavLink
              to="/PrescriptionPage"
              className={({ isActive }) =>
                isActive ? "sidebar-items active-menu" : "sidebar-items"
              }
            >
              <span>
                <CiCalendar size={20} />
                &nbsp;My Appointments
              </span>
            </NavLink>
            <NavLink
              to="/Inventorypage"
              className={({ isActive }) =>
                isActive ? "sidebar-items active-menu" : "sidebar-items"
              }
            >
              <span>
                <FaRegFileAlt size={20} />
                &nbsp; Medical Records
              </span>
            </NavLink>
            <NavLink
              to="/DispensingPa"
              className={({ isActive }) =>
                isActive ? "sidebar-items active-menu" : "sidebar-items"
              }
            >
              <span>
                <RiCapsuleLine size={20} />
                &nbsp; Prescriptions
              </span>
            </NavLink>
            <NavLink
              to="/DispensingPge"
              className={({ isActive }) =>
                isActive ? "sidebar-items active-menu" : "sidebar-items"
              }
            >
              <span>
                <LuTestTube size={20} />
                &nbsp; Lab Reports
              </span>
            </NavLink>
            <NavLink
              to="/upload"
              className={({ isActive }) =>
                isActive ? "sidebar-items active-menu" : "sidebar-items"
              }
            >
              <span>
                <MdOutlineFileUpload size={20} />
                &nbsp; My Documents
              </span>
            </NavLink>
            <NavLink
              to="/DispensigPage"
              className={({ isActive }) =>
                isActive ? "sidebar-items active-menu" : "sidebar-items"
              }
            >
              <span>
                <FiDollarSign size={20} />
                &nbsp; Billing & Payments
              </span>
            </NavLink>
          </div>
        </div>
      </nav>
      <div className="sidebar-footer position-fixed">
        <div className="footer-admin">
          <img src={admin} />
          <div>
            <span className="admin-name">John Anderson</span>
            <p className="admin-occ">Patient</p>
          </div>
        </div>
        <div className="login-btn">
          <CiLogin className="login-icon" />
          <span className="logout-btn">Logout</span>
        </div>
      </div>
    </header>
  );
};
export default PatientSidebar;
