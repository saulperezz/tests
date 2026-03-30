window.TEMAS_PARADIGMAS = window.TEMAS_PARADIGMAS || [];
window.TEMAS_PARADIGMAS.push({
  id: "practica1",
  nombre: "Seminario de Scheme",
  tema: 1,
  resumenUrl: "resumen_p1.html",
  preguntas: [
    // Concepto 1: Expresiones numéricas
    {
      concept: "Expresiones numéricas",
      conceptIndex: 1,
      question: "¿Qué devuelve (+ 1 2 3 4)?",
      options: ["3", "10", "1"],
      correct: 1,
    },
    {
      concept: "Expresiones numéricas",
      conceptIndex: 1,
      question: "¿Qué devuelve (* (+ 2 3) 5)?",
      options: ["15", "25", "50"],
      correct: 1,
    },
    {
      concept: "Expresiones numéricas",
      conceptIndex: 1,
      question: "¿Qué devuelve (not (> (+ 3 2) 5))?",
      options: ["#f", "#t", "Error"],
      correct: 1,
    },
    {
      concept: "Expresiones numéricas",
      conceptIndex: 1,
      question: "¿Qué devuelve (+ (- 4 (* 3 (/ 4 2) 4)) 3)?",
      options: ["7", "-17", "15"],
      correct: 1,
    },
    {
      concept: "Expresiones numéricas",
      conceptIndex: 1,
      question: "¿Qué devuelve (and (even? 2) (odd? (+ 3 2)))?",
      options: ["#f", "#t", "Error"],
      correct: 1,
    },

    // Concepto 2: Parejas
    {
      concept: "Parejas",
      conceptIndex: 2,
      question: "¿Qué devuelve (car (cons 1 2))?",
      options: ["2", "1", "'(1 . 2)"],
      correct: 1,
    },
    {
      concept: "Parejas",
      conceptIndex: 2,
      question: "¿Qué devuelve (cdr (cons 1 2))?",
      options: ["1", "2", "'(1 . 2)"],
      correct: 1,
    },
    {
      concept: "Parejas",
      conceptIndex: 2,
      question: "¿Qué devuelve (car (cons (cons 3 4) 2))?",
      options: ["2", "3", "'(3 . 4)"],
      correct: 2,
    },
    {
      concept: "Parejas",
      conceptIndex: 2,
      question: "¿Qué devuelve (cdr (cons 1 (cons 2 3)))?",
      options: ["1", "'(2 . 3)", "3"],
      correct: 1,
    },

    // Concepto 3: Listas
    {
      concept: "Listas",
      conceptIndex: 3,
      question: "¿Qué devuelve (first (rest (rest (list 1 2 3 4))))?",
      options: ["3", "2", "4"],
      correct: 0,
    },
    {
      concept: "Listas",
      conceptIndex: 3,
      question: "¿Qué devuelve (cons 3 '(1 2 3))?",
      options: ["'(1 2 3 3)", "'(3 1 2 3)", "'(3 1 2)"],
      correct: 1,
    },
    {
      concept: "Listas",
      conceptIndex: 3,
      question: "¿Qué devuelve (first (list (list 1 2) 1 2 3 4))?",
      options: ["1", "'(1 2)", "2"],
      correct: 1,
    },
    {
      concept: "Listas",
      conceptIndex: 3,
      question: "¿Qué devuelve (first (rest (rest (rest '(1 2 3 4)))))?",
      options: ["3", "4", "2"],
      correct: 1,
    },

    // Concepto 4: Strings y caracteres
    {
      concept: "Strings y caracteres",
      conceptIndex: 4,
      question: "¿Qué devuelve (string-ref \"pepe\" 1)?",
      options: ["#\\p", "#\\e", "#\\s"],
      correct: 1,
    },
    {
      concept: "Strings y caracteres",
      conceptIndex: 4,
      question: "¿Qué devuelve (substring \"buenos dias\" 1 4)?",
      options: ["\"buen\"", "\"uen\"", "\"enos\""],
      correct: 1,
    },
    {
      concept: "Strings y caracteres",
      conceptIndex: 4,
      question: "¿Qué devuelve (string-ref (substring \"buenos dias\" 2 5) 1)?",
      options: ["#\\n", "#\\e", "#\\u"],
      correct: 0,
    },
  ],
});
