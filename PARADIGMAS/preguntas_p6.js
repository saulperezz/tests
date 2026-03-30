window.TEMAS_PARADIGMAS = window.TEMAS_PARADIGMAS || [];
window.TEMAS_PARADIGMAS.push({
  id: "practica6",
  nombre: "Procesos Recursivos e Iterativos",
  tema: 6,
  resumenUrl: "resumen_p6.html",
  preguntas: [
    { concept: "Recursión vs iteración", conceptIndex: 1, question: "Una función recursiva de cola es aquella donde la llamada recursiva es la...", options: ["primera instrucción", "última instrucción", "en una rama condicional"], correct: 1, },
    { concept: "Recursión vs iteración", conceptIndex: 1, question: "¿Qué tipo de proceso genera (concat-iter lista acumulador)?", options: ["recursivo", "iterativo", "lineal"], correct: 1, },
    { concept: "concat-iter", conceptIndex: 2, question: "¿Qué devuelve (concat-iter '(#\\H #\\o #\\l #\\a) \"\")?", options: ["\"Hola\"", "\"alopH\"", "\"alopH\\\""], correct: 1, },
    { concept: "concat-iter", conceptIndex: 2, question: "El acumulador en concat-iter mantiene...", options: ["la cadena parcial", "el contador", "la lista original"], correct: 0, },
    { concept: "min-max-iter", conceptIndex: 3, question: "¿Qué devuelve (min-max-iter '(2 5 9 12 5 0 4) '(2 . 2))?", options: ["'(0 . 12)", "'(2 . 12)", "'(0 . 2)"], correct: 0, },
    { concept: "min-max-iter", conceptIndex: 3, question: "La pareja acumuladora en min-max-iter es (mínimo . máximo) donde inicialmente...", options: ["(primer-elem . primer-elem)", "(0 . infinito)", "(infinito . 0)"], correct: 0, },
    { concept: "mi-foldl", conceptIndex: 4, question: "¿Qué devuelve (mi-foldl cons '() '(1 2 3 4))?", options: ["'(4 3 2 1)", "'(1 2 3 4)", "'()"], correct: 0, },
    { concept: "mi-foldl", conceptIndex: 4, question: "¿Qué devuelve (mi-foldl string-append \"****\" '(\"hola\" \"que\" \"tal\"))?", options: ["\"talquehola****\"", \"\"holaquetaltal****\\\"", "Error"], correct: 0, },
    { concept: "Acumuladores", conceptIndex: 5, question: "Un acumulador es una variable que...", options: ["almacena el resultado parcial durante la iteración", "cuenta las llamadas recursivas", "guarda la entrada original"], correct: 0, },
    { concept: "Acumuladores", conceptIndex: 5, question: "En (define (fact n acc) (if (= n 0) acc (fact (- n 1) (* acc n)))), el acumulador es...", options: ["n", "acc", "0"], correct: 1, },
    { concept: "Tail call optimization", conceptIndex: 5, question: "Una función con tail recursion puede optimizarse porque...", options: ["usa menos memoria de pila", "es más rápida", "ambas respuestas"], correct: 2, },
    { concept: "Eficiencia", conceptIndex: 5, question: "¿Cuál es la diferencia de eficiencia entre (concat lista) recursivo e (concat-iter lista \"\") iterativo?", options: ["Lineal vs logarítmico", "Cuadrático vs lineal", "Sin diferencia"], correct: 1, },
    { concept: "Procesos iterativos", conceptIndex: 5, question: "¿Qué tipo de proceso genera (define (suma-iter lista acc) (if (null? lista) acc (suma-iter (rest lista) (+ acc (first lista)))))?", options: ["recursivo", "iterativo", "exponencial"], correct: 1, },
    { concept: "Procesos iterativos", conceptIndex: 5, question: "El espacio de memoria usado por un proceso iterativo es...", options: ["lineal con la entrada", "constante", "exponencial"], correct: 1, },
    { concept: "Transformación a iterativo", conceptIndex: 5, question: "Para transformar una función recursiva a iterativa se necesita...", options: ["agregar un parámetro acumulador", "cambiar la llamada recursiva al final", "ambas respuestas"], correct: 2, },
  ],
});
