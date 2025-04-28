// import Onboarding from "./components/employee/Onboarding";
// import Nav_Employee from "./components/Nav_Employee";
// import SideNav from "./components/SideNav";
// import Employ from "./components/Employ";
import Dashboard from "./components/admin/Dashboard";
import Login from "./components/Login";
import Staffs from "./components/admin/pages/Staffs"
// import AdminSideNav from "./components/admin/AdminSideNav";
// import { Routes, Route } from 'react-router-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/staffs" element={<Staffs />} />
        <Route path="/documents" element={<Staffs />} />
        <Route path="/salary" element={<Staffs />} />
        <Route path="/employment" element={<Staffs />} />
        <Route path="/onboarding" element={<Staffs />} />
      </Routes>
    </Router> 
  )
}

export default App
