/* Perro quiz */
function mostrarResultado() {
  var total = 4;
  var puntos = 0;
  var form = document.forms["quizForm"];
  var respuestas = ["c", "c", "b", "b"];
  var mensaje = "";

  // -> Verificamos todas las respuestas seleccionadas
  for (let i = 1; i < total; i++) {
    if (form["p" + i].value === null || form["p" + i].value === "") {
      alert("Por favor, conteste todas las preguntas");
      return false;
    } else {
      if (form["p" + i].value == respuestas[i - 1]) {
        puntos++;
      }
    }
  }

  // -> Configuramos el mensaje a mostrar segun cantidad de respuestas correctas
  switch (puntos) {
    case 0:
      mensaje = "Mala suerte. Intentalo nuevamente...";
      break;
    case 1:
      mensaje = "Tu resultado podría ser mejor...";
      break;
    case 2:
      mensaje = "Esta bien aunque puede mejorar...";
      break;
    case 3:
      mensaje = "Muy bien!";
      break;
    case 4:
      mensaje = "Excelente trabajo!";
      break;
  }

  // -> Mostrar resultado
  var resultado = document.getElementById("resultado");
  resultado.innerHTML = `<h3> Respondiste ${puntos} preguntas correctamente.<h3> </br > ${mensaje}`;
  document.getElementById("resultado").classList.add("show");

  return false;
}

// -----------------------------------------
// -> Prevenir recarga de página al apretar submit form (Dev)
/* var form = document.getElementById("quiz");
function handleForm(event) {
  event.preventDefault();
}
form.addEventListener("submit", handleForm); */
// -----------------------------------------
