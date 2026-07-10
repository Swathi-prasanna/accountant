import React from "react";
import { FiX } from "react-icons/fi";
import { MdOutlineFileDownload } from "react-icons/md";
import "./view.css";
function ViewResultsModal({ show, onClose, reportData }) {
  if (!show) return null;
  return (
    <div className="view-modal-overlay" onClick={onClose}>
      <div className="view-modal-content" onClick={(e) => e.stopPropagation()}>
        <div className="view-modal-header">
          <h3 className="view-modal-title">Lab Test Results</h3>
          <h4 className="view-test-name">{reportData.testName}</h4>
          <button type="button" className="btn border-0 p-0 m-0 bg-transparent" onClick={onClose}>
            <FiX className="text-muted fs-4" style={{ cursor: "pointer" }} />
          </button>
        </div>
        <div className="view-modal-body">
          <div className="view-report-header">
            <div className="view-report-meta">
              <div className="view-meta-item">
                <span className="view-meta-label">Test ID</span>
                <span className="view-meta-value">{reportData.testId}</span>
              </div>
              <div className="view-meta-item">
                <span className="view-meta-label">Status</span>
                <span className="view-meta-value view-status-completed">
                  completed
                </span>
              </div>
              <div className="view-meta-item">
                <span className="view-meta-label">Ordered By</span>
                <span className="view-meta-value">{reportData.doctor}</span>
              </div>
              <div className="view-meta-item">
                <span className="view-meta-label">Completed Date</span>
                <span className="view-meta-value">{reportData.date}</span>
              </div>
            </div>
          </div>
          <div className="view-results-section">
            <h5 className="view-section-title">Test Results</h5>
            <div className="view-results-table">
              <div className="view-table-header">
                <span>Parameter</span>
                <span>Result</span>
                <span>Normal Range</span>
                <span>Status</span>
              </div>
              {reportData.results.map((result, index) => (
                <div key={index} className="view-table-row">
                  <span className="view-parameter">{result.parameter}</span>
                  <span className="view-result-value">{result.value}</span>
                  <span className="view-normal-range">
                    {result.normalRange}
                  </span>
                  <span
                    className={`view-result-status ${result.status === "Normal" ? "view-status-normal" : "view-status-abnormal"}`}
                  >
                    {result.status}
                  </span>
                </div>
              ))}
            </div>
          </div>
          {reportData.notes && (
            <div className="view-notes-section">
              <h5 className="view-section-title">Doctor's Notes</h5>
              <p className="view-notes-text">{reportData.notes}</p>
            </div>
          )}
        </div>
        <div className="view-modal-footer">
          <button className="view-download-btn" onClick={() => {
            console.log("Downloading report:", reportData?.testId);
            onClose();
          }}>
            <MdOutlineFileDownload className="me-2" />
            Download Full Report
          </button>
          <button className="view-close-modal-btn" onClick={onClose}>
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
export default ViewResultsModal;
