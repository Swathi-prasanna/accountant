import { useState } from "react";
import Startprocess2 from "../startprocess2/startprocess2";
import './start processing.css';
const StartProcessing = ({ order, onClose }) => {
  const [showChecklistStep, setShowChecklistStep] = useState(false);
  const currentOrder = order || {
    orderid: "LAB002",
    patient: "Sarah Williams",
    patientid: "PAT002",
    test: "Lipid Profile",
    doctor: "Dr. Lisa Brown",
    priority: "routine",
  };
  if (showChecklistStep) {
    return <Startprocess2 order={currentOrder} onClose={onClose} />;
  }
  return (
    <div className="processing-overlay">
      <div className="processing-modal">
        <div className="processing-header">
          <div>
            <h2>Start Processing</h2>
            <p>
              {currentOrder.orderid} - {currentOrder.test}
            </p>
          </div>
          <button
            type="button"
            className="processing-close"
            onClick={onClose}
            aria-label="Close start processing form"
          >
            x
          </button>
        </div>
        <div className="processing-summary">
          <div>
            <span>Patient</span>
            <strong>{currentOrder.patient}</strong>
            <small>{currentOrder.patientid}</small>
          </div>
          <div>
            <span>Test Type</span>
            <strong>{currentOrder.test}</strong>
          </div>
          <div>
            <span>Priority</span>
            <strong className="processing-badge">{currentOrder.priority}</strong>
          </div>
          <div>
            <span>Ordered By</span>
            <strong>{currentOrder.doctor}</strong>
          </div>
        </div>
        <form className="processing-form">
          <label>
            <span>Sample ID *</span>
            <input type="text" className="id" defaultValue={currentOrder.orderid} />
          </label>
          <div className="processing-row" >
            <label>
              <div className="Process">Processing Started By *</div>
              <input type="text" defaultValue="Lab Tech - Dr. Michael Lee" />
            </label>
            <label>
              <div className="time">Processing Start Time *</div>
              <input type="text" />
            </label>
          </div>  
          <label>
            <div className="equipment">Equipment Used *</div>
            <input type="text"/>
          </label>
          <label>
            <div className="sample">Sample Condition</div>
            <input type="text"/>
          </label>
          <div className="processing-actions">
            <button type="button" className="btn btn-light" onClick={onClose}>
              Cancel
            </button>
            <button
              type="button"
              className="btn btn-primary"
              onClick={() => setShowChecklistStep(true)}
            >
              Confirm Start Processing
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
export default StartProcessing;
