import React from "react";
import { NavLink } from "react-router-dom";
import { RiDashboardLine } from "react-icons/ri";
import { IoDocumentTextOutline } from "react-icons/io5";
import { FiDollarSign } from "react-icons/fi";
import { CiLogin } from "react-icons/ci";
import vector from "../../../assets/images/Vector.png";
import taskimg from "../../../assets/images/task.png";
import admin from "../../../assets/images/admin.png";
import medicareicon from "../../../assets/images/mediicon.png";
import wrong from "../../../assets/images/wrong.png";
import './Sidebar.css';

const menuItems = [
  { to: "/", 
    label: "Dashboard",
     icon: <RiDashboardLine size={20} /> },
  {
    to: "/invoicing",
    label: "Invoicing",
    icon: <IoDocumentTextOutline size={20} />,
  },
  { to: "/receivables", label: "Receivables", icon: <FiDollarSign size={20} /> },
  {
    to: "/financial-reports",
    label: "Financial Reports",
    icon: <img src={vector} alt="" width={20} height={20} />,
  },
  {
    to: "/refunds",
    label: "Refunds",
    icon: <img src={taskimg} alt="" width={20} height={20} />,
  },
];

const Sidebar = () => {
  return (
    <aside className="sidebar">
      <div className="sidebar-header">
        <div className="header-content">
          <img src={medicareicon} className="medi-icon" alt="MediCare HIS" />
          <div className="medicare-data">MediCare HIS</div>
        </div>
        <img src={wrong} className="wrong-content" alt="" />
      </div>

      <nav className="sidebar-nav" aria-label="Finance navigation">
        {menuItems.map((item) => (
          <NavLink
            key={item.to}
            to={item.to}
            end={item.to === "/"}
            className={({ isActive }) =>
              isActive ? "sidebar-items active-menu" : "sidebar-items"
            }
          >
            <span className="sidebar-icon">{item.icon}</span>
            <span>{item.label}</span>
          </NavLink>
        ))}
      </nav>

      <div className="sidebar-footer">
        <div className="footer-admin">
          <img src={admin} alt="David Chen" />
          <div>
            <p className="admin-name">David Chen</p>
            <p className="admin-occ">Accountant</p>
          </div>
        </div>
        <button className="login-btn" type="button">
          <CiLogin className="login-icon" />
          <span className="logout-btn">Logout</span>
        </button>
      </div>
    </aside>
  );
};

export default Sidebar;
