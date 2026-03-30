window.TEMAS_PARADIGMAS = window.TEMAS_PARADIGMAS || [];
window.TEMAS_PARADIGMAS.push({
  id: "practica5",
  nombre: "Funciones de Orden Superior",
  tema: 5,
  resumenUrl: "resumen_p5.html",
  preguntas: [
    { concept: "map, filter, foldr", conceptIndex: 1, question: "¿Qué devuelve (map (lambda (x) (* x 2)) '(1 2 3))?", options: ["'(2 4 6)", "'(1 2 3 1 2 3)", "Error"], correct: 0, },
    { concept: "map, filter, foldr", conceptIndex: 1, question: "¿Qué devuelve (filter (lambda (x) (> x 3)) '(1 5 2 8 3))?", options: ["'(5 8)", "'(1 2 3)", "'()"], correct: 0, },
    { concept: "map, filter, foldr", conceptIndex: 1, question: "¿Qué devuelve (foldr + 0 '(1 2 3 4))?", options: ["10", "4", "0"], correct: 0, },
    { concept: "map, filter, foldr", conceptIndex: 1, question: "¿Qué devuelve (foldl cons '() '(1 2 3))?", options: ["'(3 2 1)", "'(1 2 3)", "'()"], correct: 0, },
    { concept: "Orden superior", conceptIndex: 2, question: "¿Qué devuelve (aplica-veces doble suma-2 3 5) donde doble=lambda(x)(*x 2) y suma-2=lambda(x)(+x 2)?", options: ["20", "68", "32"], correct: 1, },
    { concept: "Orden superior", conceptIndex: 2, question: "Si (define cuadruple (compose doble doble)), ¿qué devuelve (cuadruple 3)?", options: ["12", "18", "36"], correct: 2, },
    { concept: "Ordenación genérica", conceptIndex: 3, question: "¿Qué devuelve (ordena-generica < '(3 1 4 1 5))?", options: ["'(1 1 3 4 5)", "'(5 4 3 1 1)", "Error"], correct: 0, },
    { concept: "Ordenación genérica", conceptIndex: 3, question: "¿Qué devuelve (ordena-generica (lambda (s1 s2) (< (string-length s1) (string-length s2))) '(\"hi\" \"hello\" \"a\"))?", options: ["'(\"a\" \"hi\" \"hello\")", "'(\"hello\" \"hi\" \"a\")", "Error"], correct: 0, },
    { concept: "Closures", conceptIndex: 4, question: "Si (define f (lambda (x) (lambda (y) (+ x y)))), ¿qué devuelve ((f 3) 5)?", options: ["8", "3", "5"], correct: 0, },
    { concept: "Closures", conceptIndex: 4, question: "Un closure es una función que captura variables de...", options: ["su ámbito local", "su entorno externo", "variables globales"], correct: 1, },
    { concept: "FOS rewrites", conceptIndex: 5, question: "Reescribir (define (suma-lista lst) (foldr + 0 lst)) con FOS es directo porque...", options: ["foldr ya es HOF", "+ es una función", "ambas respuestas"], correct: 2, },
    { concept: "FOS rewrites", conceptIndex: 5, question: "¿Qué devuelve (define (busca-mayor lst) (foldl (lambda (a b) (if (> b a) b a)) (first lst) (rest lst)))?", options: ["el máximo de lst", "el mínimo de lst", "Error"], correct: 0, },
    { concept: "Predicados", conceptIndex: 5, question: "¿Qué devuelve (for-all? (lambda (x) (> x 0)) '(1 2 3 4))?", options: ["#t", "#f", "#t o #f"], correct: 0, },
    { concept: "Predicados", conceptIndex: 5, question: "¿Qué devuelve (exists? (lambda (x) (= x 3)) '(1 2 3 4))?", options: ["#f", "#t", "3"], correct: 1, },
    { concept: "Aplicación de función", conceptIndex: 5, question: "¿Qué devuelve (apply + '(1 2 3 4))?", options: ["10", "'(1 2 3 4)", "Error"], correct: 0, },
  ],
});
