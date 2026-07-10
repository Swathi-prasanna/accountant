import "./index.css";
import { Routes, Route } from "react-router-dom";
import PatientNavbar from "./components/common/PatientNavbar/PatientNavbar";
import PatientSidebar from "./components/common/PatientSidebar/PatientSidebar";
import DashboardPage from "./pages/patient/DashboardPage/DashboardPage";
import MedicalReport from "./pages/patient/MedicalReports/MedicalReports";
import Prescriptions from "./pages/patient/Prescriptions/Prescriptions";
import Appointment from "./pages/patient/Appointment/Appointment";
import LabReport from "./pages/patient/LabReport/LabReport";
import Billpayment from "./pages/patient/Billpayment/Billpayment";
import MyDocuments from "./pages/patient/MyDocuments/MyDocuments";
function App() {
  return (
    <div className="app-layout">
      <PatientSidebar />
      <div className="content">
        <PatientNavbar />
        <Routes>
          <Route path="/" element={<DashboardPage />} />
          <Route path="/PrescriptionPage" element={<Appointment />} />
          <Route path="/Inventorypage" element={<MedicalReport />} />
          <Route path="/DispensingPa" element={<Prescriptions />} />
          <Route path="/DispensingPge" element={<LabReport />} />
          <Route path="/upload" element={<MyDocuments />} />
          <Route path="/DispensigPage" element={<Billpayment />} />
        </Routes>
      </div>
    </div>
  );
}
export default App;
