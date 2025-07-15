document.addEventListener("DOMContentLoaded", () => {
  const signupForm = document.getElementById("signupForm");
  const loginForm = document.getElementById("loginForm");

  if (signupForm) {
    signupForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const username = document.getElementById("username").value;
      const email = document.getElementById("email").value;
      const password = document.getElementById("password").value;
      const confirm = document.getElementById("confirmPassword").value;

      if (password !== confirm) {
        alert("Passwords do not match!");
        return;
      }

      localStorage.setItem("user", JSON.stringify({ username, email, password }));
      alert("Signup successful! Please log in.");
      window.location.href = "login.html";
    });
  }

  if (loginForm) {
    loginForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const email = document.getElementById("loginEmail").value;
      const password = document.getElementById("loginPassword").value;
      const user = JSON.parse(localStorage.getItem("user"));

      if (!user || user.email !== email || user.password !== password) {
        alert("Invalid login credentials.");
        return;
      }

      localStorage.setItem("loggedInUser", user.username);
      window.location.href = "index.html";
    });
  }
});
