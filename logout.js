function logout() {
  localStorage.removeItem("currentUser");
  location.href = "index.html";
}
