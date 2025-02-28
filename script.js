document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Mencegah form dari reload

    // Ambil nilai input username dan password
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    // Contoh username dan password yang benar
    var validUsername = "admin";
    var validPassword = "1234";

    // Cek apakah username dan password sesuai
    if (username === validUsername && password === validPassword) {
        localStorage.setItem("isLoggedIn", "true"); // Simpan status login
        window.location.href = "https://fdiyurvyn.github.io/3DSolarSytem/"; // Redirect ke halaman lain
    } else {
        document.getElementById("error-message").style.display = "block"; // Tampilkan pesan error
    }
});
