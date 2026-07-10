import {FiClock} from "react-icons/fi";
import {FiCheckCircle} from "react-icons/fi";
import {FiFileText} from "react-icons/fi";
import { FiAlertTriangle } from "react-icons/fi";
import './Refunds.css';


const Refunds = () => {
  return (
    <div className="refunds-page">
    
      <div className="refunds-container">

        <div className="refund-header">
          <div className="header-left">
            <div className="heading">Refunds & Adjustments</div>

            <div className="sub-heading">
              Manage refund requests and approvals
            </div>
          </div>

          <div className="header-right">
            <button className="refund-btn">
              <FiFileText  />
              <span>New Refund Request</span>
            </button>
          </div>
        </div>
        <div className="refund-cards">
          <div className="refund-card">
            <div className="card-top">
              <div className="icon orange">
                <FiClock width={20} height={20} opacity={1} />
              </div>

              <div className="title">Pending Approval</div>
            </div>

            <div className="count">1</div>

            <div className="amount orange-text">₹500 total</div>
          </div>

          <div className="refund-card">
            <div className="card-top">
              <div className="icon green">
                <FiCheckCircle width={20} height={20} opacity={1}/>
              </div>

              <div className="title">Approved</div>
            </div>

            <div className="count">1</div>

            <div className="amount green-text">₹1,200 total</div>
          </div>

          <div className="refund-card">
            <div className="card-top">
              <div className="icon red">
                <FiAlertTriangle width={20} height={20} opacity={1} />
              </div>

              <div className="title">Rejected</div>
            </div>

            <div className="count">1</div>

            <div className="amount">₹300 total</div>
          </div>
        </div>
      </div>

      <div className="refund-table-container">
        <div className="table-title">Refund Requests</div>

        <table className="refund-table">
          <thead>
            <tr>
              <th>Refund ID</th>
              <th>Bill ID</th>
              <th>Patient</th>
              <th>Amount</th>
              <th>Reason</th>
              <th>Requested By</th>
              <th>Date</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td>
                <span className="refund-id-badge">REF001</span>
              </td>
              <td>
                <span className="bill-badge">BILL001</span>
              </td>
              <td>John <br />Anderson</td>
              <td className="amount-red">₹500</td>
              <td>Service not <br />provided</td>
              <td>Maria <br />Rodriguez</td>
              <td>2026-01<br/>-03</td>
              <td>
                <span className="status pending">Pending</span>
              </td>
              <td>
                <button className="approve-btn">Approve</button>
                <button className="reject-btn">Reject</button>
              </td>
            </tr>

            <tr>
              <td>
                <span className="refund-id-badge">REF002</span>
              </td>
              <td>
                <span className="bill-badge">BILL005</span>
              </td>
              <td>Sarah Williams</td>
              <td className="amount-red">₹1,200</td>
              <td>Duplicate payment</td>
              <td>Front Desk</td>
              <td>2026-01<br/>-02</td>
              <td>
                <span className="status approved">Approved</span>
              </td>
              <td>
                <button className="view-btn">View Details</button>
              </td>
            </tr>

            <tr>
              <td>
                <span className="refund-id-badge">REF003</span>
              </td>
              <td>
                <span className="bill-badge">BILL008</span>
              </td>
              <td>Michael Chen</td>
              <td className="amount-red">₹300</td>
              <td>Discount <br />adjustment</td>
              <td>Reception</td>
              <td>2026-01<br/>-01</td>
              <td>
                <span className="status rejected">Rejected</span>
              </td>
              <td>
                <button className="view-btn">View Details</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    

    <div className="workflow-container">

      <div className="workflow-header">
        <FiAlertTriangle className="workflow-icon" />

        <div className="workflow-title">
          Refund Approval Workflow
        </div>
      </div>

      <div className="workflow-content">
        <ul>
          <li>All refunds require Finance Manager approval</li>
          <li>Refunds above ₹5,000 require Admin sign-off</li>
          <li>Approved refunds are processed within 3-5 business days</li>
          <li>All refund actions are logged in the audit trail</li>
        </ul>
      </div>

    </div>
    </div>
  
  );
};

export default Refunds;