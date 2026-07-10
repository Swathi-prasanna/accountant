import React,{useState} from "react";
import { FiX } from "react-icons/fi";
import './Invoice.css';

const Invoice=()=>{
    const[showModal,setShowModal]=useState(false);
    return(
    <div className="invoice-page">
      <button className="new-invoice-btn" onClick={()=>setShowModal(true)}>
        New invoice
      </button>
      {showModal &&(
        <div className="modal-overlay">
            <div className="modal-content">
                <div className="modal-content">
                    <span className="close-btn" onClick={()=> setShowModal(false)}><FiX /></span>
                    <h3>New Invoice</h3>
                    <div className="form-group">
                        <label>Patient</label>
                        <input type="text" placeholder="search patient.."/>
                    </div>
                    <div className="form-group">
                        <label>invoice Date</label>
                        <input type="date" />
                    </div>
                    <div className="form-group">
                        <label>Department</label>
                        <input type="text" />
                    </div>
                    <div className="form-group">
                        <label>Services/Item</label>
                        <input type="text"placeholder="Enter service item"/>
                    </div>
                    <div className="form-group">
                        <label>Quantity</label>
                        <input type="number" defaultValue="1" />
                    </div>
                    <div className="btn-group">
                        <button className="generate-btn">
                            Generate invoice
                        </button>
                        <button className="draft-btn">
                            Save as Draft
                        </button>
                        <button className="cleae-btn" onclick={()=>setShowModal(false)}>
                            Clear
                        </button>
                    </div>
                </div>

            </div>
        </div>
      )}

    </div>
    );
};
export default Invoice;
