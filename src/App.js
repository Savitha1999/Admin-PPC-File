




import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import "./App.css";
import Admin from "./Admin";
import Dashboard from "./Dashboard";
import EditProperty from "./EditProperty";
import GetForm from "./DataAddAdmin/GetForm";
import AdminSetForm from "./DataAddAdmin/AdminSetForm";
import Plan from "./Plan";
import Detail from "./Detail";


const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/admin" />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/dashboard/*" element={<Dashboard />} />

         <Route path="/edit-property" element={<EditProperty />} />
        <Route path="/mode" element={<GetForm />} />
        <Route path="/type" element={<AdminSetForm />} />
        <Route path="/plan" element={<Plan />} />
        <Route path="/detail" element={<Detail />} />





      </Routes>
    </Router>
  );
};

export default App;






