import React from "react";
import { CiFilter } from "react-icons/ci";
import { LuDownload } from "react-icons/lu";
import { CiClock2 } from "react-icons/ci";
import { GrAlert } from "react-icons/gr";
import { CiCircleCheck } from "react-icons/ci";
import './Receivables.css';


const agingData = [
  { 
    label: "0-30 days", 
    amount: "₹125K", 
    invoices: "12 invoices" 
  },
  { 
    label: "31-60 days",
     amount: "₹87K", 
     invoices: "8 invoices" 
    },
  { 
    label: "61-90 days", 
    amount: "₹45K", 
    invoices: "5 invoices"
   },
  { 
    label: "90+ days", 
    amount: "₹23K", 
    invoices: "3 invoices"
   },
];

const chartData = [
  { 
    label: "0-30 days", 
    value: 125000 
  },
  {
     label: "31-60 days",
     value: 87000
     },
  { 
    label: "61-90 days", 
    value: 45000 
  },
  { 
    label: "90+ days", 
    value: 23000 
  },
];

const bills = [
  {
    invoice: "BILL002",
    patient: "Sarah Williams",
    date: "2026-01-03",
    amount: "₹1,980",
    outstanding: "₹980",
    overdue: "37 days",
    claim: "N/A",
  },
  {
    invoice: "BILL003",
    patient: "Robert Taylor",
    date: "2026-01-03",
    amount: "₹21,670",
    outstanding: "₹21,670",
    overdue: "5 days",
    claim: "Pending",
  },
];

const claims = [
  {
    type: "pending",
    title: "Pending Approval",
    count: "8 Claims",
    amount: "₹245,000",
    icon: <CiClock2 style={{
      width: 16.67,
      height: 16.67,
      opacity: 1,
      border: "#155DFC"
    }}/>
  },
  {
    type: "approved",
    title: "Approved",
    count: "15 Claims",
    amount: "₹687,000",
    icon:<CiCircleCheck style={{
      width: 16.67,
      height: 16.67,
      opacity: 1,
      color: "#00A63E",
    }}
/>
  },
  {
    type: "rejected",
    title: "Rejected",
    count: "2 Claims",
    amount: "₹45,000",
    icon: <GrAlert  style={{
      width: 16,
      height: 16,
      opacity: 1,
      color: "#E7000B",
    }}/>
  },
];

const Receivables = () => {
  return (
    <div className="accounts-container">
      <div className="receivables-header">
        <div>
          <h1>Accounts Receivable</h1>
          <p>Outstanding payments and insurance claims</p>
        </div>

        <div className="receivables-actions">
          <button className="filter-btn" type="button">
            <span aria-hidden="true"><CiFilter /></span>
            Filter
          </button>
          <button className="export-btn aging-export-btn" type="button">
            <span aria-hidden="true1"><LuDownload /></span>
            Export Aging Report
          </button>
        </div>
      </div>

      <div className="aging-cards">
        {agingData.map((item) => (
          <div className="aging-card" key={item.label}>
            <p>{item.label}</p>
            <h2>{item.amount}</h2>
            <span>{item.invoices}</span>
          </div>
        ))}
      </div>

      <section className="receivable-card aging-analysis-card">
        <h3>Aging Analysis</h3>
        <div className="aging-chart">
          <div className="chart-scale">
            <span>140000</span>
            <span>105000</span>
            <span>70000</span>
            <span>35000</span>
            <span>0</span>
          </div>
          <div className="chart-plot">
            {chartData.map((item) => (
              <div className="chart-column" key={item.label}>
                <div
                  className="chart-bar"
                  style={{ height: `${(item.value / 140000) * 100}%` }}
                />
                <span>{item.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="receivable-card outstanding-card">
        <h3>Outstanding Bills</h3>
        <div className="receivables-table-wrap">
          <table className="receivables-table">
            <thead>
              <tr>
                <th>Invoice</th>
                <th>Patient</th>
                <th>Date</th>
                <th>Amount</th>
                <th>Outstanding</th>
                <th>Days Overdue</th>
                <th>Insurance Claim</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {bills.map((bill) => (
                <tr key={bill.invoice}>
                  <td>
                    <span className="bill-badge2">{bill.invoice}</span>
                  </td>
                  <td>{bill.patient}</td>
                  <td>{bill.date}</td>
                  <td>{bill.amount}</td>
                  <td className="red-text">{bill.outstanding}</td>
                  <td>
                    <span
                      className={`overdue-badge ${
                        bill.overdue === "5 days" ? "green" : ""
                      }`}
                    >
                      {bill.overdue}
                    </span>
                  </td>
                  <td>
                    <span
                      className={
                        bill.claim === "Pending" ? "pending-badge" : "na-badge"
                      }
                    >
                      {bill.claim}
                    </span>
                  </td>
                  <td>
                    <div className="bill-actions">
                      <button className="follow-btn" type="button">
                        Follow Up
                      </button>
                      <button className="collect-btn" type="button">
                        Collect
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="receivable-card claims-card">
        <div className="claims-header">
          <h3>Insurance Claims Status</h3>
          <button className="submit-btn" type="button">
            Submit New Claim
          </button>
        </div>

        <div className="claims-grid">
          {claims.map((claim) => (
            <div className={`claim-box ${claim.type}`} key={claim.title}>
              <p>
                <span aria-hidden="true2">{claim.icon}</span>
                {claim.title}
              </p>
              <h2>{claim.count}</h2>
              <strong>{claim.amount}</strong>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Receivables;
