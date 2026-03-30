window.TEMAS_ADA = window.TEMAS_ADA || [];
window.TEMAS_ADA.push({
  id: "divide",
  nombre: "Divide y Vencerás",
  tema: 3,
  resumenUrl: "resumen_T3_divide_venceras.html",
  preguntas: [

    // ── CONCEPTO 1: Paradigma Divide y Vencerás ──
    {
      concept: "Paradigma Divide y Vencerás",
      conceptIndex: 1,
      question: "¿Cuáles son las tres fases del paradigma Divide y Vencerás?",
      options: [
        "Seleccionar, verificar y combinar",
        "Dividir, conquistar (resolver recursivamente) y combinar",
        "Inicializar, iterar y finalizar",
      ],
      correct: 1,
    },
    {
      concept: "Paradigma Divide y Vencerás",
      conceptIndex: 1,
      question: "¿Qué condiciones deben cumplirse para que el paradigma Divide y Vencerás sea aplicable a un problema?",
      options: [
        "Que los subproblemas sean independientes entre sí y no compartan subsubproblemas",
        "Que el problema sea de optimización y tenga subestructura óptima demostrable",
        "Que exista una forma de descomponer el problema, una solución trivial para el caso base y una forma de combinar soluciones",
      ],
      correct: 2,
    },
    {
      concept: "Paradigma Divide y Vencerás",
      conceptIndex: 1,
      question: "¿Cuáles son las dos principales dificultades del paradigma Divide y Vencerás?",
      options: [
        "Identificar el caso base y determinar el número exacto de subproblemas",
        "No siempre un subproblema de talla menor es más fácil, y no siempre combinar las soluciones es sencillo",
        "Garantizar que los subproblemas son independientes y que no se repiten en distintas ramas",
      ],
      correct: 1,
    },

    // ── CONCEPTO 2: Esquema General ──
    {
      concept: "Esquema General de Divide y Vencerás",
      conceptIndex: 2,
      question: "¿Qué cuatro elementos hay que definir para instanciar el esquema general DyV en un problema concreto?",
      options: [
        "Talla, caso base, recurrencia y solución óptima",
        "is_simple, trivial, divide y combine",
        "prepararDatos, selecciona, esFactible y añadeElemento",
      ],
      correct: 1,
    },
    {
      concept: "Esquema General de Divide y Vencerás",
      conceptIndex: 2,
      question: "En Mergesort, ¿qué función instancia el elemento 'combine' del esquema DyV?",
      options: [
        "La función de particionado que coloca el pivote en su posición definitiva",
        "La función merge que fusiona dos subarrays ordenados en uno solo",
        "La función de búsqueda binaria que localiza el punto de corte del array",
      ],
      correct: 1,
    },
    {
      concept: "Esquema General de Divide y Vencerás",
      conceptIndex: 2,
      question: "En Quicksort, ¿qué elemento del esquema DyV no es necesario y por qué?",
      options: [
        "El elemento 'divide', porque el pivote ya está en su posición definitiva tras el particionado",
        "El elemento 'combine', porque el array ya queda ordenado in-place tras las llamadas recursivas",
        "El elemento 'trivial', porque Quicksort nunca llega al caso base con arrays de tamaño 1",
      ],
      correct: 1,
    },

    // ── CONCEPTO 3: Ecuación de Recurrencia General ──
    {
      concept: "Ecuación de Recurrencia General de DyV",
      conceptIndex: 3,
      question: "En la recurrencia general T(n) = h·T(n/b) + g(n), ¿qué representa h?",
      options: [
        "El factor por el que se reduce el tamaño del problema en cada llamada recursiva",
        "El coste de las operaciones de dividir y combinar excluidas las llamadas recursivas",
        "El número de subproblemas en que se divide el problema en cada paso",
      ],
      correct: 2,
    },
    {
      concept: "Ecuación de Recurrencia General de DyV",
      conceptIndex: 3,
      question: "En la recurrencia general T(n) = h·T(n/b) + g(n), ¿qué representa g(n)?",
      options: [
        "El coste de las operaciones de dividir y combinar, excluyendo las llamadas recursivas",
        "El número total de subproblemas generados a lo largo de toda la recursión",
        "El tamaño de cada subproblema generado en cada nivel de la recursión",
      ],
      correct: 0,
    },
    {
      concept: "Ecuación de Recurrencia General de DyV",
      conceptIndex: 3,
      question: "¿De qué depende principalmente la complejidad final de un algoritmo DyV según su recurrencia?",
      options: [
        "Exclusivamente del número de llamadas recursivas h, independientemente de g(n)",
        "Del equilibrio entre cuánto trabajo extra genera cada nivel (g(n)) y cuántos subproblemas se generan por nivel (h)",
        "Únicamente de la profundidad del árbol de recursión, que siempre es log_b(n)",
      ],
      correct: 1,
    },

    // ── CONCEPTO 4: Teorema Maestro ──
    {
      concept: "Teorema Maestro (Master Theorem)",
      conceptIndex: 4,
      question: "Según el Teorema Maestro con g(n) ∈ Θ(nᵏ), ¿qué complejidad resulta cuando h = bᵏ?",
      options: [
        "T(n) ∈ Θ(nᵏ), porque domina el trabajo de combinar",
        "T(n) ∈ Θ(nᵏ · log_b n), porque el trabajo es equilibrado en todos los niveles",
        "T(n) ∈ Θ(n^(log_b h)), porque domina el número de subproblemas",
      ],
      correct: 1,
    },
    {
      concept: "Teorema Maestro (Master Theorem)",
      conceptIndex: 4,
      question: "Según el Teorema Maestro, ¿cuándo domina el número de subproblemas (nivel hoja) y cuál es la complejidad resultante?",
      options: [
        "Cuando h < bᵏ; la complejidad es T(n) ∈ Θ(nᵏ)",
        "Cuando h > bᵏ; la complejidad es T(n) ∈ Θ(n^(log_b h))",
        "Cuando h = bᵏ; la complejidad es T(n) ∈ Θ(nᵏ · log_b n)",
      ],
      correct: 1,
    },
    {
      concept: "Teorema Maestro (Master Theorem)",
      conceptIndex: 4,
      question: "¿Qué comparación realiza intuitivamente el Teorema Maestro para determinar cuál de los tres casos aplica?",
      options: [
        "Compara la profundidad del árbol de recursión con el número de hojas generadas",
        "Compara la velocidad de crecimiento del número de subproblemas (hⁱ) con la velocidad de decrecimiento del trabajo por subproblema (g(n/bⁱ))",
        "Compara el coste del caso base con el coste del nivel raíz de la recursión",
      ],
      correct: 1,
    },

    // ── CONCEPTO 5: Teorema de Reducción ──
    {
      concept: "Teorema de Reducción (b = h = a)",
      conceptIndex: 5,
      question: "¿Qué condición define el Teorema de Reducción frente al Teorema Maestro general?",
      options: [
        "Que el coste de combinar g(n) sea siempre constante Θ(1)",
        "Que el número de subproblemas h sea igual al factor de reducción b (b = h = a)",
        "Que solo haya una llamada recursiva por nivel (h = 1)",
      ],
      correct: 1,
    },
    {
      concept: "Teorema de Reducción (b = h = a)",
      conceptIndex: 5,
      question: "En el Teorema de Reducción con g(n) ∈ Θ(nᵏ), ¿qué complejidad produce el caso k = 1?",
      options: [
        "Θ(nᵏ) = Θ(n), porque k = 1 hace que domine el trabajo de combinar",
        "Θ(n log n), que es la complejidad más común en algoritmos eficientes como Mergesort",
        "Θ(n²), porque k = 1 implica que hay exactamente n niveles de recursión",
      ],
      correct: 1,
    },
    {
      concept: "Teorema de Reducción (b = h = a)",
      conceptIndex: 5,
      question: "¿Cuál es el resultado sorprendente del Teorema de Reducción cuando k < 1 (g(n) sublineal)?",
      options: [
        "La complejidad es Θ(1) porque el trabajo de combinar es despreciable",
        "La complejidad es Θ(n log n), igual que cuando k = 1, porque los niveles de recursión compensan",
        "La complejidad total es Θ(n) aunque haya múltiples llamadas recursivas, porque el trabajo sublineal de combinar hace que domine el nivel raíz",
      ],
      correct: 2,
    },

    // ── CONCEPTO 6: Mergesort ──
    {
      concept: "Mergesort",
      conceptIndex: 6,
      question: "¿Cuál es la recurrencia de Mergesort y qué complejidad produce aplicando el Teorema de Reducción?",
      options: [
        "T(n) = T(n-1) + Θ(n) → T(n) ∈ Θ(n²)",
        "T(n) = 2T(n/2) + Θ(n) → T(n) ∈ Θ(n log n) (con a=2, k=1)",
        "T(n) = 2T(n/2) + Θ(1) → T(n) ∈ Θ(n) (con a=2, k=0)",
      ],
      correct: 1,
    },
    {
      concept: "Mergesort",
      conceptIndex: 6,
      question: "¿Cuál es la complejidad espacial de Mergesort y por qué?",
      options: [
        "Θ(1), porque Mergesort ordena in-place sin necesitar memoria adicional",
        "Θ(n log n), porque cada nivel de recursión necesita un array auxiliar de tamaño n",
        "Θ(n), porque la función merge necesita un array auxiliar de tamaño n (los bloques de distintos niveles nunca coexisten)",
      ],
      correct: 2,
    },
    {
      concept: "Mergesort",
      conceptIndex: 6,
      question: "¿Cuál es la diferencia clave entre Mergesort y Quicksort en cuanto a garantías de complejidad?",
      options: [
        "Mergesort garantiza Θ(n log n) en todos los casos a costa de O(n) de memoria extra; Quicksort no necesita memoria extra pero puede degenerar a O(n²)",
        "Mergesort garantiza O(n) en el mejor caso; Quicksort siempre tiene complejidad Θ(n log n)",
        "Mergesort es in-place y Quicksort necesita O(n) de memoria extra",
      ],
      correct: 0,
    },

    // ── CONCEPTO 7: Función Merge ──
    {
      concept: "Función Merge",
      conceptIndex: 7,
      question: "¿Cuál es la complejidad temporal y espacial de la función merge?",
      options: [
        "Temporal Θ(log n) y espacial Θ(1), porque solo necesita dos punteros",
        "Temporal Θ(n) y espacial Θ(n), donde n es el tamaño total de los dos subarrays a fusionar",
        "Temporal Θ(n²) y espacial Θ(n), porque compara cada par de elementos",
      ],
      correct: 1,
    },
    {
      concept: "Función Merge",
      conceptIndex: 7,
      question: "¿Por qué la función merge necesita un array auxiliar temporal?",
      options: [
        "Porque no es posible comparar elementos de dos subarrays sin copiarlos primero a una estructura temporal",
        "Porque al fusionar in-place se sobreescribirían elementos del subarray izquierdo antes de copiarlos al resultado",
        "Porque el array original está en memoria de solo lectura y no puede modificarse directamente",
      ],
      correct: 1,
    },
    {
      concept: "Función Merge",
      conceptIndex: 7,
      question: "¿Qué papel desempeña la función merge en el esquema DyV de Mergesort?",
      options: [
        "Es la operación de 'dividir' que parte el array en dos mitades iguales",
        "Es la operación de 'combinar' que fusiona las soluciones de los subproblemas y determina el factor g(n) = n de la recurrencia",
        "Es la operación 'trivial' que resuelve directamente el caso base cuando el array tiene un elemento",
      ],
      correct: 1,
    },

    // ── CONCEPTO 8: Quicksort como DyV ──
    {
      concept: "Quicksort como Divide y Vencerás",
      conceptIndex: 8,
      question: "¿En qué se diferencia la instanciación de Quicksort del esquema DyV respecto a Mergesort?",
      options: [
        "Quicksort no usa recursión, sino un bucle iterativo para realizar el particionado",
        "En Quicksort toda la lógica está en la fase de dividir (particionado) y no existe fase de combinar, al contrario que Mergesort donde toda la lógica está en combinar",
        "Quicksort divide el array siempre en mitades iguales, garantizando Θ(n log n) como Mergesort",
      ],
      correct: 1,
    },
    {
      concept: "Quicksort como Divide y Vencerás",
      conceptIndex: 8,
      question: "¿Qué propiedad especial tiene el pivote tras el particionado en Quicksort?",
      options: [
        "El pivote queda en su posición definitiva en el array ordenado, con todos los menores a su izquierda y todos los mayores a su derecha",
        "El pivote queda siempre en la posición central del array, garantizando subproblemas de igual tamaño",
        "El pivote se descarta y no forma parte de ninguna llamada recursiva posterior",
      ],
      correct: 0,
    },
    {
      concept: "Quicksort como Divide y Vencerás",
      conceptIndex: 8,
      question: "¿Por qué la complejidad espacial extra de Quicksort es menor que la de Mergesort?",
      options: [
        "Porque Quicksort usa una tabla hash para almacenar los elementos temporalmente, más eficiente que un array auxiliar",
        "Porque Quicksort ordena in-place sin necesitar arrays auxiliares; solo usa la pila de recursión (O(log n) promedio, O(n) peor caso)",
        "Porque Quicksort elimina la necesidad de la pila de recursión usando un bucle iterativo con una pila explícita",
      ],
      correct: 1,
    },

    // ── CONCEPTO 9: Reduce y Vencerás ──
    {
      concept: "Reduce y Vencerás",
      conceptIndex: 9,
      question: "¿Qué distingue el paradigma 'Reduce y Vencerás' del Divide y Vencerás clásico?",
      options: [
        "En Reduce y Vencerás se generan más subproblemas que en DyV clásico, mejorando la eficiencia",
        "En Reduce y Vencerás solo se resuelve uno de los subproblemas en cada nivel, descartando el otro porque se sabe que la solución no está ahí",
        "En Reduce y Vencerás el coste de combinar es mayor que en DyV clásico porque hay que reconstruir la solución",
      ],
      correct: 1,
    },
    {
      concept: "Reduce y Vencerás",
      conceptIndex: 9,
      question: "¿Qué forma toma la recurrencia de un algoritmo Reduce y Vencerás con factor de reducción b y trabajo extra Θ(1)?",
      options: [
        "T(n) = b·T(n/b) + Θ(1), con b llamadas recursivas de tamaño reducido",
        "T(n) = T(n/b) + Θ(1), con una única llamada recursiva de tamaño n/b",
        "T(n) = T(n-1) + Θ(1), reduciendo el tamaño en una unidad por nivel",
      ],
      correct: 1,
    },
    {
      concept: "Reduce y Vencerás",
      conceptIndex: 9,
      question: "¿Cuál es el algoritmo paradigmático del esquema Reduce y Vencerás y cuál es su complejidad?",
      options: [
        "Mergesort con complejidad Θ(n log n)",
        "Búsqueda binaria con complejidad O(log n)",
        "Quickselect con complejidad Θ(n)",
      ],
      correct: 1,
    },

    // ── CONCEPTO 10: Búsqueda Binaria ──
    {
      concept: "Búsqueda Binaria (Búsqueda Dicotómica)",
      conceptIndex: 10,
      question: "¿Cuál es la precondición indispensable para poder aplicar la búsqueda binaria?",
      options: [
        "Que el array tenga un número de elementos que sea potencia de 2",
        "Que el array esté ordenado",
        "Que el elemento buscado exista en el array",
      ],
      correct: 1,
    },
    {
      concept: "Búsqueda Binaria (Búsqueda Dicotómica)",
      conceptIndex: 10,
      question: "¿Cuál es la recurrencia y la complejidad de la búsqueda binaria?",
      options: [
        "T(n) = 2T(n/2) + Θ(1) → T(n) ∈ Θ(n)",
        "T(n) = T(n-1) + Θ(1) → T(n) ∈ Θ(n)",
        "T(n) = T(n/2) + Θ(1) → T(n) ∈ O(log n)",
      ],
      correct: 2,
    },
    {
      concept: "Búsqueda Binaria (Búsqueda Dicotómica)",
      conceptIndex: 10,
      question: "¿Es posible mejorar la complejidad O(log n) de la búsqueda binaria mediante algún algoritmo de búsqueda por comparación?",
      options: [
        "Sí; usando interpolación se puede alcanzar O(log log n) en arrays con distribución uniforme",
        "No; la búsqueda binaria es óptima para arrays ordenados: ningún algoritmo de búsqueda por comparación puede hacerlo en menos de O(log n) en el peor caso",
        "Sí; usando una tabla hash se puede lograr O(1) incluso con comparaciones",
      ],
      correct: 1,
    },

    // ── CONCEPTO 11: Torres de Hanoi ──
    {
      concept: "Torres de Hanoi",
      conceptIndex: 11,
      question: "¿Por qué no se puede aplicar el Teorema Maestro a la recurrencia de las Torres de Hanoi?",
      options: [
        "Porque hay tres subproblemas en lugar de los dos que requiere el Teorema Maestro",
        "Porque la reducción del problema es n-1 (no n/b), lo que no se ajusta a la forma requerida por el Teorema Maestro",
        "Porque el coste de combinar g(n) es exponencial y el Teorema Maestro solo aplica a funciones polinómicas",
      ],
      correct: 1,
    },
    {
      concept: "Torres de Hanoi",
      conceptIndex: 11,
      question: "¿Cuál es la recurrencia y la solución de las Torres de Hanoi?",
      options: [
        "T(n) = 3T(n-1) + 1 → T(n) = 3ⁿ - 1 ∈ Θ(3ⁿ)",
        "T(n) = 2T(n-1) + 1 → T(n) = 2ⁿ - 1 ∈ Θ(2ⁿ)",
        "T(n) = T(n-1) + T(n-2) + 1 → T(n) ∈ Θ(φⁿ) donde φ es el número áureo",
      ],
      correct: 1,
    },
    {
      concept: "Torres de Hanoi",
      conceptIndex: 11,
      question: "¿Es posible resolver las Torres de Hanoi con menos de 2ⁿ-1 movimientos?",
      options: [
        "Sí; con un algoritmo voraz que seleccione siempre el movimiento óptimo se puede hacer en O(n log n)",
        "No; la complejidad exponencial es intrínseca al problema: se puede demostrar que cualquier algoritmo necesita al menos 2ⁿ-1 movimientos",
        "Sí; usando programación dinámica se puede reducir a O(n²) movimientos",
      ],
      correct: 1,
    },

    // ── CONCEPTO 12: Quickselect ──
    {
      concept: "Quickselect",
      conceptIndex: 12,
      question: "¿Qué problema resuelve Quickselect y cómo lo hace sin ordenar completamente el array?",
      options: [
        "Busca el elemento de mayor valor usando el mismo particionado que Quicksort pero con una sola llamada recursiva",
        "Encuentra el k-ésimo elemento más pequeño usando el particionado de Quicksort y descartando la mitad del array donde no puede estar el elemento buscado",
        "Ordena los k primeros elementos del array usando k iteraciones del particionado de Quicksort",
      ],
      correct: 1,
    },
    {
      concept: "Quickselect",
      conceptIndex: 12,
      question: "¿Cuáles son las complejidades del mejor caso, peor caso y caso promedio de Quickselect?",
      options: [
        "Mejor caso Ω(1), peor caso O(n²), caso promedio Θ(n log n)",
        "Mejor caso Ω(n), peor caso O(n²), caso promedio Θ(n) (pivote siempre en la mitad)",
        "Mejor caso Ω(log n), peor caso O(n log n), caso promedio Θ(n)",
      ],
      correct: 1,
    },
    {
      concept: "Quickselect",
      conceptIndex: 12,
      question: "¿Qué función de la STL de C++ tiene un comportamiento equivalente a Quickselect?",
      options: [
        "std::sort, que ordena el array y luego devuelve el k-ésimo elemento",
        "std::nth_element, que realiza una ordenación parcial colocando el k-ésimo elemento en su posición correcta",
        "std::find, que busca el primer elemento igual al k-ésimo valor esperado",
      ],
      correct: 1,
    },

    // ── CONCEPTO 13: Exponenciación Rápida ──
    {
      concept: "Exponenciación Rápida (Potencia n-ésima)",
      conceptIndex: 13,
      question: "¿Cuál es la idea clave de la exponenciación rápida para reducir el coste de n-1 multiplicaciones a O(log n)?",
      options: [
        "Usar logaritmos para transformar la exponenciación en multiplicaciones, que son más baratas",
        "Aprovechar que xⁿ = (x^(n/2))² para n par, calculando x^(n/2) una sola vez y reutilizando el resultado",
        "Dividir el exponente n en sus factores primos y combinar las potencias de cada factor",
      ],
      correct: 1,
    },
    {
      concept: "Exponenciación Rápida (Potencia n-ésima)",
      conceptIndex: 13,
      question: "¿Qué ocurriría si en la exponenciación rápida se hicieran dos llamadas recursivas separadas a xⁿ/² en lugar de una?",
      options: [
        "La complejidad mejoraría a Θ(log log n) por el doble de paralelismo en la recursión",
        "Se mantendría en O(log n) porque ambas llamadas resuelven el mismo subproblema",
        "La mejora desaparecería: la recurrencia sería T(n) = 2T(n/2) + Θ(1) → Θ(n), igual que la multiplicación directa",
      ],
      correct: 2,
    },
    {
      concept: "Exponenciación Rápida (Potencia n-ésima)",
      conceptIndex: 13,
      question: "¿Cuántas multiplicaciones aproximadas necesita la exponenciación rápida para calcular x¹⁰²⁴?",
      options: [
        "1023 multiplicaciones, igual que la multiplicación directa",
        "Aproximadamente 10 multiplicaciones, ya que log₂(1024) = 10",
        "Aproximadamente 32 multiplicaciones, ya que √1024 = 32",
      ],
      correct: 1,
    },

    // ── CONCEPTO 14: Comparativa Mergesort vs. Quicksort ──
    {
      concept: "Comparativa: Mergesort vs. Quicksort",
      conceptIndex: 14,
      question: "¿En qué algoritmo está el trabajo principal en la fase de 'dividir' y en cuál en la fase de 'combinar'?",
      options: [
        "En ambos el trabajo está distribuido equitativamente entre dividir y combinar",
        "En Quicksort todo el trabajo está en 'combinar' (merge); en Mergesort en 'dividir' (particionado)",
        "En Quicksort todo el trabajo está en 'dividir' (particionado); en Mergesort en 'combinar' (merge)",
      ],
      correct: 2,
    },
    {
      concept: "Comparativa: Mergesort vs. Quicksort",
      conceptIndex: 14,
      question: "¿Cuál de los dos algoritmos es estable (mantiene el orden relativo de elementos iguales)?",
      options: [
        "Quicksort es estable; Mergesort no lo es en su versión básica",
        "Mergesort es estable; Quicksort no lo es en su versión básica",
        "Ambos son estables por diseño, ya que no intercambian elementos de igual valor",
      ],
      correct: 1,
    },
    {
      concept: "Comparativa: Mergesort vs. Quicksort",
      conceptIndex: 14,
      question: "¿Por qué Quicksort suele ser más rápido que Mergesort en la práctica, aunque ambos sean Θ(n log n) en promedio?",
      options: [
        "Porque Quicksort hace menos comparaciones en total que Mergesort para cualquier entrada",
        "Porque Quicksort tiene mejor localidad de caché al trabajar in-place sobre el array original, reduciendo los fallos de caché",
        "Porque la constante multiplicativa de Mergesort es siempre mayor que la de Quicksort independientemente de los datos",
      ],
      correct: 1,
    },

  ],
});
