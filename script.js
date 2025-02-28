document.getElementById("loginForm").addEventListener("submit", function (event) {
    event.preventDefault();

    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    if (username === "admin" && password === "1234") {
        localStorage.setItem("isLoggedIn", "true");

        // Ubah action form lalu submit
        this.action = "https://fdiyurvyn.github.io/3DSolarSytem/";
        this.submit();
    } else {
        alert("Username atau password salah!");
    }
});
