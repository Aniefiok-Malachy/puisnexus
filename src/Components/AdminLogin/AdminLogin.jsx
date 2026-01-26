import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { loginAdmin } from "../Admin/adminAuth";
import "./AdminLogin.css";

export default function AdminLogin() {
  const nav = useNavigate();
  const [form, setForm] = useState({ username: "", password: "" });
  const [err, setErr] = useState("");

  const onChange = (e) =>
    setForm((p) => ({ ...p, [e.target.name]: e.target.value }));

  const onSubmit = (e) => {
    e.preventDefault();
    setErr("");
    const ok = loginAdmin(form.username, form.password);
    if (!ok) return setErr("Invalid login. Use admin / admin123");
    nav("/admin/dashboard/create");
  };

  return (
    <section className="al">
      <div className="al-card">
        <h2 className="al-title">Admin Login</h2>

        <form onSubmit={onSubmit} className="al-form">
          <label className="al-label">Username</label>
          <input
            className="al-input"
            name="username"
            value={form.username}
            onChange={onChange}
          />

          <label className="al-label">Password</label>
          <input
            className="al-input"
            type="password"
            name="password"
            value={form.password}
            onChange={onChange}
          />

          {err ? <p className="al-error">{err}</p> : null}

          <button className="al-btn" type="submit">
            Sign in →
          </button>
        </form>
      </div>
    </section>
  );
}
