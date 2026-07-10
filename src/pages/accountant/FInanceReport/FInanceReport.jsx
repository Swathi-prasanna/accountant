import { useState } from "react";
import {FiDownload, FiFileText, FiTrendingUp } from "react-icons/fi";
import { LuClock3 } from "react-icons/lu";
import { TbBuildingBank, TbReceiptTax } from "react-icons/tb";
import DailyRevenu from "../../../components/accountant/DailyRevenu/DailyRevenu";
import office from "../../../assets/images/office.png";
import Container from "../../../assets/images/Container.png";
import Gst from "../../../assets/images/Gst.png";
import './FInanceReport.css';

const reports = [
  {
    title: "Daily Revenue Report",
    description: "Daily collection summary",
    icon: <img src={Container} alt="Office" className="report-image" />,
    tone: "blue",
  },
  {
    title: "Monthly P&L Statement",
    description: "Profit & loss statement",
    icon: <FiTrendingUp />,
    tone: "green",
  },
  {
    title: "GST/Tax Report",
    description: "Tax compliance report",
    icon: <img src={Gst} alt="Office" className="report-image" /> ,
    tone: "purple",
  },
  {
    title: "Department-wise Revenue",
    description: "Revenue by department",
    icon: <img src={office} alt="Office" className="report-image" />,
    tone: "orange",
  },
  {
    title: "Outstanding Report",
    description: "Accounts receivable aging",
    icon: <LuClock3 />,
    tone: "red",
  },
  {
    title: "Insurance Claims Report",
    description: "Claims status summary",
    icon: <FiFileText />,
    tone: "indigo",
  },
];

const FInanceReport = () => {
  const [showDailyRevenue, setShowDailyRevenue] = useState(false);

  return (
    <div className="finance-report-page">
      <div className="finance-report-header">
        <div>
          <h1>Financial Reports</h1>
          <p>Generate and export financial statements</p>
        </div>
        <button className="report-export-all" type="button">
          <FiDownload />
          Export All Reports
        </button>
      </div>

      <div className="report-grid">
        {reports.map((report) => (
          <article className="report-card" key={report.title}>
            <div className={`report-icon ${report.tone}`}>{report.icon}</div>
            <h2>{report.title}</h2>
            <p>{report.description}</p>
            <div className="report-actions">
              <button className="report-preview-btn" type="button">
                Preview
              </button>
              <button
                className="report-export-btn"
                type="button"
                onClick={() => {
                  if (report.title === "Daily Revenue Report") {
                    setShowDailyRevenue(true);
                  }
                }}
              >
                <FiDownload />
                Export
              </button>
            </div>
          </article>
        ))}
      </div>

      <section className="custom-report-card">
        <h2>Custom Report Builder</h2>
        <div className="custom-report-form">
          <label>
            Report Type
            <input type="text" />
          </label>
          <label>
            Date Range
            <input type="text" />
          </label>
          <label>
            Format
            <input type="text" />
          </label>
        </div>
        <button className="generate-custom-report" type="button">
          Generate Custom Report
        </button>
      </section>

      {showDailyRevenue && (
        <DailyRevenu onClose={() => setShowDailyRevenue(false)} />
      )}
    </div>
  );
};

export default FInanceReport;
