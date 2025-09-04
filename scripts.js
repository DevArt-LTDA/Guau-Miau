
/////////////////Bloque de inicio de sesion ///////////////
document.getElementById("loginForm").addEventListener("submit", function(event) {
  event.preventDefault(); // Evita que la página se recargue

  const username = document.getElementById('username').value.trim();
  const password = document.getElementById('password').value.trim();

  // Validar campos vacíos
  if (username === "" || password === "") {
    alert("Por favor, completa todos los campos.");
    return;
  }

  // Validar contraseña con la expresión regular
  if (!validarContrasena(password)) {
    alert("La contraseña debe tener:\n- Al menos 8 caracteres\n- 1 mayúscula\n- 1 minúscula\n- 1 número\n- 1 carácter especial");
    return;
  }

  alert("Inicio de sesión exitoso ✅");
});

// Validador cuplimiento de los criterios contraseña
function validarContrasena(password) {
  const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*(),.?":{}|<>]).{8,}$/;
  return regex.test(password);
}
/////////////fin bloque de inicio de session ////////////////

/////////////////Bloque de inicio de sesion ///////////////