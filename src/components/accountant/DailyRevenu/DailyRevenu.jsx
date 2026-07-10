import React from "react";
import { FiDownload, FiPrinter, FiX } from "react-icons/fi";

const summaryItems = [
  {
    label: "Total Revenue",
    value: "₹458,000",
    className: "revenue",
  },
  {
    label: "Collections",
    value: "₹385,000",
    className: "collections",
  },
  {
    label: "Pending",
    value: "₹73,000",
    className: "pending",
  },
  {
    label: "Collection Rate",
    value: "84%",
    className: "rate",
  },
];

const departmentRows = [
  {
    department: "Consultation",
    revenue: "₹125,000",
    transactions: "250",
    total: "27%",
  },
  {
    department: "Pharmacy",
    revenue: "₹156,000",
    transactions: "320",
    total: "34%",
  },
  {
    department: "Laboratory",
    revenue: "₹98,000",
    transactions: "180",
    total: "21%",
  },
  {
    department: "Radiology",
    revenue: "₹79,000",
    transactions: "95",
    total: "17%",
  },
];

const DailyRevenu = ({ onClose }) => {
  return (
    <div className="daily-revenue-overlay" onClick={onClose}>
      <div
        className="daily-revenue-modal"
        onClick={(event) => event.stopPropagation()}
      >
        <div className="daily-revenue-top">
          <div>
            <h2>Daily Revenue Report</h2>
            <p>Daily collection summary</p>
          </div>
          <button className="daily-close-icon" type="button" onClick={onClose}>
            <FiX />
          </button>
        </div>

        <div className="daily-report-document">
          <div className="daily-document-heading">
            <h3>MediCare Hospital</h3>
            <p>Daily Revenue Report</p>
            <span>Date Range: Jan 1-3, 2026</span>
          </div>

          <section className="daily-report-section">
            <h4>Financial Summary</h4>
            <div className="daily-summary-grid">
              {summaryItems.map((item) => (
                <div
                  className={`daily-summary-card ${item.className}`}
                  key={item.label}
                >
                  <span>{item.label}</span>
                  <strong>{item.value}</strong>
                </div>
              ))}
            </div>
          </section>

          <section className="daily-report-section">
            <h4>Department Breakdown</h4>
            <table className="daily-breakdown-table">
              <thead>
                <tr>
                  <th>Department</th>
                  <th>Revenue</th>
                  <th>Transactions</th>
                  <th>% of Total</th>
                </tr>
              </thead>
              <tbody>
                {departmentRows.map((row) => (
                  <tr key={row.department}>
                    <td>{row.department}</td>
                    <td className="daily-green-text">{row.revenue}</td>
                    <td>{row.transactions}</td>
                    <td>{row.total}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </section>

          <p className="daily-generated-text">
            Report generated on 1/19/2026, 8:38:39 PM
          </p>
        </div>

        <div className="daily-modal-actions">
          <button className="daily-download-btn" type="button">
            <FiDownload />
            Download PDF
          </button>
          <button className="daily-print-btn" type="button">
            <FiPrinter />
            Print
          </button>
          <button className="daily-close-btn" type="button" onClick={onClose}>
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default DailyRevenu;
