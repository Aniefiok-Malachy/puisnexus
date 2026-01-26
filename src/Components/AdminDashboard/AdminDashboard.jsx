import React from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import { logoutAdmin } from "../Admin/adminAuth";
import "./AdminDashboard.css";

export default function AdminDashboard() {
  const nav = useNavigate();
  const { pathname } = useLocation();

  const active =
    pathname.includes("/create") ? "create" : pathname.includes("/edit") ? "edit" : "home";

  return (
    <div className="ad">
      <aside className="ad-side">
        <div className="ad-brand">
          <div className="ad-logo" />
          <span>Puis Nexus</span>
        </div>

        <button
          className={`ad-sidebtn ${active === "home" ? "active" : ""}`}
          type="button"
          onClick={() => nav("/admin/dashboard")}
        >
          Home
        </button>

        <button
          className={`ad-sidebtn ${active === "create" ? "active" : ""}`}
          type="button"
          onClick={() => nav("/admin/dashboard/create")}
        >
          + Create
        </button>

        <button
          className={`ad-sidebtn ${active === "edit" ? "active" : ""}`}
          type="button"
          onClick={() => nav("/admin/dashboard/edit")}
        >
          ✎ Edit
        </button>

        <button
          className="ad-sidebtn ghost"
          type="button"
          onClick={() => {
            logoutAdmin();
            nav("/admin/login");
          }}
        >
          Logout
        </button>
      </aside>

      <main className="ad-main">
        <Outlet />
      </main>
    </div>
  );
}
