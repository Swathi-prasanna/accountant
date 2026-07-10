import React, { useState } from 'react'
import { GoDownload } from "react-icons/go";
import { FiX } from "react-icons/fi";
import './FinanceDasboard.css';

const FinanceDashboard = () => {
  const [showReportPopup, setShowReportPopup] = useState(false);

  return (
    <>
    <section className='hero-main'>
        <div className='main-data'>
           <h1 className='hero-heading'>Finance Dashboard</h1>
           <p className='hero-sub'>Revenue, receivables &amp;financial analytics</p>
        </div>
        <div className="header-right">
          <input type="text" className="search-box" placeholder=" "/>
          <button className="export-btn" type="button" onClick={() => setShowReportPopup(true)}>
              <span className="icon"></span><GoDownload color="white" size={60}/>Export Report
          </button>
        </div>
        
    </section>

    {showReportPopup && (
      <div
        className="modal-bii"
        style={{ background: "rgba(0, 0, 0, 0.45)" }}
        onClick={() => setShowReportPopup(false)}
      >
        <div className="bill-modal" onClick={(event) => event.stopPropagation()}>
          <div className="modal-header">
            <h2>Bill Details</h2>
            <button
              className="close-btn"
              type="button"
              onClick={() => setShowReportPopup(false)}
            >
              <FiX />
            </button>
          </div>
          <div className="bill-row">
            <span>Bill ID:</span>
            <span>BILL001</span>
          </div>
          <div className="bill-row">
            <span>Patient:</span>
            <span>John Anderson</span>
          </div>
          <div className="bill-row">
            <span>Date:</span>
            <span>2026-01-03</span>
          </div>
          <div className="bill-row">
            <span>Amount:</span>
            <span>₹1,155</span>
          </div>
          <div className="bill-row">
            <span>Paid:</span>
            <span className="paid-amount">₹1,155</span>
          </div>
          <div className="bill-row">
            <span>Balance:</span>
            <span>₹0</span>
          </div>
          <div className="bill-row">
            <span>Status:</span>
            <span className="status-badge">paid</span>
          </div>
        </div>
      </div>
    )}
    </>

  )
}
export default FinanceDashboard;
