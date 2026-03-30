window.TEMAS_PARADIGMAS = window.TEMAS_PARADIGMAS || [];
window.TEMAS_PARADIGMAS.push({
  id: "practica7",
  nombre: "Listas Estructuradas",
  tema: 7,
  resumenUrl: "resumen_p7.html",
  preguntas: [
    { concept: "Listas anidadas", conceptIndex: 1, question: "Dada lista-a = '((a b) d (c (e) (f g) h)), ¿qué devuelve (first lista-a)?", options: ["'(a b)", "a", "'d"], correct: 0, },
    { concept: "Listas anidadas", conceptIndex: 1, question: "En '((a b) d (c (e) (f g) h)), ¿qué devuelve (fourth (third lista-a))?", options: ["'h", "'(h)", "Error"], correct: 1, },
    { concept: "Listas anidadas", conceptIndex: 1, question: "¿Qué devuelve (length '((1 2) (3 4 5) (6)))?", options: ["6", "3", "Error"], correct: 1, },
    { concept: "Acceso a elementos anidados", conceptIndex: 2, question: "¿Qué devuelve (second (second '((a b) (c d e) f)))?", options: ["'d", "'e", "Error"], correct: 1, },
    { concept: "Acceso a elementos anidados", conceptIndex: 2, question: "¿Qué devuelve (first (third '((a b) d (c (e)))))?", options: ["'c", "c", "'(c (e))"], correct: 0, },
    { concept: "Recursión sobre estructuras anidadas", conceptIndex: 3, question: "La función cuadrado-estruct aplica una función a cada elemento de una lista anidada, devolviendo...", options: ["una lista anidada del mismo formato", "una lista plana", "un número"], correct: 0, },
    { concept: "Recursión sobre estructuras anidadas", conceptIndex: 3, question: "¿Qué devuelve (cuadrado-estruct '((1 2) (3 4)))?", options: ["'((1 4) (9 16))", "'(1 4 9 16)", "Error"], correct: 0, },
    { concept: "nivel-hoja-fos", conceptIndex: 4, question: "¿Qué devuelve (nivel-hoja-fos 'a '(a (b (c a) d)))?", options: ["0", "2", "'(0 2)"], correct: 1, },
    { concept: "nivel-hoja-fos", conceptIndex: 4, question: "nivel-hoja-fos devuelve la profundidad máxima en la que aparece un elemento usando...", options: ["recursión manual", "map y max-vía-foldl", "filtros"], correct: 1, },
    { concept: "concatena sobre estructuras", conceptIndex: 5, question: "¿Qué devuelve (concatena-fos '((#\\H) (#\\o #\\l #\\a)))?", options: ["\"Hola\"", "\"H\" + \"ola\"", "Error"], correct: 0, },
    { concept: "Predicados sobre estructuras", conceptIndex: 5, question: "¿Qué devuelve (cumplen-predicado (lambda (x) (> x 2)) '(1 (2 (3 (4)))))?", options: ["'(3 4)", "#t", "#f"], correct: 0, },
    { concept: "Profundidad de estructuras", conceptIndex: 5, question: "¿Qué devuelve (nivel-mas-profundo '(2 (3)))?", options: ["'(3 . 2)", "3", "2"], correct: 0, },
    { concept: "Estructura de datos mixta", conceptIndex: 5, question: "Una lista estructurada puede contener...", options: ["solo átomos", "solo listas", "átomos y listas anidadas"], correct: 2, },
    { concept: "Recursión sobre estructuras", conceptIndex: 5, question: "Para procesar una lista estructurada recursivamente, el caso base es cuando...", options: ["la lista está vacía", "es un átomo", "ambas son válidas"], correct: 2, },
    { concept: "Listas estructuradas", conceptIndex: 5, question: "La diferencia entre (first '(a (b c))) y (rest '(a (b c))) es...", options: ["primer devuelve a, rest devuelve ((b c))", "ambas devuelven lo mismo", "rest devuelve Error"], correct: 0, },
  ],
});
