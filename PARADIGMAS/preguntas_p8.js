window.TEMAS_PARADIGMAS = window.TEMAS_PARADIGMAS || [];
window.TEMAS_PARADIGMAS.push({
  id: "practica8",
  nombre: "Árboles",
  tema: 8,
  resumenUrl: "resumen_p8.html",
  preguntas: [
    { concept: "Estructura de árboles", conceptIndex: 1, question: "En un árbol genérico, cada nodo tiene...", options: ["exactamente 2 hijos", "un dato y una lista de hijos", "solo datos"], correct: 1, },
    { concept: "Estructura de árboles", conceptIndex: 1, question: "¿Qué devuelve (dato-arbol nodo) donde nodo es un árbol?", options: ["el árbol completo", "el dato raíz", "los hijos"], correct: 1, },
    { concept: "Estructura de árboles", conceptIndex: 1, question: "¿Qué devuelve (hijos-arbol nodo)?", options: ["una lista de árboles", "un árbol", "un dato"], correct: 0, },
    { concept: "Recursión en árboles", conceptIndex: 2, question: "¿Qué devuelve (suma-datos-arbol (arbol 40 (list (arbol 2 (list (arbol 3) (arbol 10))) (arbol 8 (list (arbol 6))) (arbol 5))))?", options: ["74", "40", "60"], correct: 0, },
    { concept: "Recursión en árboles", conceptIndex: 2, question: "suma-datos-bosque es una función que suma datos de...", options: ["una lista de árboles", "un árbol", "un nodo"], correct: 0, },
    { concept: "Recursión en árboles", conceptIndex: 2, question: "¿Cuál es la relación entre suma-datos-arbol y suma-datos-bosque?", options: ["son funciones mutuamente recursivas", "suma-bosque llama a suma-arbol", "ambas respuestas"], correct: 2, },
    { concept: "Versión FOS", conceptIndex: 3, question: "¿Qué devuelve (map suma-datos-arbol (hijos-arbol arbol)) en suma-datos-arbol-fos?", options: ["'(15 14 5)", "74", "una lista de sumas"], correct: 2, },
    { concept: "Versión FOS", conceptIndex: 3, question: "En suma-datos-arbol-fos, el foldr se aplica a...", options: ["los hijos", "la lista de sumas parciales", "el árbol raíz"], correct: 1, },
    { concept: "to-string-arbol", conceptIndex: 4, question: "¿Qué devuelve (to-string-arbol (arbol a (list (arbol b) (arbol c))))?", options: ["\"abc\"", "\"a\"", "'a"], correct: 0, },
    { concept: "veces-arbol", conceptIndex: 4, question: "¿Qué devuelve (veces-arbol 'b (arbol a (list (arbol b) (arbol b) (arbol c))))?", options: ["3", "2", "1"], correct: 1, },
    { concept: "Árboles binarios", conceptIndex: 5, question: "En un árbol binario de búsqueda, cada nodo tiene...", options: ["un dato, un hijo izq y un hijo der", "un dato y dos hijos siempre", "datos ordenados"], correct: 0, },
    { concept: "Árboles binarios", conceptIndex: 5, question: "¿Qué devuelve (ordenado-entre? arbol 0 50) si el árbol contiene valores todos entre 0 y 50?", options: ["#f", "#t", "Error"], correct: 1, },
    { concept: "Caminos en árboles", conceptIndex: 6, question: "¿Qué devuelve (es-camino? '(a b a) (arbol a (list (arbol b (list (arbol a))))))?", options: ["#f", "#t", "Error"], correct: 1, },
    { concept: "Nodos en nivel", conceptIndex: 6, question: "¿Qué devuelve (nodos-nivel 2 (arbol a (list (arbol b (list (arbol c) (arbol d))) (arbol e))))?", options: ["'(c d)", "'(b e)", "'(a)"], correct: 0, },
    { concept: "Árboles generales", conceptIndex: 6, question: "La ventaja de los árboles generales sobre los binarios es que...", options: ["cada nodo puede tener más de 2 hijos", "son más simples", "ocupan menos espacio"], correct: 0, },
  ],
});
