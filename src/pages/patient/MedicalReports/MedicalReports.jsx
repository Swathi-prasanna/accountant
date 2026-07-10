import React from "react";
import { Container, Card, Button } from "react-bootstrap";
import { BsDownload } from "react-icons/bs";
import "./MedicalReports.css";
function MedicalRecords() {
  return (
    <Container fluid className="medical-page py-4">
      <div className="medical mb-4">
        <h2 className="medical-title">Medical Records</h2>
        <p className="medical-subtitle">Access your complete medical history</p>
      </div>
      <Card className="record-card shadow-sm">
        <Card.Body>
          <h5 className="section-title mb-3">Recent Visits</h5>
          <Card className="visit-card">
            <div className="card-body">
              <div className="visit-header">
                <div className="visit-content">
                  <h5 className="visit-title">Follow-up Consultation</h5>
                  <p className="doctor-date">Dr. James Wilson - Dec 28, 2025</p>
                  <p className="mb-1">
                    <strong>Diagnosis:</strong> Hypertension, Type 2 Diabetes -
                    Stable condition
                  </p>
                  <p className="mb-0">
                    <strong>Treatment:</strong> Continue current medications.
                    Follow-up in 3 months.
                  </p>
                </div>
                <Button variant="light" className="download-btn1 mt-2 mt-md-0">
                  <BsDownload className="me-2" />
                  Download
                </Button>
              </div>
            </div>
          </Card>
        </Card.Body>
      </Card>
    </Container>
  );
}
export default MedicalRecords;
