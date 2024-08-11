import React from "react";
import { Link, Route, Routes } from "react-router-dom";
import AdminHome from "./AdminHome";
import AdminProducts from "./AdminProducts";
import AdminOrders from "./AdminOrders";
import AdminUsers from "./AdminUsers";
import "./AdminDashboard.css";
// import "./Sidebar.css";

const AdminDashboard = () => {
  return (
    <div className="admin-dashboard">
      <div className="sidebar">
        <h2>Admin Dashboard</h2>
        <nav>
          <ul>
            <li>
              <Link to="/AdminDashboard/dashboard">Dashboard</Link>
            </li>
            <li>
              <Link to="/AdminDashboard/products">Products</Link>
            </li>
            <li>
              <Link to="/AdminDashboard/orders">Orders</Link>
            </li>
            <li>
              <Link to="/AdminDashboard/users">Users</Link>
            </li>
          </ul>
        </nav>
      </div>
      <div className="admin-main-content">
        <Routes>
          <Route path="/dashboard" element={<AdminHome />} />
          <Route path="/products" element={<AdminProducts />} />
          <Route path="/orders" element={<AdminOrders />} />
          <Route path="/users" element={<AdminUsers />} />
        </Routes>
      </div>
    </div>
  );
};

export default AdminDashboard;
