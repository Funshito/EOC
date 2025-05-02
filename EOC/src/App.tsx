// import Onboarding from "./components/employee/Onboarding";
// import Nav_Employee from "./components/Nav_Employee";
// import SideNav from "./components/SideNav";
// import Employ from "./components/Employ";
import Dashboard from "./components/admin/Dashboard";
import Login from "./components/Login";
import Document from "./components/admin/pages/Document"
// import Employment from "./components/admin/pages/Employment"
import Salary from "./components/admin/pages/Salary"
import Staffs from "./components/admin/pages/Staffs"
import Employ from "./components/Employ";
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
        <Route path="/documents" element={<Document />} />
        <Route path="/salary" element={<Salary />} />
        <Route path="/employ" element={<Employ />} />
        {/* <Route path="/employment" element={<Employment />} /> */}
        {/* <Route path="/onboarding" element={<Staffs />} /> */}
      </Routes>
    </Router> 
  )
}

export default App
