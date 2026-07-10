import React, { useState } from "react";
import { MdOutlineFileUpload } from "react-icons/md";
import { CiFileOn } from "react-icons/ci";
import { HiOutlinePhotograph } from "react-icons/hi";
import { FaEye, FaDownload } from "react-icons/fa";
import { FiUpload } from "react-icons/fi";
import Upload from "../../../components/patient/upload/upload";
import "./MyDocuments.css";
function MyDocuments() {
  const [showModal, setShowModal] = useState(false);
  const [documents] = useState([]);
  return (
    <div className="mydocuments-page">
      <div className="documents-header">
        <div>
          <h2 className="page-title">My Documents</h2>
          <p className="page-subtitle">
            Upload and manage your medical documents, scans, and reports
          </p>
        </div>
        <button className="btn upload-btn" onClick={() => setShowModal(true)}>
          <MdOutlineFileUpload size={22} className="me-2" />
          Upload Document
        </button>
      </div>
      <div className="row g-3 mb-4">
        <div className="col-md-4">
          <div className="summary-card">
            <div className="summary-title">Total Documents</div>
            <h6>0 Files</h6>
          </div>
        </div>
        <div className="col-md-4">
          <div className="summary-card">
            <div className="summary-title">Scans & Images</div>
            <h6>0 Files</h6>
          </div>
        </div>
        <div className="col-md-4">
          <div className="summary-card">
            <div className="summary-title">Reports & PDFs</div>
            <h6>0 Files</h6>
          </div>
        </div>
      </div>
      <div className="documents-box">
        <h4 className="section-title">My Uploaded Documents</h4>
        {documents.length === 0 ? (
          <div className="empty-state text-center py-5">
            <div className="empty-state-icon mb-3">
              <FiUpload size={48} color="#90A1B9" />
            </div>
            <h5 className="text-muted">No documents found</h5>
            <p className="text-muted mb-4">You haven't uploaded any medical documents yet.</p>
            <button className="btn btn-primary" onClick={() => setShowModal(true)}>
              <MdOutlineFileUpload className="me-2" /> Upload Your First Document
            </button>
          </div>
        ) : (
          documents.map((doc) => (
            <div
              className="document-card d-flex justify-content-between align-items-center"
              key={doc.id}
            >
              <div className="d-flex align-items-start">
                <div className="file-icon" style={{ color: doc.color }}>
                  {doc.icon}
                </div>
                <div>
                  <h5 className="document-name">{doc.name}</h5>
                  <div className="document-meta">
                    <span className="document-badge">{doc.type}</span>
                    <span>Size: {doc.Size}</span>
                    <span className="mx-2">|</span>
                    <span>Uploaded: {doc.uploaded}</span>
                  </div>
                  <p className="document-note">
                    <strong>Note:</strong> {doc.note}
                  </p>
                </div>
              </div>
              <div>
                <button className="btn btn-light me-2">
                  <FaEye className="me-1" />
                  View
                </button>
                <button className="btn btn-light">
                  <FaDownload />
                </button>
              </div>
            </div>
          ))
        )}
      </div>
      <Upload show={showModal} onClose={() => setShowModal(false)} />
    </div>
  );
}
export default MyDocuments;
