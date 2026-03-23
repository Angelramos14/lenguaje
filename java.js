let jugadores = [];
let posiciones = [0, 0];
let aciertos = [0, 0]; // contador de respuestas correctas por jugador

// 9 preguntas relacionadas con los pasos de investigación
let preguntas = [
  {
    texto: "Definicion de: Tema",
    opciones: [
      "Idea que se investigara",
      "Redactar las conclusiones",
      "Aplicar encuestas"
    ],
    correcta: 0
  },
  {
    texto: "Definicion de: Antecedentes",
    opciones: [
      "Investigaciones previas",
      "Escribir los resultados",
      "Hacer entrevistas"
    ],
    correcta: 0
  },
  {
    texto: "Definicion de: Planteamiento del problema",
    opciones: [
      "Descripcion del problema",
      "Diseñar gráficos estadísticos",
      "Revisar bibliografía"
    ],
    correcta: 0
  },
  {
    texto: "Definicion de: Justificacion",
    opciones: [
      "Relevancia del tema",
      "El cronograma de actividades",
      "El presupuesto"
    ],
    correcta: 0
  },
  {
    texto: "Definicion de: Objetivo general",
    opciones: [
      "El enfoque, técnicas y procedimientos",
      "Meta principal que se quiere lograr",
      "El marco teórico"
    ],
    correcta: 1
  },
  {
    texto: "Definicion de: Objetivo Especifico",
    opciones: [
      "Metas pequeñas y medibles",
      "Redactar la introducción",
      "Definir objetivos generales"
    ],
    correcta: 0
  },
  {
    texto: "Definicion de: Marco Teorico",
    opciones: [
      "Coneptos, teorias y autores",
      "Plantear la hipótesis",
      "Buscar bibliografía"
    ],
    correcta: 0
  },
  {
    texto: "Definicion de: Metodologia",
    opciones: [
      "Enfoque, tecnicas e instrumentos",
      "Redactar el marco teórico",
      "Formular objetivos específicos"
    ],
    correcta: 0
  },
  {
    texto: "Definiciones de: Conclusiones y Normas APA",
    opciones: [
      "Resultados finales, aprendizajes, Citas y referencias",
      "Definir la metodología",
      "Aplicar encuestas"
    ],
    correcta: 0
  },
  {
    texto: "Definicion de: Tema",
    opciones: [
      "Idea que se investigara",
      "Redactar las conclusiones",
      "Aplicar encuestas"
    ],
    correcta: 0
  },
  {
    texto: "Definicion de: Antecedentes",
    opciones: [
      "Investigaciones previas",
      "Escribir los resultados",
      "Hacer entrevistas"
    ],
    correcta: 0
  },
  {
    texto: "Definicion de: Planteamiento del problema",
    opciones: [
      "Descripcion del problema",
      "Diseñar gráficos estadísticos",
      "Revisar bibliografía"
    ],
    correcta: 0
  },
  {
    texto: "Definicion de: Justificacion",
    opciones: [
      "Relevancia del tema",
      "El cronograma de actividades",
      "El presupuesto"
    ],
    correcta: 0
  },
  {
    texto: "Definicion de: Objetivo general",
    opciones: [
      "El enfoque, técnicas y procedimientos",
      "Meta principal que se quiere lograr",
      "El marco teórico"
    ],
    correcta: 1
  },
  {
    texto: "Definicion de: Objetivo Especifico",
    opciones: [
      "Metas pequeñas y medibles",
      "Redactar la introducción",
      "Definir objetivos generales"
    ],
    correcta: 0
  },
  {
    texto: "Definicion de: Marco Teorico",
    opciones: [
      "Coneptos, teorias y autores",
      "Plantear la hipótesis",
      "Buscar bibliografía"
    ],
    correcta: 0
  },
  {
    texto: "Definicion de: Metodologia",
    opciones: [
      "Enfoque, tecnicas e instrumentos",
      "Redactar el marco teórico",
      "Formular objetivos específicos"
    ],
    correcta: 0
  },
  {
    texto: "Definiciones de: Conclusiones y Normas APA",
    opciones: [
      "Resultados finales, aprendizajes, Citas y referencias",
      "Definir la metodología",
      "Aplicar encuestas"
    ],
    correcta: 0
  }
];

let preguntaActual = 0;
let turno = 0; // 0 = jugador1, 1 = jugador2

function iniciarJuego() {
  jugadores[0] = document.getElementById("jugador1").value || "Jugador 1";
  jugadores[1] = document.getElementById("jugador2").value || "Jugador 2";

  // Mostrar nombres encima de los dinosaurios
  document.getElementById("nombre1").innerText = jugadores[0];
  document.getElementById("nombre2").innerText = jugadores[1];

  aciertos = [0, 0];
  posiciones = [0, 0];
  preguntaActual = 0;
  turno = 0;

  mostrarPregunta();
}

function mostrarPregunta() {
  if (preguntaActual >= preguntas.length) {
    // Si llegamos aquí y nadie ganó, significa que se acabaron las preguntas
    alert("¡Se acabaron las preguntas y no hubo ganador!");
    return;
  }
  let p = preguntas[preguntaActual];
  document.getElementById("pregunta").innerText = jugadores[turno] + ": " + p.texto;
  let opcionesDiv = document.getElementById("opciones");
  opcionesDiv.innerHTML = "";
  p.opciones.forEach((op, i) => {
    let btn = document.createElement("button");
    btn.innerText = op;
    btn.onclick = () => responder(i);
    opcionesDiv.appendChild(btn);
  });
}
function responder(opcionElegida) {
  let p = preguntas[preguntaActual];
if (opcionElegida === p.correcta) {
  aciertos[turno]++; // suma acierto

  let carril = document.getElementById("carril1");
  let ancho = carril.offsetWidth;

  let pasosTotales = 9; // número total de preguntas
  let anchoDino = 80;   // ancho del dino en px, debe coincidir con CSS

  let meta = ancho - anchoDino;
  let avance = meta / pasosTotales;

  posiciones[turno] += avance;

  // evitar que se pase de la meta
  posiciones[turno] = Math.min(posiciones[turno], meta);

  document.getElementById("dino" + (turno + 1)).style.left = posiciones[turno] + "px";

  // Verifica si el jugador ha ganado después de mover el dino
  if (aciertos[turno] >= pasosTotales) {
    mostrarVictoria(jugadores[turno]);
    return;
  }
}else {
    mostrarError(); 
    return; // detenemos aquí hasta que cierre el modal
  }

  // Solo avanzamos a la siguiente pregunta si nadie ha ganado
  turno = (turno + 1) % 2;
  if (turno === 0) preguntaActual++;
  mostrarPregunta();
}


function mostrarError() {
  document.getElementById("modalError").style.display = "flex";
}

function cerrarModal() {
  document.getElementById("modalError").style.display = "none";
  turno = (turno + 1) % 2;
  if (turno === 0) preguntaActual++;
  mostrarPregunta();
}

function mostrarVictoria(nombre) {
  document.querySelector("#modalVictoria h2").innerText = "¡" + nombre + " ha ganado!";
  document.getElementById("modalVictoria").style.display = "flex";
}

function cerrarVictoria() {
  document.getElementById("modalVictoria").style.display = "none";
  reiniciar();
}

function reiniciar() {
  posiciones = [0, 0];
  aciertos = [0, 0];
  preguntaActual = 0; // ✅ vuelve a la primera pregunta
  turno = 0;
  document.getElementById("dino1").style.left = "0px";
  document.getElementById("dino2").style.left = "0px";
  document.getElementById("pregunta").innerText = "";
  document.getElementById("opciones").innerHTML = "";
}



function mostrarVictoria(nombre) {
  document.querySelector("#modalVictoria h2").innerText = "¡" + nombre + " ha ganado!";
  document.getElementById("modalVictoria").style.display = "flex";
}

function cerrarVictoria() {
  document.getElementById("modalVictoria").style.display = "none";
  reiniciar();
}
