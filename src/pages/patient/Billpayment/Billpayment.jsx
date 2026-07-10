import React from "react";
import "./Billpayment.css";
const BillingPayments = () => {
  return (
    <div className="container my-4">
      <div className="billing-wrapper shadow-sm p-4">
        <div className="billing mb-4">
          <h2 className="billing-title">Billing & Payments</h2>
          <p className="billing-subtitle">View bills and make payments</p>
        </div>
        <div className="bill-card position-relative">
          <div className="bill-card1 position-relative">
            <span className="badge bg-success rounded-pill status-badge">
              Paid
            </span>
            <h5 className="bill-number">Bill #BILL001</h5>
            <p className="bill-date">2026-01-03</p>
            <div className="row bill-row mt-4">
              <div className="col-md-4 col-12 mb-3">
                <p className="label">Total Amount</p>
                <h6 className="amount">₹1,155</h6>
              </div>
              <div className="col-md-4 col-12 mb-3">
                <p className="label">Paid</p>
                <h6 className="text-success">₹1,155</h6>
              </div>
              <div className="col-md-4 col-12 mb-3">
                <p className="label">Balance</p>
                <h6 className="text-danger">₹0</h6>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default BillingPayments;
