import React, { useState } from "react";
import { FiX } from "react-icons/fi";
import { CiFileOn } from "react-icons/ci";
import { MdOutlineFileUpload } from "react-icons/md";
import { FaRegFileLines } from "react-icons/fa6";
import "./upload.css";
const Upload = ({ show, onClose }) => {
  const [formData, setFormData] = useState({
    category: "",
    file: null,
    fileName: "",
    notes: "",
  });
  const [isDragging, setIsDragging] = useState(false);
  if (!show) return null;
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFormData((prev) => ({
        ...prev,
        file,
        fileName: file.name,
      }));
    }
  };
  const handleDragOver = (e) => {
    e.preventDefault();
    setIsDragging(true);
  };
  const handleDragLeave = () => {
    setIsDragging(false);
  };
  const handleDrop = (e) => {
    e.preventDefault();
    setIsDragging(false);
    const file = e.dataTransfer.files[0];
    if (file) {
      setFormData((prev) => ({
        ...prev,
        file,
        fileName: file.name,
      }));
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Uploading document:", formData);
    onClose();
    setFormData({
      category: "",
      file: null,
      fileName: "",
      notes: "",
    });
  };
  return (
    <div className="upload-modal-overlay" onClick={onClose}>
      <div
        className="upload-modal-content"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="upload-modal-header">
          <h3 className="upload-modal-title">Upload Medical Document</h3>
          <button type="button" className="btn border-0 p-0 m-0 bg-transparent" onClick={onClose}>
            <FiX className="text-muted fs-4" style={{ cursor: "pointer" }} />
          </button>
        </div>
        <form onSubmit={handleSubmit} className="upload-modal-body">
          <div className="upload-form-group">
            <label className="upload-form-label">Document Category *</label>
            <select
              name="category"
              value={formData.category}
              onChange={handleChange}
              className="upload-form-select"
              required
            >
              <option value="">Select category</option>
              <option value="Medical Reports">Medical Reports</option>
              <option value="Lab Reports">Lab Reports</option>
              <option value="Prescriptions">Prescriptions</option>
              <option value="Medical Images">Medical Images</option>
              <option value="Other">Other</option>
            </select>
          </div>
          <div className="upload-form-group">
            <label className="upload-form-label">Select File(s) *</label>
            <div
              className={`upload-dropzone ${isDragging ? "dragging" : ""} ${formData.file ? "has-file" : ""}`}
              onDragOver={handleDragOver}
              onDragLeave={handleDragLeave}
              onDrop={handleDrop}
            >
              <input
                type="file"
                id="file-upload"
                onChange={handleFileChange}
                accept=".pdf,.png,.jpg,.jpeg"
                className="upload-file-input"
                required
              />
              <label htmlFor="file-upload" className="upload-dropzone-content">
                {formData.file ? (
                  <div className="upload-file-selected">
                    <CiFileOn size={36} color="#00A6F4" />
                    <span className="upload-file-name">
                      {formData.fileName}
                    </span>
                  </div>
                ) : (
                  <div className="upload-dropzone-prompt">
                    <MdOutlineFileUpload size={48} clor="#90A1B9" />
                    <p className="upload-dropzone-text">
                      Click to upload or drag and drop
                    </p>
                    <p className="upload-dropzone-hint">
                      PNG, JPG, PDF up to 10MB
                    </p>
                  </div>
                )}
              </label>
            </div>
          </div>
          <div className="upload-form-group">
            <label className="upload-form-label">Document Name</label>
            <input
              type="text"
              name="fileName"
              value={formData.fileName}
              onChange={handleChange}
              className="upload-form-input"
              placeholder="e.g., Blood Test Report - Jan 2026"
            />
          </div>
          <div className="upload-form-group">
            <label className="upload-form-label">Notes (Optional)</label>
            <textarea
              name="notes"
              value={formData.notes}
              onChange={handleChange}
              className="upload-form-textarea"
              placeholder="Add any notes about this document..."
              rows={3}
            />
          </div>
          <div className="upload-info-box">
            <p className="upload-info-text">
              <FaRegFileLines size="22" /> <strong>Privacy Notice:</strong> Your
              documents are securely encrypted and only accessible to you and
              authorized healthcare providers.
            </p>
          </div>
          <div className="upload-modal-footer">
            <button type="submit" className="upload-confirm-btn">
              <MdOutlineFileUpload size={18} className="me-2" />
              Upload Document
            </button>
            <button
              type="button"
              className="upload-cancel-btn"
              onClick={onClose}
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
export default Upload;
