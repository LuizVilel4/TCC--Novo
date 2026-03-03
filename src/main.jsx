import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import Login from "./Pages/Login";
import Register from "./Pages/Register";
import AdminLogin from "./Pages/AdminLogin";
import AdminRegister from "./Pages/AdminRegister";

import AdminLayout from "./layouts/AdminLayout";
import AdminDashboard from "./Pages/AdminDashboard";
import AdminAgenda from "./Pages/AdminAgenda";
import AdminClientes from "./Pages/AdminClientes";
import AdminPets from "./Pages/AdminPets";

import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/register" element={<Register />} />

      <Route path="/admin/login" element={<AdminLogin />} />
      <Route path="/admin/register" element={<AdminRegister />} />

      <Route path="/admin" element={<AdminLayout />}>
        <Route index element={<Navigate to="dashboard" replace />} />
        <Route path="dashboard" element={<AdminDashboard />} />
        <Route path="agenda" element={<AdminAgenda />} />
        <Route path="clientes" element={<AdminClientes />} />
        <Route path="pets" element={<AdminPets />} />
      </Route>
    </Routes>
  </BrowserRouter>,
);
