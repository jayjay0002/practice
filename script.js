function togglePassword() {
    var passwordField = document.getElementById("password");
    var toggleButton = document.getElementById("toggleButton");
  
    if (passwordField.type === "password") {
      passwordField.type = "text";
      toggleButton.innerHTML = '<i class="fas fa-eye-slash"></i>';
    } else {
      passwordField.type = "password";
      toggleButton.innerHTML = '<i class="fas fa-eye"></i>';
    }
  }
  
  document.getElementById("loginForm").addEventListener("submit", function (event) {
    event.preventDefault();
  
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
  
    var authenticated = authenticate(username, password);
  
    if (authenticated) {
      window.location.href = this.getAttribute("action");
      document.getElementById("username").value = "";
      document.getElementById("password").value = "";
    } else {
      var errorMessage = document.getElementById("errorMessage");
      errorMessage.style.display = "block";
      errorMessage.innerText = "Invalid username or password";
    }
  });
  
  function authenticate(username, password) {
    const validUsername = "billy";
    const validPassword = "password";
  
    if (username === validUsername && password === validPassword) {
      return true;
    } else {
      return false;
    }
  }
  