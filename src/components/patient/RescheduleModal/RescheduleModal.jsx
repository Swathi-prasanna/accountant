import React, { useState } from "react";
import { FiX } from "react-icons/fi";
import { LiaCheckCircleSolid } from "react-icons/lia";
import "./RescheduleModal.css";
const RescheduleModal = ({ show, onClose }) => {
  const [formData, setFormData] = useState({
    date: "",
    time: "",
    reason: "",
  });
  if (!show) return null;
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    onClose();
  };
  return (
    <div className="reschedule-overlay" onClick={onClose}>
      <div className="reschedule-modal" onClick={(e) => e.stopPropagation()}>
        <div className="reschedule-header">
          <h2>Reschedule Appointment</h2>
          <button type="button" className="btn border-0 p-0 m-0 bg-transparent" onClick={onClose}>
            <FiX className="text-muted fs-4" style={{ cursor: "pointer" }} />
          </button>
        </div>
        <div className="reschedule-body">
          <div className="appointment-card">
            <h4>Current Appointment</h4>
            <p>
              <strong>Dr. James Wilson</strong> - General Medicine
            </p>
            <span>January 3, 2026 at 9:00 AM</span>
          </div>
          <form onSubmit={handleSubmit}>
            <div className="row">
              <div className="form-group">
                <label>New Date *</label>
                <input
                  type="date"
                  name="date"
                  placeholder=""
                  value={formData.date}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <label>New Time *</label>
                <input
                  type="time"
                  name="time"
                  placeholder=""
                  value={formData.time}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
            <div className="form-group">
              <label>Reason for Rescheduling</label>
              <textarea
                name="reason"
                rows="4"
                placeholder="Optional - Let us know why you're rescheduling"
                value={formData.reason}
                onChange={handleChange}
              ></textarea>
            </div>
            <div className="footer">
              <button type="submit" className="confirm-btn">
                <LiaCheckCircleSolid />
                Confirm Reschedule
              </button>
              <button type="button" className="cancel-btn" onClick={onClose}>
                Cancel
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
export default RescheduleModal;
