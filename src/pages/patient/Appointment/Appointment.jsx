import React from "react";
import { SlCalender } from "react-icons/sl";
import "./Appointment.css";
const Appointments = () => {
  return (
    <div className="appointments-container">
      <div className="appointments-header d-flex justify-content-between align-items-center mb-4">
        <div>
          <h2 className="appointments-title">My Appointments</h2>
          <p className="appointments-subtitle">
            View and manage your appointments
          </p>
        </div>
        <button className="btn btn-primary appointments-button">
          <SlCalender /> Book New Appointment
        </button>
      </div>
      <div className="card appointments-card shadow-sm">
        <div className="card-body">
          <div className="appointments-item d-flex justify-content-between align-items-center">
            <div className="appointments-left">
              <div className="appointments-date-box text-center">
                <small>JAN</small>
                <h4>3</h4>
              </div>
              <div className="appointments-details ms-3">
                <h5 className="appointments-doctor">Dr. James Wilson</h5>
                <p className="appointments-department mb-1">General Medicine</p>
                <small className="appointments-time">2026-01-03 at 09:00</small>
              </div>
            </div>
            <div className="appointments-actions">
              <button className="btn btn-light appointments-reschedule-btn me-2">
                Reschedule
              </button>
              <button className="btn btn-primary appointments-join-btn">
                Join Virtual
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Appointments;
