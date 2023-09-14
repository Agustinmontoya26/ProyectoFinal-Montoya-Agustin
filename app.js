document.addEventListener("DOMContentLoaded", function() {
    const loginForm = document.getElementById("login-form");
    const errorMessageDiv = document.getElementById("error-message");

    loginForm.addEventListener("submit", function(event) {
        event.preventDefault();

        const username = document.getElementById("username").value;
        const password = document.getElementById("password").value;

        // Realizar una solicitud AJAX para autenticar al usuario
        fetch('users.json')
            .then(response => response.json())
            .then(data => {
                const users = data.users;
                const user = users.find(u => u.username === username && u.password === password);

                if (user) {
                    errorMessageDiv.textContent = "Inicio de sesión exitoso!";
                    errorMessageDiv.className = "success-message";
                } else {
                    errorMessageDiv.textContent = "Nombre de usuario o contraseña incorrectos.";
                    errorMessageDiv.className = "error-message";
                }
            })
            .catch(error => {
                console.error("Error:", error);
                errorMessageDiv.textContent = "Error al procesar la solicitud.";
                errorMessageDiv.className = "error-message";
            });
    });
});
