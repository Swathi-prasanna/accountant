import { useState } from "react";
import Enterresult from '../Enterresult/Enterresult';
import StartProcessing from "../start processing/start processing";
import LaboratoryReport from "../Laboratory dashboard/Laboratory dashboard";
import './TestQueue.css';
const TestQueue=() =>{
    const [selectedOrder, setSelectedOrder] = useState(null);
    const [processingOrder, setProcessingOrder] = useState(null);
    const [reportOrder, setReportOrder] = useState(null);
    const testData=[
        {
            orderid:"LAB001",
            patient:"John Anderson",
            patientid:"PAT001",
            test:"Complete Blood Count (CBC)",
            doctor:"Dr.James Wilson",
            priority:"routine",
            status:"processing",
            action:"Enter Results",
            btnClass:"btn-success",
        },
        {
            orderid:"LAB002",
            patient:"Sarah Williams",
            patientid:"PAT002",
            test:"Lipid Profile",
            doctor:"Dr.Lisa Brown",
            priority:"routine",
            status:"sample-collected",
            action:"Start Processing",
            btnClass:"btn-primary",
        },
        {
            orderid:"LAB003",
            patient:"Emily Davis",
            patientid:"PAT004",
            test:"HbA1c",
            doctor:"Dr.James Wilson",
            priority:"routine",
            status:"completed",
            action:"View Report",
            btnClass:"btn-light border",
        },
        {
            orderid:"LAB004",
            patient:"Robert Taylor",
            patientid:"PAT005",
            test:"Troponin I",
            doctor:"Dr. Emily Chen",
            priority:"stat",
            status:"processing",
            action:"Enter Results",
            btnClass:"btn-success",
        },
    ];
    return(
    <section className="test-queue-section">
        <div className="test-queue-container">
            <div className="card border-0 shadow-sm">
                <div className="card-body">
                    <div className="test-queue">Test Queue</div>
                    <div className="table-wrapper">
                        <table className="table test-table align-middle">
                            <thead className="table-light">
                                <tr>
                                    <th>Order ID</th>
                                    <th>Patient</th>
                                    <th>Test</th>
                                    <th>Ordered By</th>
                                    <th>Priority</th>
                                    <th>Status</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                 {testData.map((item,index)=>(<tr key={index}>
                                    <td>{item.orderid}</td>
                                    <td>
                                        <div className="fw-medium">{item.patient}</div>
                                        <small className="text-muted">
                                            {item.patientid}
                                        </small>
                                    </td>
                                    <td>{item.test}</td>
                                    <td>{item.doctor}</td>
                                    <td>
                                        <span className={`badge rounded-pill px-3 py-2 ${
                                            item.priority === "stat" ? "bg-danger-subtle text-danger"
                                            : "bg-primary-subtle text-primary"}`}>{item.priority}
                                            </span>
                                     </td>
                                    <td>
                                        <span className={`badge rounded-pill px-3 py-2 ${
                                        item.status === "processing"? "bg-warning-subtle text-warning"
                                        : item.status === "sample-collected"? "bg-info-subtle text-primary"
                                        : "bg-success-subtle text-success"}`}> {item.status}</span>
                                    </td>
                                    <td>
                                         <button
                                            className={`btn ${item.btnClass}`}
                                            type="button"
                                            onClick={() => {
                                                if (item.action === "Enter Results") {
                                                    setSelectedOrder(item);
                                                }
                                                if (item.action === "Start Processing") {
                                                    setProcessingOrder(item);
                                                }
                                                if (item.action === "View Report") {
                                                    setReportOrder(item);
                                                }
                                            }}
                                         >
                                            {item.action}
                                         </button>
                                            </td> 
                                             </tr>
                                             ))}
                                </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
        {selectedOrder && (
            <Enterresult
                order={selectedOrder}
                onClose={() => setSelectedOrder(null)}
            />
        )}
        {processingOrder && (
            <StartProcessing
                order={processingOrder}
                onClose={() => setProcessingOrder(null)}
            />
        )}
        {reportOrder && (
            <LaboratoryReport
                order={reportOrder}
                onClose={() => setReportOrder(null)}
            />
        )}
    </section>
   );
};
export default TestQueue;
