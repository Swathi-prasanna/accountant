import DashboardPage from "./pages/accountant/DashboardPage/DashboardPage";

import { Route, Routes } from "react-router-dom";
import Sidebar from "./components/common/Sidebar/Sidebar";
import Navbar from "./components/common/Navbar/Navbar";
import Finance from "./components/accountant/FinanceDasboard/FinanceDasboard";
import KPI from "./components/accountant/KPI/KPI";
import Charts from "./components/accountant/Charts/Charts";
import Recent from "./components/accountant/Recent transaction/Recent transaction";
import InvoicingBilling from "./pages/accountant/InvoicingBilling/InvoicingBilling";
import Receivables from "./pages/accountant/Receivables/Receivables";
import FInanceReport from "./pages/accountant/FInanceReport/FInanceReport";
import Refunds from "./pages/accountant/Refunds/Refunds";

const Dashboard = () => (
  <>
    <Finance />
    <KPI />
    <Charts />
    <Recent />
  </>
);

function App() {
  return (
    <div className="App">
      <div className="app-layout">
        <Sidebar />

        <main className="content">
          <Navbar />

          <Routes>
            <Route path="/" element={<DashboardPage />} />
            <Route path="/invoicing" element={<InvoicingBilling />} />
            <Route path="/receivables" element={<Receivables />} />
            <Route path="/financial-reports" element={<FInanceReport />} />
            <Route path="/Refunds" element={<Refunds />} />
          </Routes>
        </main>
      </div>
    </div>
  );
}

export default App;
