import React, { useState } from "react";
import { MdOutlineFileDownload } from "react-icons/md";
import ViewResultsModal from "../../../components/patient/view/view";
import "./LabReport.css";
function LabReport() {
  const [showModal, setShowModal] = useState(false);
  const reportData = {
    testName: "HbA1c",
    testId: "LAB003",
    doctor: "Dr. James Wilson",
    date: "2026-01-03 10:30",
    results: [
      {
        parameter: "Hemoglobin A1c (HbA1c)",
        value: "7.2%",
        normalRange: "4.0 - 5.6%",
        status: "Abnormal",
      },
      {
        parameter: "Fasting Blood Glucose",
        value: "145 mg/dL",
        normalRange: "70 - 99 mg/dL",
        status: "Abnormal",
      },
      {
        parameter: "Estimated Average Glucose",
        value: "159 mg/dL",
        normalRange: "68 - 100 mg/dL",
        status: "Abnormal",
      },
    ],
    notes:
      "Patient's blood glucose levels indicate poor glycemic control. Continue current medication regimen and follow up in 3 months to reassess. Advised patient to continue with low-carb diet and regular exercise.",
  };
  return (
    <div className="lab-page">
      <h2 className="lab-title">Lab Reports</h2>
      <p className="lab-subtitle">View your laboratory test results</p>
      <div className="card body-card1">
        <div className="card-body2 d-flex justify-content-between align-items-center flex-wrap gap-3">
          <div>
            <h5 className="report-title">HbA1c</h5>
            <p className="report-text">
              Ordered by Dr. James Wilson - 2026-01-03 10:30
            </p>
          </div>
          <div className="d-flex gap-2">
            <button className="btn btn-light">
              <MdOutlineFileDownload className="me-1" />
              Download PDF
            </button>
            <button
              className="btn btn-primary"
              onClick={() => setShowModal(true)}
            >
              View Results
            </button>
          </div>
        </div>
      </div>
      <ViewResultsModal
        show={showModal}
        onClose={() => setShowModal(false)}
        reportData={reportData}
      />
    </div>
  );
}
export default LabReport;
