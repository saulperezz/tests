window.TEMAS_ADA = window.TEMAS_ADA || [];
window.TEMAS_ADA.push({
  id: "introduccion",
  nombre: "Introducción",
  tema: 1,
  resumenUrl: "resumen_T1_introduccion.html",
  preguntas: [

    // ── CONCEPTO 1: Algoritmia ──
    {
      concept: "Algoritmia",
      conceptIndex: 1,
      question: "¿Qué estudia la disciplina de la algoritmia?",
      options: [
        "Los algoritmos de forma integral: análisis, diseño, implementación y experimentación",
        "La implementación y prueba de software en lenguajes de programación concretos",
        "Exclusivamente el diseño de algoritmos eficientes para problemas de ordenación y búsqueda",
      ],
      correct: 0,
    },
    {
      concept: "Algoritmia",
      conceptIndex: 1,
      question: "¿Por qué se dice que la algoritmia es un proceso 'circular y retroalimentado'?",
      options: [
        "Porque el diseño de algoritmos sigue siempre el mismo ciclo fijo de cuatro pasos sin variaciones",
        "Porque cada etapa (análisis, diseño, implementación, experimentación) puede revelar problemas que obligan a revisar las etapas anteriores",
        "Porque los algoritmos siempre terminan volviendo al estado inicial tras su ejecución",
      ],
      correct: 1,
    },
    {
      concept: "Algoritmia",
      conceptIndex: 1,
      question: "¿Cuál de las siguientes afirmaciones sobre las etapas de la algoritmia es correcta?",
      options: [
        "Ninguna etapa es completamente independiente del resto; todas se retroalimentan entre sí",
        "La experimentación es la etapa más importante y las demás solo la apoyan",
        "El análisis teórico puede prescindir de la experimentación cuando la complejidad es conocida",
      ],
      correct: 0,
    },

    // ── CONCEPTO 2: Algoritmo ──
    {
      concept: "Algoritmo",
      conceptIndex: 2,
      question: "¿Cuáles son las tres propiedades esenciales que debe cumplir cualquier algoritmo?",
      options: [
        "Recursividad, determinismo y completitud",
        "Finitud, no ambigüedad y corrección",
        "Eficiencia, legibilidad y modularidad",
      ],
      correct: 1,
    },
    {
      concept: "Algoritmo",
      conceptIndex: 2,
      question: "¿Qué significa que un algoritmo sea 'no ambiguo'?",
      options: [
        "Que el número de pasos que ejecuta nunca varía en función de los datos de entrada",
        "Que cada instrucción está definida de forma precisa y su ejecución no depende de la interpretación del lector",
        "Que produce el mismo resultado para cualquier entrada, independientemente del orden de procesamiento",
      ],
      correct: 1,
    },
    {
      concept: "Algoritmo",
      conceptIndex: 2,
      question: "¿De dónde proviene el término 'algoritmo' y a qué hace referencia?",
      options: [
        "Del latín 'algorismus', término medieval para designar cualquier procedimiento de cálculo aritmético",
        "Del nombre latinizado del matemático persa Al-Juarismi (siglo IX), cuyos tratados introdujeron el sistema de numeración posicional en Europa",
        "Del griego 'arithmós' (número), en referencia a los primeros cálculos matemáticos de la antigüedad",
      ],
      correct: 1,
    },

    // ── CONCEPTO 3: Etapas de Resolución ──
    {
      concept: "Etapas de Resolución de un Problema",
      conceptIndex: 3,
      question: "¿En qué etapa del proceso de resolución se traduce el problema informal a una descripción matemática formal con entradas, salidas y restricciones?",
      options: [
        "Análisis y Verificación",
        "Modelización / Especificación",
        "Codificación (implementación)",
      ],
      correct: 1,
    },
    {
      concept: "Etapas de Resolución de un Problema",
      conceptIndex: 3,
      question: "¿En qué etapas se centra principalmente la asignatura ADA?",
      options: [
        "Modelización y ejecución",
        "Diseño y análisis",
        "Codificación y experimentación",
      ],
      correct: 1,
    },
    {
      concept: "Etapas de Resolución de un Problema",
      conceptIndex: 3,
      question: "¿Qué ocurre si la etapa de modelización/especificación contiene errores o ambigüedades?",
      options: [
        "Invalida todo el trabajo posterior, ya que el algoritmo puede ser correcto respecto a una especificación incorrecta",
        "Los errores se detectan automáticamente en la etapa de verificación y se corrigen sin coste adicional",
        "Solo afecta a la etapa de codificación, que puede compensarlo con pruebas exhaustivas",
      ],
      correct: 0,
    },

    // ── CONCEPTO 4: Análisis de Algoritmos ──
    {
      concept: "Análisis de Algoritmos",
      conceptIndex: 4,
      question: "¿Cuál es la finalidad principal del análisis de algoritmos?",
      options: [
        "Traducir el diseño del algoritmo a un lenguaje de programación específico de forma eficiente",
        "Demostrar formalmente que un algoritmo produce siempre resultados correctos para cualquier entrada",
        "Medir de forma cuantitativa los recursos (tiempo y espacio) que necesita un algoritmo para su ejecución",
      ],
      correct: 2,
    },
    {
      concept: "Análisis de Algoritmos",
      conceptIndex: 4,
      question: "¿Qué herramientas matemáticas se usan habitualmente en el análisis de algoritmos?",
      options: [
        "Estadística descriptiva, probabilidad bayesiana y teoría de la información",
        "Potencias y logaritmos, series, álgebra de funciones y cálculo infinitesimal (límites, crecimiento asintótico)",
        "Álgebra lineal, geometría diferencial y teoría de grafos",
      ],
      correct: 1,
    },
    {
      concept: "Análisis de Algoritmos",
      conceptIndex: 4,
      question: "¿Cuáles son los dos recursos principales que mide el análisis de algoritmos?",
      options: [
        "Tiempo de ejecución (complejidad temporal) y memoria consumida (complejidad espacial)",
        "Legibilidad del código y facilidad de mantenimiento",
        "Número de líneas de código y número de funciones definidas",
      ],
      correct: 0,
    },

    // ── CONCEPTO 5: Verificación de Algoritmos ──
    {
      concept: "Verificación de Algoritmos",
      conceptIndex: 5,
      question: "¿Qué debe demostrarse para considerar que un algoritmo está verificado?",
      options: [
        "Que su complejidad temporal es polinómica y su complejidad espacial es lineal",
        "Que termina en un tiempo finito para cualquier entrada válida y devuelve un resultado correcto según su especificación",
        "Que produce resultados correctos para un conjunto representativo de casos de prueba",
      ],
      correct: 1,
    },
    {
      concept: "Verificación de Algoritmos",
      conceptIndex: 5,
      question: "¿En qué se diferencia la verificación formal de un algoritmo respecto al testing?",
      options: [
        "La verificación demuestra la corrección para todas las entradas posibles; el testing solo prueba casos concretos",
        "La verificación es más rápida de realizar pero menos fiable que el testing exhaustivo",
        "El testing garantiza la corrección para todas las entradas posibles; la verificación solo para las probadas",
      ],
      correct: 0,
    },
    {
      concept: "Verificación de Algoritmos",
      conceptIndex: 5,
      question: "¿Cuál de las siguientes afirmaciones sobre la verificación de algoritmos es correcta?",
      options: [
        "La verificación y el testing son equivalentes cuando el número de casos de prueba es suficientemente grande",
        "La verificación formal garantiza tanto la terminación del algoritmo como la corrección de su resultado",
        "Un algoritmo que pasa todas las pruebas de testing está formalmente verificado",
      ],
      correct: 1,
    },

    // ── CONCEPTO 6: Paradigmas de Diseño ──
    {
      concept: "Paradigmas de Diseño de Algoritmos",
      conceptIndex: 6,
      question: "¿Qué ventaja ofrecen los paradigmas de diseño frente a las soluciones ad-hoc de fuerza bruta?",
      options: [
        "Garantizan siempre una complejidad constante independientemente del tamaño de la entrada",
        "Producen algoritmos eficientes, claros y reutilizables; permiten generalizar y aplicar el mismo esquema a distintos problemas",
        "Son siempre más sencillos de implementar y requieren menos conocimiento matemático",
      ],
      correct: 1,
    },
    {
      concept: "Paradigmas de Diseño de Algoritmos",
      conceptIndex: 6,
      question: "¿Qué ocurre cuando se instancia un esquema general (paradigma) en un problema concreto?",
      options: [
        "El esquema general siempre produce exactamente el mismo algoritmo independientemente del problema",
        "Se genera un algoritmo específico para ese problema, manteniendo el esquema general reutilizable para otros",
        "El esquema se modifica permanentemente para adaptarse al problema, perdiendo su carácter general",
      ],
      correct: 1,
    },
    {
      concept: "Paradigmas de Diseño de Algoritmos",
      conceptIndex: 6,
      question: "¿Cuáles son los paradigmas de diseño de algoritmos estudiados en ADA?",
      options: [
        "Búsqueda lineal, búsqueda binaria, ordenación y hashing",
        "Divide y Vencerás, Programación Dinámica, Algoritmos Voraces, Vuelta Atrás y Ramificación y Poda",
        "Programación orientada a objetos, programación funcional, programación reactiva y metaprogramación",
      ],
      correct: 1,
    },

    // ── CONCEPTO 7: Fuerza Bruta vs. Paradigmas ──
    {
      concept: "Fuerza Bruta vs. Paradigmas",
      conceptIndex: 7,
      question: "¿Cuál es el principal inconveniente de los algoritmos de fuerza bruta respecto a los basados en paradigmas?",
      options: [
        "Requieren más memoria que los algoritmos basados en paradigmas para producir el mismo resultado",
        "Son ineficientes (habitualmente exponenciales), específicos de cada problema y frágiles ante cambios en la especificación",
        "Son más difíciles de entender y depurar que los algoritmos basados en paradigmas",
      ],
      correct: 1,
    },
    {
      concept: "Fuerza Bruta vs. Paradigmas",
      conceptIndex: 7,
      question: "¿Qué complejidad temporal producen habitualmente los algoritmos basados en paradigmas, frente a la exponencial de fuerza bruta?",
      options: [
        "Complejidad polinómica (p.ej. O(n log n), O(n²)), mucho más eficiente que la exponencial de la fuerza bruta",
        "Complejidad constante O(1), ya que los paradigmas eliminan completamente la dependencia del tamaño de la entrada",
        "Complejidad logarítmica O(log n) en todos los casos, gracias a la reducción sistemática del problema",
      ],
      correct: 0,
    },
    {
      concept: "Fuerza Bruta vs. Paradigmas",
      conceptIndex: 7,
      question: "¿Por qué los algoritmos de fuerza bruta son 'frágiles ante cambios en la especificación'?",
      options: [
        "Porque dependen de la arquitectura hardware concreta y no son portables entre sistemas",
        "Porque al ser soluciones ad-hoc específicas de un problema, cualquier cambio en los requisitos obliga a rediseñarlos desde cero",
        "Porque están escritos en lenguajes de bajo nivel que no admiten modificaciones sin recompilar",
      ],
      correct: 1,
    },

  ],
});
