import React from "react";
import { Navigate } from "react-router-dom";
import { isAdminAuthed } from "./adminAuth";

export default function RequireAdmin({ children }) {
  if (!isAdminAuthed()) return <Navigate to="/admin/login" replace />;
  return children;
}
