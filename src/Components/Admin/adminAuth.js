const AUTH_KEY = "puis_admin_auth";

export function isAdminAuthed() {
  return localStorage.getItem(AUTH_KEY) === "1";
}

export function loginAdmin(username, password) {
  // frontend-only demo login
  if (username === "admin" && password === "admin123") {
    localStorage.setItem(AUTH_KEY, "1");
    return true;
  }
  return false;
}

export function logoutAdmin() {
  localStorage.removeItem(AUTH_KEY);
}
