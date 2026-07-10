import React from 'react'
import { useNavigate } from "react-router-dom";
import './Recent transaction.css';

function Recenttrans() {
  return (
    <div  className="transaction-card">
      <div className="card-header">
      <h2>Recent Transactions</h2>
      <button className="view-all-btn">View All</button>
      </div>
      <div className="transaction-row transaction-header">
        <div className="col bill-id">Bill ID</div>
        <div className="col patient">Patient</div>
        <div className="col date">Date</div>
        <div className="col amount">Amount</div>
        <div className="col paid">Paid</div>
        <div className="col balance">Balance</div>
        <div className="col status">Status</div>
        <div className="col actions">Actions</div>
      </div>
      <div className="transaction-row">
        <div className="col bill-id">
          <span className="bill-badge">BILL001</span>
        </div>
        <div className="col patient">john Anderson</div>
        <div className="col date">2026-01-03</div>
        <div className="col amount">₹1,155</div>
        <div className="col paid paid-text">₹1,155</div>
        <div className="col balance">₹0</div>
        <div className="col status">
          <span className="status-badge paid">paid</span>
        </div>
        <div className="col actions">
          <button className="view-btn">View</button>
        </div>
      </div>
      <div className="transaction-row">
        <div className="col bill-id">
          <span className="bill-badge">BILL002</span>
         </div>
          <div className="col patient">Sarah Williams</div>
          <div className="col date">2026-01-03</div>
          <div className="col amount">₹1,980</div>
          <div className="col paid paid-text">₹1,000</div>
          <div className="col balance balance-red">₹980</div>
          <div className="col status">
            <span className="status-badge partial">partial</span>
          </div>
          <div className="col actions">
            <button className="view-btn">View</button>
          </div>
        </div>
        <div className="transaction-row">
          <div className="col bill-id">
            <span className="bill-badge">BILL003</span>
          </div>
          <div className="col patient">Rebort Taylor</div>
          <div className="col date">2026-01-03</div>
          <div className=" col amount">₹21,670</div>
          <div className="col paid">₹0</div>
          <div className="col balance balance-red">₹21,670</div>
          <div className="col status">
            <span className="status-badge unpaid">unpaid</span>
          </div>
          <div className="col actions">
            <button className="view-btn">VIEW</button>
          </div>
        </div>
    </div>
  );
};

export default Recenttrans;