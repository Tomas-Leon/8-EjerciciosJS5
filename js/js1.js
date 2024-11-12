//EJERCICIO 1
let numero;

document.getElementById("iniciarJuego").addEventListener("click", function () {
  // Genera un número aleatorio entre 1 y 100
  numero = Math.floor(Math.random() * 100) + 1;
  console.log(numero);
  document.getElementById("juego").style.display = "block";
  alert("El juego ha comenzado. ¡Adivina un número aleatorio entre 1 y 100!");
});

document.getElementById("enviar").addEventListener("click", function () {
  const numeroIngresado = parseInt(
    document.getElementById("numeroIngresado").value
  );

  if (isNaN(numeroIngresado)) {
    alert("Por favor, ingresa un número válido.");
    return;
  }

  if (numeroIngresado === numero) {
    alert("¡Felicidades! Adivinaste el número correcto: " + numero);
  } else if (numeroIngresado < numero) {
    alert(
      "El número mágico es mayor que " +
        numeroIngresado +
        ". Inténtalo de nuevo."
    );
  } else {
    alert(
      "El número mágico es menor que " +
        numeroIngresado +
        ". Inténtalo de nuevo."
    );
  }
});

//--------------------------------------------------------------------------------
