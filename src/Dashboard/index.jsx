import { Routes, Route, Navigate } from "react-router-dom";
import Leads from "./Leads";
import Account from "./Accounts";
import MainWindow from "./MainWindow";
import Marketing from "./Marketing";
import Payment from "./Payment";
import Reports from "./Reports";
import Sales from "./Sales";
import Settings from "./Settings";
import Suppport from "./Support";
import Task from "./Tasks";
import Navbar from "./Navbar";

const DashboardIndex = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/MainWindow" element={<MainWindow />} />
        <Route path="/Leads" element={<Leads />} />
        <Route path="/Account" element={<Account />} />
        <Route path="/Marketing" element={<Marketing />} />
        <Route path="/Payment" element={<Payment />} />
        <Route path="/Reports" element={<Reports />} />
        <Route path="/Sales" element={<Sales />} />
        <Route path="/Settings" element={<Settings />} />
        <Route path="/Support" element={<Suppport />} />
        <Route path="/Tasks" element={<Task />} />
        <Route path="*" element={<Navigate to={"./MainWindow"} />} />
      </Routes>
    </>
  )
}

export default DashboardIndex;