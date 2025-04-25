// import Onboarding from "./components/employee/Onboarding";
// import Nav_Employee from "./components/Nav_Employee";
// import SideNav from "./components/SideNav";
// import Employ from "./components/Employ";
import Dashboard from "./components/admin/Dashboard";
import Login from "./components/Login";
// import AdminSideNav from "./components/admin/AdminSideNav";
// import { Routes, Route } from 'react-router-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </Router> 
  )
}

export default App
