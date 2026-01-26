import { Navigate } from "react-router-dom";
import { isAdminAuthed } from "../Admin/adminAuth";

export default function ProtectedRoute({ children }) {
  if (!isAdminAuthed()) {
    return <Navigate to="/admin/login" replace />;
  }

  return children;
}
