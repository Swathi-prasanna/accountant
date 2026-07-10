import { CiCalendar } from "react-icons/ci";
import { FaRegFileAlt } from "react-icons/fa";
import { TbActivityHeartbeat } from "react-icons/tb";
import { LuCreditCard } from "react-icons/lu";
import { FaRegBell } from "react-icons/fa";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import React, { useState } from "react";
import BookAppointmentModal from "../BookAppointmentModal/BookAppointmentModal";
import RescheduleModal from "../RescheduleModal/RescheduleModal";
import "./Dashboard.css";
const Dashboard = () => {
  const [showBookModal, setShowBookModal] = useState(false);
  const [showRescheduleModal, setShowRescheduleModal] = useState(false);
  const currentAppointment = {
    doctor: "Dr. James Wilson",
    department: "General Medicine",
    date: "Jan 3, 2026",
    time: "9:00 AM",
  };
  return (
    <div className="dashboard-page">
      <div className="welcome-card">
        <div className="welcome-inner-data">
          <div className="welcome-data">
            <h2 className="welcome-heading">Welcome back, John!</h2>
            <p className="welcome-sub">
              Your health dashboard and medical records
            </p>
          </div>
          <div>
            <button
              className="appointment-btn"
              onClick={() => setShowBookModal(true)}
            >
              <CiCalendar size={20} color="white" />
              Book Appointment
            </button>
            <BookAppointmentModal
              show={showBookModal}
              onClose={() => setShowBookModal(false)}
            />
          </div>
        </div>
      </div>
      <div className="cards">
        <div className="card-items">
          <div className="card-content">
            <CiCalendar size={20} color="#0084D1" />
            <span className="card-inner-content">Upcoming Visits</span>
          </div>
          <p className="card-inner-content1">1 Scheduled</p>
        </div>
        <div className="card-items">
          <div className="card-content">
            <FaRegFileAlt size={20} color="#00A63E" />
            <span className="card-inner-content">Medical Records</span>
          </div>
          <p className="card-inner-content1">12 Documents</p>
        </div>
        <div className="card-items">
          <div className="card-content">
            <TbActivityHeartbeat size={20} color="#9810FA" />
            <span className="card-inner-content">Lab Reports</span>
          </div>
          <p className="card-inner-content1">5 Available</p>
        </div>
        <div className="card-items">
          <div className="card-content">
            <LuCreditCard size={20} color="#F54900" />
            <span className="card-inner-content">Pending Bills</span>
          </div>
          <p className="card-inner-content1">0 Unpaid</p>
        </div>
      </div>
      <div className="dashboard-cards">
        <div className="dashboard-inner-cards">
          <h2 className="card-heading">Next Appointment</h2>
          <div className="dashboard-inner-card">
            <div className="dashboard-card-data">
              <div className="icon">
                <CiCalendar size={30} color="#FFFFFF" />
              </div>
              <div className="dashboard-inner-data">
                <h4>Dr. James Wilson</h4>
                <p>General Medicine</p>
              </div>
            </div>
            <div className="dashboard-inner-data1">
              <div className="">
                <div className="dashboard-inner-data2">
                  <p>Date</p>
                  <p>Jan 3, 2026</p>
                </div>
              </div>
              <div className="">
                <div className="dashboard-inner-data2">
                  <p>Time</p>
                  <p>9:00 AM</p>
                </div>
              </div>
            </div>
            <hr />
            <div className="btn-section">
              <button
                className="reschedule-btn"
                onClick={() => setShowRescheduleModal(true)}
              >
                Reschedule
              </button>
              <button className="join-btn">Join Virtual</button>
            </div>
            <RescheduleModal
              show={showRescheduleModal}
              onClose={() => setShowRescheduleModal(false)}
            />
          </div>
        </div>
        <div className="dashboard-inner-cards">
          <h2 className="card-heading">Recent Notifications</h2>
          <div className="dashboard-inner-card1">
            <div className="dashboard-inner-data3">
              <FaRegBell size={20} color="#155DFC" />
              <div className="dashboard-content">
                <div className="dashboard-inner-data4">
                  Lab results available
                </div>
                <div className="dashboard-inner-data5">
                  HbA1c test results are ready to view
                </div>
                <div className="dashboard-inner-data6">2 hours ago</div>
              </div>
            </div>
          </div>
          <div className="dashboard-inner-card2">
            <div className="dashboard-inner-data3">
              <IoMdCheckmarkCircleOutline size={20} color="#00A63E" />
              <div className="dashboard-content">
                <div className="dashboard-inner-data7">
                  Appointment confirmed
                </div>
                <div className="dashboard-inner-data8">
                  Your appointment with Dr. Wilson is confirmed
                </div>
                <div className="dashboard-inner-data9">1 day ago</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="health-card">
        <h4 className="health-heading">Health Summary</h4>
        <div className="health-summary">
          <div className="health-data">
            <p className="health-title">Current Conditions</p>
            <div className="health-inner-data">
              <button className="health-btn">Hypertension</button>
              <button className="health-btn">Type 2 Diabetes</button>
            </div>
          </div>
          <div className="health-data">
            <p className="health-title">Allergies</p>
            <button className="allergy-btn">Penicillin</button>
          </div>
          <div className="health-data">
            <p className="health-title">Blood Group</p>
            <h6 className="blood-group">O+ Positive</h6>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Dashboard;
