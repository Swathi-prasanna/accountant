import React from "react";
import "./Prescriptions.css";
function Prescriptions() {
  return (
    <div className="container-fluid prescriptions-page py-4">
      <h2 className="prescriptions-title">Prescriptions</h2>
      <p className="prescription-subtitle">
        View and manage your prescriptions
      </p>
      <div className="prescription-card shadow-sm">
        <div className="prescription-body">
          <h5 className="pres-title">Active Prescriptions</h5>
          <div className="prescription-list">
            <div className="prescription-header">
              <div className="medicine-info">
                <h5 className="medicine-name">Metformin 500mg</h5>
                <p className="doctor-name">Prescribed by Dr. James Wilson</p>
              </div>
              <span className="active-badge">Active</span>
            </div>
            <div className="prescription-details">
              <div className="detail-item">
                <span className="detail-label">Dosage</span>
                <p className="detail-value">Twice daily</p>
              </div>
              <div className="detail-item">
                <span className="detail-label">Duration</span>
                <p className="detail-value">30 days</p>
              </div>
              <div className="detail-item">
                <span className="detail-label">Prescribed Date</span>
                <p className="detail-value">Dec 28, 2025</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Prescriptions;
