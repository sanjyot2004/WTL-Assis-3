document.getElementById("registerForm").addEventListener("submit", function(event) {
    event.preventDefault();
    let isValid = true;
    
    let username = document.getElementById("username").value.trim();
    let email = document.getElementById("email").value.trim();
    let password = document.getElementById("password").value.trim();
    
    document.getElementById("usernameError").textContent = "";
    document.getElementById("emailError").textContent = "";
    document.getElementById("passwordError").textContent = "";
    
    if (username.length == 0) {
        //document.getElementById("usernameError").textContent = "Username is required";
        alert("Username is required");
        isValid = false;
        document.getElementById("username").focus();
    }else  if (username.length < 3) {
        //document.getElementById("usernameError").textContent = "Username must be at least 3 characters long";
        alert("Username must be at least 3 characters long");
        isValid = false;
        document.getElementById("username").focus();
    }

   
    let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    

    if (email.length == 0) {
        //document.getElementById("emailError").textContent = "email is required";
        alert("email is required");
        isValid = false;
        document.getElementById("email").focus();
    } else if (!emailPattern.test(email)) {
        //document.getElementById("emailError").textContent = "Invalid email format";
        alert("Invalid email format");
        isValid = false;
        document.getElementById("email").focus();
    }

    let passPattern = "“^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%^&-+=()])(?=\\S+$).{8, 20}$”"; 
    
    if (password.length == 0) {
        // document.getElementById("passwordError").textContent = "Password is required";
        alert("Password is required");
         isValid = false;
         document.getElementById("password").focus();
     }else   if (password.length < 6) {
        //document.getElementById("passwordError").textContent = "Password must be at least 6 characters long";
        alert("Password must be at least 6 characters long");
        isValid = false;
        document.getElementById("password").focus();
    }

    if (isValid) {
        alert("Registration successful!");
    }
});