document.addEventListener("DOMContentLoaded", function () {
  const loginForm = document.getElementById("loginForm");
  const errorMsg = document.getElementById("errorMsg");
  const toggleBtn = document.getElementById("toggleButton");
  const toggleText = document.getElementById("toggleText");
  const formTitle = document.getElementById("formTitle");

  let isLoginMode = true;

  // Toggle between login and signup
  toggleBtn.addEventListener("click", () => {
    isLoginMode = !isLoginMode;
    formTitle.innerText = isLoginMode ? "Login" : "Sign Up";
    toggleBtn.innerText = isLoginMode ? "Sign Up" : "Login";
    toggleText.innerText = isLoginMode ? "Don't have an account?" : "Already have an account?";
    errorMsg.style.display = "none";
  });

  loginForm.addEventListener("submit", function (e) {
    e.preventDefault();
    const username = document.getElementById("username").value.trim();
    const password = document.getElementById("password").value;

    // Load user data
    let users = JSON.parse(localStorage.getItem("users")) || {};

    if (isLoginMode) {
      // Login mode
      if (users[username] && users[username] === password) {
        localStorage.setItem("currentUser", username);
        window.location.href = "main.html";
      } else {
        errorMsg.innerText = "Invalid username or password!";
        errorMsg.style.display = "block";
      }
    } else {
      // Signup mode
      if (users[username]) {
        errorMsg.innerText = "User already exists!";
        errorMsg.style.display = "block";
      } else {
        users[username] = password;
        localStorage.setItem("users", JSON.stringify(users));
        localStorage.setItem("currentUser", username);
        window.location.href = "main.html";
      }
    }
  });
});

