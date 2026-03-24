let jugadores = [];
let posiciones = [0, 0];
let aciertos = [0, 0]; // contador de respuestas correctas por jugador

// 9 preguntas relacionadas con los pasos de investigación
let preguntas = [
  {
    texto: "¿Que es un objetivo general?",
    opciones: [
      "Una actividad secundaria",
      "La meta principal del proyecto",
      "Una conclusión"
    ],
    correcta: 1
  },
  {
    texto: "¿Para que sirve el objetivo general?",
    opciones: [
      "Para decorar el trabajo",
      "Para guiar la investigación",
      "Para hacer gráficos"
    ],
    correcta: 1
  },
  {
    texto: "Caracteristica del objetivo general",
    opciones: [
      "Debe ser claro y amplio",
      "Debe ser confuso",
      "Debe ser muy largo"
    ],
    correcta: 0
  },
  {
    texto: "¿Cuantos objetivos generales debe haber?",
    opciones: [
      "Uno",
      "Dos",
      "Muchos"
    ],
    correcta: 0
  },
  {
    texto: "Verbos usados en el objetivo general",
    opciones: [
      "En infinitivo",
      "En pasado",
      "En diminutivo"
    ],
    correcta: 0
  },
  {
    texto: "El objetivo general responde a:",
    opciones: [
      "¿Qué se quiere lograr?",
      "¿Cuánto cuesta?",
      "¿Quién lo hará?"
    ],
    correcta: 0
  },
  {
    texto: "¿Que debe evitar el objetivo general?",
    opciones: [
      "Ser claro",
      "Ser muy específico",
      "Tener verbo"
    ],
    correcta: 1
  },
  {
    texto: "El objetivo general debe relacionarse con:",
    opciones: [
      "El problema de investigación",
      "Los colores del trabajo",
      "La portada"
    ],
    correcta: 0
  },
  {
    texto: "¿Donde se ubica el objetivo general?",
    opciones: [
      "En referencias",
      "En la sección de objetivos",
      "En anexos"
    ],
    correcta: 1
  },
  {
    texto: "Ejemplo correcto de objetivo general",
    opciones: [
      "Analizar el impacto del internet en la educación",
      "Hacer entrevistas",
      "Leer libros"
    ],
    correcta: 0
  },
  {
    texto: "El objetivo general debe ser:",
    opciones: [
      "Ambiguo",
      "Claro y preciso",
      "Innecesario"
    ],
    correcta: 1
  },
  {
    texto: "¿Que tipo de idea expresa el objetivo general?",
    opciones: [
      "Idea principal",
      "Idea secundaria",
      "Idea irrelevante"
    ],
    correcta: 0
  },
  {
    texto: "¿El objetivo general incluye detalles?",
    opciones: [
      "Sí, muchos detalles",
      "No, es general",
      "Solo números"
    ],
    correcta: 1
  },
  {
    texto: "Relación con objetivos específicos",
    opciones: [
      "No tienen relación",
      "Los específicos dependen del general",
      "Son iguales"
    ],
    correcta: 1
  },
  {
    texto: "¿Que inicia un objetivo general?",
    opciones: [
      "Un sustantivo",
      "Un verbo en infinitivo",
      "Un adjetivo"
    ],
    correcta: 1
  },
  {
    texto: "¿Puede haber más de un objetivo general?",
    opciones: [
      "Sí, muchos",
      "No, solo uno",
      "Depende del color del trabajo"
    ],
    correcta: 1
  },
  {
    texto: "¿Que define el objetivo general?",
    opciones: [
      "El propósito del estudio",
      "El diseño gráfico",
      "El índice"
    ],
    correcta: 0
  },
  {
    texto: "¿Que orienta el objetivo general?",
    opciones: [
      "El desarrollo de la investigación",
      "La portada",
      "Las imágenes"
    ],
    correcta: 0
  },
  {
  texto: "¿Cuál es el propósito principal de un objetivo general?",
    opciones: [
      "Hacer el índice del trabajo",
      "Guiar todo el desarrollo de la investigación",
      "Redactar el resumen"
    ],
    correcta: 1
  },
  {
    texto: "¿Qué característica debe tener un objetivo general?",
    opciones: [
      "Ser muy extenso y confuso",
      "Ser claro y relevante",
      "Ser solo una lista de actividades"
    ],
    correcta: 1
  },
  {
    texto: "Un objetivo general efectivo debe estar relacionado con:",
    opciones: [
      "El número de páginas",
      "El problema que se estudia",
      "El diseño gráfico del documento"
    ],
    correcta: 1
  },
  {
    texto: "El verbo en un objetivo general debe estar en:",
    opciones: [
      "Pasado",
      "Infinitivo",
      "Participio"
    ],
    correcta: 1
  },
  {
    texto: "¿Qué evita un buen objetivo general?",
    opciones: [
      "Hacer el trabajo más vistoso",
      "Perder tiempo en tareas irrelevantes",
      "Aumentar el número de páginas"
    ],
    correcta: 1
  },
  {
    texto: "¿Cuál es la diferencia entre objetivo general y específico?",
    opciones: [
      "No hay diferencia",
      "El general es amplio; el específico es detallado y medible",
      "El específico se escribe primero"
    ],
    correcta: 1
  },
  {
    texto: "Un objetivo general debe ser alcanzable y:",
    opciones: [
      "Difícil de entender",
      "Realista y coherente con el proyecto",
      "Imposible de lograr"
    ],
    correcta: 1
  },
  {
    texto: "¿Por qué es importante redactar un objetivo general antes de iniciar la investigación?",
    opciones: [
      "Porque hace bonito el documento",
      "Porque define la dirección y propósito del estudio",
      "Porque permite agregar más gráficos"
    ],
    correcta: 1
  },
  {
    texto: "¿Qué debe evitar un objetivo general mal redactado?",
    opciones: [
      "Usar verbos en infinitivo",
      "Ser vago o ambiguo",
      "Tener relación con el problema"
    ],
    correcta: 1
  },
  {
    texto: "Un ejemplo de verbo adecuado para un objetivo general es:",
    opciones: [
      "Comer",
      "Dormir",
      "Evaluar"
    ],
    correcta: 2
  },
  {
    texto: "¿Qué pregunta responde un objetivo general?",
    opciones: [
      "¿Quién hará la investigación?",
      "¿Qué se busca lograr con la investigación?",
      "¿Cuánto cuesta el proyecto?"
    ],
    correcta: 1
  },
  {
    texto: "El objetivo general debe redactarse de manera que sea:",
    opciones: [
      "Confuso y largo",
      "Comprensible y relevante para todo el proyecto",
      "Solo una frase decorativa"
    ],
    correcta: 1
  },
  {
    texto: "¿Qué ayuda a determinar un buen objetivo general?",
    opciones: [
      "Hacer la tabla de contenidos primero",
      "Elegir colores para la portada",
      "Revisar el problema de investigación"
    ],
    correcta: 2
  },
  {
    texto: "¿Cuál es la relación de los objetivos generales con las conclusiones?",
    opciones: [
      "No tienen relación",
      "Permiten medir si se logró el propósito del estudio",
      "Sirven solo para llenar la sección final"
    ],
    correcta: 1
  },
  {
    texto: "¿Cómo se reconoce un objetivo general bien formulado?",
    opciones: [
      "Incluye muchas referencias",
      "Es amplio, claro, relevante y coherente",
      "Es largo y complejo"
    ],
    correcta: 1
  },
  {
    texto: "Un objetivo general debe estar vinculado a:",
    opciones: [
      "Los hallazgos que se desean obtener",
      "La tipografía usada en el trabajo",
      "El tamaño de la portada"
    ],
    correcta: 0
  },
  {
    texto: "¿Qué evita que el proyecto pierda foco?",
    opciones: [
      "Agregar muchas imágenes",
      "Tener un objetivo general definido",
      "Escribir mucho texto irrelevante"
    ],
    correcta: 1
  },
  {
    texto: "El objetivo general es la base para:",
    opciones: [
      "Hacer gráficos de colores",
      "Elegir la portada",
      "Redactar los objetivos específicos y la metodología"
    ],
    correcta: 2
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
  let p = preguntas[preguntaActual] ;
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
    aciertos[turno]++;

    let carril = document.getElementById("carril1");
    let ancho = carril.offsetWidth;

    let pasosTotales = 9;
    let anchoDino = 80;

    let meta = ancho - anchoDino;
    let avance = meta / pasosTotales;

    posiciones[turno] += avance;
    posiciones[turno] = Math.min(posiciones[turno], meta);

    document.getElementById("dino" + (turno + 1)).style.left = posiciones[turno] + "px";

    if (aciertos[turno] >= pasosTotales) {
      mostrarVictoria(jugadores[turno]);
      return;
    }

    avanzarTurno(); // ✅ si acierta, avanza normal
  } else {
    document.getElementById("modalError").style.display = "flex";
    // ❌ NO avanzar aquí
  }
}
function cerrarModal() {
  document.getElementById("modalError").style.display = "none";

  avanzarTurno(); // 🔥 aquí ocurre el cambio real
}
function avanzarTurno() {
  preguntaActual++;
  turno = (turno + 1) % 2;
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
