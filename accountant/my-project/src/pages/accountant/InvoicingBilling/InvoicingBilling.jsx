import React,{useState} from "react";
import { FaRegFileLines } from "react-icons/fa6";
import { FiX } from "react-icons/fi";
import './InvoicingBilling.css';

function InvoicingBilling(){
    const[items, setitems]=useState([{
        description:"",
        dept:" ",
        qty:1,
        rate:0,
    },
]);
const[showModal,setShowModal]=useState(false);
const additem=()=>{
    setitems([...items,{
        description:" ",
        dept:" ",
        qty:1,
        rate:0,
    }]);
};
return(
    <div className="invoice-page">
        <div className="header">
            <div>
            <h1>invoicing & Billing</h1>
            <p>Generate consolidated bills across departments</p>
            </div>
        
        <button className="new-invoice-btn" type="button" onClick={()=>setShowModal(true)}>
           <FaRegFileLines size={16}/> New Invoice
        </button>
      </div>
      {showModal &&(
        <div
            className="model-overlay"
            style={{
                background:"rgba(0,0,0,0.45)",
                display:"flex",
                alignItems:"center",
                justifyContent:"center",
                position:"fixed",
                inset:0,
                zIndex:1000
            }}
            onClick={()=>setShowModal(false)}
        >
            <div
                className="model-content"
                style={{width:"430px",background:"#fff",borderRadius:"10px",padding:"24px",boxShadow:"0 12px 30px rgba(0,0,0,0.18)",position:"relative"}}
                onClick={(event)=>event.stopPropagation()}
            >
                <button className="close-btn" type="button" onClick={()=>setShowModal(false)}><FiX /></button>
                <h3>New Invoice</h3>
                <div className="form-group">
                    <label>Patient</label>
                    <input type="text" placeholder="Search patient..."/>
                </div>
                <div className="form-group">
                    <label>Invoice Date</label>
                    <input type="date"/>
                </div>
                <div className="form-group">
                    <label>Department</label>
                    <input type="text"/>
                </div>
                <div className="form-group">
                    <label>Service/Item</label>
                    <input type="text" placeholder="Enter service/item"/>
                </div>
                <div className="form-group">
                    <label>Quantity</label>
                    <input type="number" defaultValue="1"/>
                </div>
                <div className="form-group">
                    <label>Rate</label>
                    <input type="number" defaultValue="0"/>
                </div>
                <div className="form-group">
                    <label>Amount</label>
                    <input type="number" defaultValue="0"/>
                </div>
                <div className="form-group">
                    <label>Discount</label>
                    <input type="number" defaultValue="0"/>
                </div>
                <div className="form-group">
                    <label>Total Amount</label>
                    <input type="number" defaultValue="0"/>
                </div>
                <div className="action-buttons" style={{margin:"16px 0 0"}}>
                    <button className="generate-btn" type="button">
                        Generate Invoice
                    </button>
                    <button className="draft-btn" type="button">
                        Save as Draft
                    </button>
                    <button className="clear-btn" type="button" onClick={()=>setShowModal(false)}>
                        Clear
                    </button>
                </div>
            </div>
        </div>
      )}
      <div className="invoice-layout">
        <div className="invoice-card">
            <h2>Create Invoice</h2>
            <div className="top-Form">
                <div className="form-group">
                    <label>Patient</label>
                    <input type="text" placeholder="Search patient"/>
                </div>
                <div className="form-group">
                    <label>Invoice Date</label>
                    <input type="date"/>
                </div>
            </div>
            <label className="section-label">
                Select Departments to include
            </label>
            <div className="department-grid">
                <button>Consultation</button>
                <button>Laboratory</button>
                <button>Pharmacy</button>
                <button>Radiology</button>
                <button>Surgery</button>
                <button>Other</button>
            </div>
            <div className="bill-header">
                <h3>Bill Items</h3>
                <button className="add-btn" onClick={additem}>
                    Add item
                </button>
            </div>
            <div className="table-wrapper">
                <table>
                    <thead>
                        <tr>
                            <th>Description</th>
                            <th>Dept</th>
                            <th>Qty</th>
                            <th>Rate</th>
                            <th>Amount</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {items.map((item,index)=>(<tr key={index}><td><input type="text" placeholder="Service/item"/></td>
                        <td><input type="text"/></td>
                        <td><input type="number" defaultValue="1"/></td>
                        <td><input type="number" defaultValue="0"/></td>
                        <td>0</td>
                        <td className="delete-btn">x</td>
                        </tr>))}
                    </tbody>
                </table>
            </div>
            <div className="summary-box">
                <div>
                    <span>Subtotal:</span>
                    <span>0</span>
                </div>
                <div>
                    <span>GST(18%):</span>
                    <span>0</span>
                </div>
                <div className="total-row">
                    <span>Total Amount:</span>
                    <span>0</span>
                </div>
            </div>
            <div className="action-buttons">
                <button className="generate-btn">
                    Generate Invoice
                </button>
                <button className="draft-btn">
                    Save as Draft
                </button>
                <button className="clear-btn">
                    Clear
                </button>
            </div>
        </div>
        <div className="invoice-sidebar">
            <div className="side-card">
                <h3>Quick Services</h3>
                <div className="service-item">
                    <span>General Consultation</span>
                    <span>₹500</span>
                </div>
                <div className="service-item">
                    <span>Specialist Consultation</span>
                    <span>₹800</span>
                </div>
                <div className="service-item">
                    <span>ECG</span>
                    <span>₹400</span>
                </div>
                <div className="service-item">
                    <span>X-Ray</span>
                    <span>₹800</span>
                </div>
                <div className="service-item">
                    <span>CBC</span>
                    <span>₹300</span>
                </div>
            </div>
            <div className="side-card">
                <h3>Discount Schemes</h3>
                <div className="discount-box">
                    <strong>Senior CitiZen</strong>
                    <p>10% discount</p>
                </div>
                <div className="discount-box">
                    <strong>Insurance</strong>
                    <p>As per policy</p>
                </div>
                <div className="discount-box">
                    <strong>Staff Employee</strong>
                    <p>20% discount</p>
                </div>
            </div>
        </div>
      </div>
    </div>
);
}
export default InvoicingBilling;
