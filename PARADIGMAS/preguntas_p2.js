window.TEMAS_PARADIGMAS = window.TEMAS_PARADIGMAS || [];
window.TEMAS_PARADIGMAS.push({
  id: "practica2",
  nombre: "Programación Funcional",
  tema: 2,
  resumenUrl: "resumen_p2.html",
  preguntas: [
    // Concepto 1: Conversión binario-decimal
    {
      concept: "Conversión binario-decimal",
      conceptIndex: 1,
      question: "¿Qué devuelve (binario-a-decimal 1 1 1 1)?",
      options: ["8", "15", "16"],
      correct: 1,
    },
    {
      concept: "Conversión binario-decimal",
      conceptIndex: 1,
      question: "¿Qué devuelve (binario-a-decimal 0 1 1 0)?",
      options: ["3", "6", "12"],
      correct: 1,
    },
    {
      concept: "Conversión binario-decimal",
      conceptIndex: 1,
      question: "¿Qué devuelve (binario-a-decimal 1 0 0 0)?",
      options: ["1", "4", "8"],
      correct: 2,
    },
    {
      concept: "Conversión binario-decimal",
      conceptIndex: 1,
      question: "¿Qué devuelve (binario-a-decimal 0 0 1 0)?",
      options: ["1", "2", "4"],
      correct: 1,
    },

    // Concepto 2: Conversión binario-hexadecimal
    {
      concept: "Conversión binario-hexadecimal",
      conceptIndex: 2,
      question: "¿Qué devuelve (binario-a-hexadecimal 1 1 1 1)?",
      options: ["#\\F", "#\\9", "#\\8"],
      correct: 0,
    },
    {
      concept: "Conversión binario-hexadecimal",
      conceptIndex: 2,
      question: "¿Qué devuelve (binario-a-hexadecimal 0 1 1 0)?",
      options: ["#\\3", "#\\6", "#\\C"],
      correct: 1,
    },
    {
      concept: "Conversión binario-hexadecimal",
      conceptIndex: 2,
      question: "¿Qué devuelve (binario-a-hexadecimal 1 0 1 0)?",
      options: ["#\\A", "#\\5", "#\\8"],
      correct: 0,
    },
    {
      concept: "Conversión binario-hexadecimal",
      conceptIndex: 2,
      question: "¿Qué devuelve (binario-a-hexadecimal 1 1 0 0)?",
      options: ["#\\6", "#\\C", "#\\9"],
      correct: 1,
    },

    // Concepto 3: Cifrado César
    {
      concept: "Cifrado César",
      conceptIndex: 3,
      question: "¿Qué devuelve (cifra-caracter #\\c 5)?",
      options: ["#\\h", "#\\d", "#\\x"],
      correct: 0,
    },
    {
      concept: "Cifrado César",
      conceptIndex: 3,
      question: "¿Qué devuelve (cifra-caracter #\\z -1)?",
      options: ["#\\a", "#\\y", "#\\z"],
      correct: 1,
    },
    {
      concept: "Cifrado César",
      conceptIndex: 3,
      question: "¿Qué devuelve (descifra-caracter #\\d 3)?",
      options: ["#\\a", "#\\g", "#\\x"],
      correct: 0,
    },
    {
      concept: "Cifrado César",
      conceptIndex: 3,
      question: "¿Qué devuelve (cifra-caracter #\\D 3)?",
      options: ["#\\A", "#\\G", "#\\D"],
      correct: 1,
    },

    // Concepto 4: Menor de tres
    {
      concept: "Menor de tres",
      conceptIndex: 4,
      question: "¿Qué devuelve (menor-de-tres 2 8 1)?",
      options: ["2", "1", "8"],
      correct: 1,
    },
    {
      concept: "Menor de tres",
      conceptIndex: 4,
      question: "¿Qué devuelve (menor-de-tres 3 0 3)?",
      options: ["0", "3", "1"],
      correct: 0,
    },
    {
      concept: "Menor de tres",
      conceptIndex: 4,
      question: "¿Qué devuelve (menor-de-tres 5 5 5)?",
      options: ["0", "5", "Error"],
      correct: 1,
    },
    {
      concept: "Menor de tres",
      conceptIndex: 4,
      question: "¿Qué devuelve (menor-de-tres 10 1 100)?",
      options: ["10", "1", "100"],
      correct: 1,
    },

    // Concepto 5: Función jugada-mano
    {
      concept: "Función jugada-mano",
      conceptIndex: 5,
      question: "¿Qué devuelve (jugada-mano '3♥ '3♣ '3♥)?",
      options: ["\"pareja de 3\"", "\"trío de 3\"", "\"nada\""],
      correct: 1,
    },
    {
      concept: "Función jugada-mano",
      conceptIndex: 5,
      question: "¿Qué devuelve (jugada-mano 'K♦ '7♠ 'K♥)?",
      options: ["\"pareja de 12\"", "\"pareja de 7\"", "\"nada\""],
      correct: 0,
    },
    {
      concept: "Función jugada-mano",
      conceptIndex: 5,
      question: "¿Qué devuelve (jugada-mano '5♣ '4♣ '6♣)?",
      options: ["\"pareja de 5\"", "\"nada\"", "\"trío de 5\""],
      correct: 1,
    },
    {
      concept: "Función jugada-mano",
      conceptIndex: 5,
      question: "¿Qué devuelve (jugada-mano 'A♠ 'A♦ '7♣)?",
      options: ["\"pareja de 7\"", "\"pareja de 1\"", "\"nada\""],
      correct: 1,
    },
  ],
});
