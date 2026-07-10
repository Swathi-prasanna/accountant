import React from "react";
import { FiX } from "react-icons/fi";

function BillDetails({onClose}){
    return(
        <div className="modal-bii">
            <div className="bill-modal">
                <div className="modal-header">
                    <h2>Bill Details</h2>
                    <button className="close-btn" onClick={onClose}><FiX /></button>
                </div>
                <div className="bill-row">
                    <span>Bill ID:</span>
                    <span> BILL001</span>
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
    );
}
export default BillDetails;

