window.TEMAS_ADA = window.TEMAS_ADA || [];
window.TEMAS_ADA.push({
  id: "eficiencia",
  nombre: "Eficiencia",
  tema: 2,
  resumenUrl: "resumen_T2_eficiencia.html",
  preguntas: [

    // ── CONCEPTO 1: Complejidad Algorítmica ──
    {
      concept: "Complejidad Algorítmica",
      conceptIndex: 1,
      question: "¿Qué mide exactamente la complejidad algorítmica?",
      options: [
        "El número de líneas de código que contiene el algoritmo",
        "Los recursos (tiempo y/o memoria) que necesita un algoritmo para resolver un problema, expresados en función del tamaño de la entrada",
        "El tiempo en segundos que tarda el algoritmo en ejecutarse en un procesador concreto",
      ],
      correct: 1,
    },
    {
      concept: "Complejidad Algorítmica",
      conceptIndex: 1,
      question: "¿Cuál es la diferencia entre complejidad temporal T(n) y complejidad espacial M(n)?",
      options: [
        "T(n) mide el número de instrucciones del código fuente; M(n) mide el tamaño del ejecutable generado",
        "T(n) mide el número de operaciones elementales que ejecuta el algoritmo; M(n) mide la memoria adicional que consume (sin contar la entrada)",
        "T(n) mide el tiempo en el mejor caso; M(n) mide el tiempo en el peor caso",
      ],
      correct: 1,
    },
    {
      concept: "Complejidad Algorítmica",
      conceptIndex: 1,
      question: "¿Cuál es la finalidad doble del análisis de complejidad algorítmica?",
      options: [
        "Optimizar el código fuente y garantizar su portabilidad entre plataformas",
        "Valorar si un algoritmo es bueno o prohibitivo, y comparar alternativas para un mismo problema",
        "Calcular el tiempo exacto de ejecución y estimar el coste económico del hardware necesario",
      ],
      correct: 1,
    },

    // ── CONCEPTO 2: Modelo RAM ──
    {
      concept: "Modelo de Computación: Máquina RAM",
      conceptIndex: 2,
      question: "¿Para qué se usa el modelo de computación (Máquina RAM) en el análisis de algoritmos?",
      options: [
        "Para ejecutar los algoritmos en un entorno virtualizado y medir su tiempo real de ejecución",
        "Como referencia teórica común que hace que los análisis de complejidad sean comparables entre sí, independientemente del hardware real",
        "Para definir el lenguaje de programación en el que deben implementarse los algoritmos analizados",
      ],
      correct: 1,
    },
    {
      concept: "Modelo de Computación: Máquina RAM",
      conceptIndex: 2,
      question: "¿Qué consecuencia fundamental tiene el modelo RAM sobre el coste de las operaciones elementales?",
      options: [
        "Cada operación elemental tiene un coste proporcional al tamaño de los operandos involucrados",
        "Cada operación elemental (aritmética, asignación, comparación, acceso a array) tarda un tiempo acotado por una constante",
        "El coste de cada operación depende de la posición de memoria donde están almacenados los datos",
      ],
      correct: 1,
    },
    {
      concept: "Modelo de Computación: Máquina RAM",
      conceptIndex: 2,
      question: "¿Por qué está prohibida en el modelo RAM la codificación de enteros en base unaria?",
      options: [
        "Porque la base unaria no permite representar números negativos, limitando los problemas que se pueden analizar",
        "Porque es una codificación no compacta que haría que ciertos algoritmos parecieran artificialmente más eficientes",
        "Porque la base unaria requiere operaciones especiales no contempladas en la arquitectura de Von Neumann",
      ],
      correct: 1,
    },

    // ── CONCEPTO 3: Tamaño del Problema ──
    {
      concept: "Tamaño del Problema (Talla)",
      conceptIndex: 3,
      question: "¿Cómo se define formalmente el tamaño de un problema o instancia?",
      options: [
        "El número de operaciones elementales que ejecuta el algoritmo para resolverlo",
        "El número de bits necesarios para codificar la instancia del problema",
        "El número de variables de entrada que recibe el algoritmo como parámetros",
      ],
      correct: 1,
    },
    {
      concept: "Tamaño del Problema (Talla)",
      conceptIndex: 3,
      question: "La traspuesta de una matriz d×d tiene complejidad O(d²) en función de d. ¿Cuál es su complejidad en función de la talla n (siendo n = d²)?",
      options: [
        "O(n²), porque la complejidad no cambia al cambiar el parámetro de referencia",
        "O(√n · log n), al sustituir d = √n en la expresión logarítmica",
        "O(n), porque O(d²) = O(n) al sustituir d² = n",
      ],
      correct: 2,
    },
    {
      concept: "Tamaño del Problema (Talla)",
      conceptIndex: 3,
      question: "¿Por qué se omite habitualmente el tamaño en bits de los enteros y reales al calcular la talla de un problema?",
      options: [
        "Porque los enteros y reales no ocupan memoria en el modelo RAM",
        "Porque asumimos que su tamaño está acotado por una constante fija en el modelo RAM",
        "Porque su tamaño en bits es siempre igual a 1, simplificando los cálculos",
      ],
      correct: 1,
    },

    // ── CONCEPTO 4: Análisis Empírico vs. Teórico ──
    {
      concept: "Análisis Empírico vs. Análisis Teórico",
      conceptIndex: 4,
      question: "¿Cuál es la principal ventaja del análisis teórico (a priori) frente al empírico (a posteriori)?",
      options: [
        "Proporciona el tiempo real de ejecución del algoritmo en el entorno de producción",
        "Es independiente de factores externos como la máquina, el compilador y los datos de entrada concretos",
        "Es más fácil de realizar porque no requiere implementar ni ejecutar el algoritmo",
      ],
      correct: 1,
    },
    {
      concept: "Análisis Empírico vs. Análisis Teórico",
      conceptIndex: 4,
      question: "¿Cuál es el principal inconveniente del análisis empírico frente al teórico?",
      options: [
        "No permite detectar errores en el código del algoritmo durante la experimentación",
        "Solo puede aplicarse a algoritmos que tengan complejidad polinómica",
        "El resultado depende de factores externos (hardware, compilador, datos) y no es universalmente comparable",
      ],
      correct: 2,
    },
    {
      concept: "Análisis Empírico vs. Análisis Teórico",
      conceptIndex: 4,
      question: "¿Cuál de los dos enfoques utiliza ADA como base del estudio de complejidad?",
      options: [
        "El análisis empírico, porque mide el comportamiento real del algoritmo en el entorno",
        "El análisis teórico, contando operaciones elementales de forma independiente de la máquina",
        "Una combinación de ambos con igual peso para obtener resultados más precisos",
      ],
      correct: 1,
    },

    // ── CONCEPTO 5: Operación Elemental y Paso de Programa ──
    {
      concept: "Operación Elemental y Paso de Programa",
      conceptIndex: 5,
      question: "¿Cuál de las siguientes NO es una operación elemental en el modelo RAM?",
      options: [
        "Una comparación lógica entre dos variables de tipo predefinido",
        "El cálculo de la longitud de una cadena de caracteres de tamaño arbitrario",
        "Un acceso a un elemento de un vector o matriz mediante índice",
      ],
      correct: 1,
    },
    {
      concept: "Operación Elemental y Paso de Programa",
      conceptIndex: 5,
      question: "¿Qué es un 'paso de programa' y para qué sirve?",
      options: [
        "Una instrucción de salto incondicional que transfiere el control a otra parte del programa",
        "Una agrupación de instrucciones cuyo tiempo total es constante respecto al tamaño del problema, que simplifica el recuento de operaciones",
        "Cada iteración individual de un bucle, que se cuenta por separado en el análisis de complejidad",
      ],
      correct: 1,
    },
    {
      concept: "Operación Elemental y Paso de Programa",
      conceptIndex: 5,
      question: "Un bloque de 8 inicializaciones antes de un bucle, ¿cuántos pasos de programa representa?",
      options: [
        "8 pasos, uno por cada inicialización individual",
        "1 paso, porque su tiempo total es constante respecto a n independientemente de cuántas instrucciones haya",
        "0 pasos, porque las inicializaciones no realizan trabajo computacional relevante",
      ],
      correct: 1,
    },

    // ── CONCEPTO 6: Caso Mejor, Peor y Promedio ──
    {
      concept: "Caso Mejor, Caso Peor y Caso Promedio",
      conceptIndex: 6,
      question: "En la búsqueda lineal de un elemento en un vector de n elementos, ¿cuáles son el caso mejor y el caso peor?",
      options: [
        "Caso mejor: elemento en la última posición; caso peor: elemento en la primera posición",
        "Caso mejor: el elemento está en la primera posición (Ci ∈ Ω(1)); caso peor: el elemento no existe o está al final (Cs ∈ O(n))",
        "Caso mejor y caso peor son siempre iguales, ya que el bucle siempre recorre el vector entero",
      ],
      correct: 1,
    },
    {
      concept: "Caso Mejor, Caso Peor y Caso Promedio",
      conceptIndex: 6,
      question: "¿Por qué el caso promedio NO es la media aritmética de la cota superior e inferior?",
      options: [
        "Porque la media aritmética solo se puede calcular cuando ambas cotas son de la misma clase asintótica",
        "Porque el caso promedio es el coste esperado ponderado por la distribución de probabilidad de las entradas, que raramente es uniforme",
        "Porque la media aritmética daría siempre un valor mayor que el caso peor real",
      ],
      correct: 1,
    },
    {
      concept: "Caso Mejor, Caso Peor y Caso Promedio",
      conceptIndex: 6,
      question: "¿Cuándo solo existe un caso (sin mejor ni peor caso) y se usa directamente la notación Θ?",
      options: [
        "Cuando el algoritmo tiene complejidad constante O(1) para todos los tamaños de entrada",
        "Cuando el algoritmo se comporta igual para cualquier entrada del mismo tamaño (p.ej. suma de todos los elementos de un vector)",
        "Cuando el caso mejor y el caso peor difieren en menos de una constante multiplicativa",
      ],
      correct: 1,
    },

    // ── CONCEPTO 7: Análisis Asintótico ──
    {
      concept: "Análisis Asintótico",
      conceptIndex: 7,
      question: "¿Por qué el análisis asintótico es relevante para entradas grandes y no tanto para entradas pequeñas?",
      options: [
        "Porque para entradas pequeñas todos los algoritmos tienen la misma complejidad Θ(1)",
        "Porque para entradas pequeñas las diferencias reales de tiempo entre algoritmos son poco significativas; es para grandes volúmenes donde la eficiencia marca la diferencia",
        "Porque el modelo RAM solo es válido cuando n tiende a infinito",
      ],
      correct: 1,
    },
    {
      concept: "Análisis Asintótico",
      conceptIndex: 7,
      question: "¿Qué permite hacer la notación asintótica con las funciones de complejidad?",
      options: [
        "Calcular el tiempo exacto de ejecución en segundos para cualquier tamaño de entrada",
        "Clasificarlas en clases de equivalencia según su tasa de crecimiento e ignorar constantes y términos de orden inferior",
        "Determinar si un algoritmo es correcto sin necesidad de verificarlo formalmente",
      ],
      correct: 1,
    },
    {
      concept: "Análisis Asintótico",
      conceptIndex: 7,
      question: "¿Qué tres tipos de notación asintótica se definen en ADA?",
      options: [
        "O (cota superior), Ω (cota inferior) y Θ (coste exacto)",
        "O (coste exacto), Ω (cota superior) y Θ (cota inferior)",
        "O (caso peor), Ω (caso promedio) y Θ (caso mejor)",
      ],
      correct: 0,
    },

    // ── CONCEPTO 8: Notación O ──
    {
      concept: "Notación O (Cota Superior Asintótica)",
      conceptIndex: 8,
      question: "¿Qué significa formalmente que g ∈ O(f)?",
      options: [
        "Que g y f crecen exactamente al mismo ritmo para todos los valores de n",
        "Que existen constantes c y n₀ tales que g(n) ≤ c·f(n) para todo n ≥ n₀; g no crece más rápido que f",
        "Que g(n) ≤ f(n) para todos los valores de n sin excepción",
      ],
      correct: 1,
    },
    {
      concept: "Notación O (Cota Superior Asintótica)",
      conceptIndex: 8,
      question: "Si f₁ ∈ O(g₁) y f₂ ∈ O(g₂), ¿a qué clase pertenece f₁ + f₂?",
      options: [
        "O(g₁ · g₂), porque la suma de dos funciones se comporta como su producto",
        "O(g₁ + g₂) = O(max{g₁, g₂}), por la regla del máximo en sumas",
        "O(g₁ + g₂) = O(min{g₁, g₂}), porque la suma está dominada por el término menor",
      ],
      correct: 1,
    },
    {
      concept: "Notación O (Cota Superior Asintótica)",
      conceptIndex: 8,
      question: "Si lím(n→∞) f(n)/g(n) = 0, ¿qué relación existe entre f y g en notación asintótica?",
      options: [
        "f ∈ Θ(g), porque el límite existe y es finito",
        "f ∈ O(g) y g ∉ O(f), porque f crece estrictamente más lento que g",
        "f ∉ O(g) y g ∈ O(f), porque f crece más rápido que g",
      ],
      correct: 1,
    },

    // ── CONCEPTO 9: Notación Ω ──
    {
      concept: "Notación Ω (Cota Inferior Asintótica)",
      conceptIndex: 9,
      question: "¿Qué significa formalmente que g ∈ Ω(f)?",
      options: [
        "Que existen constantes c y n₀ tales que g(n) ≥ c·f(n) para todo n ≥ n₀; g crece al menos tan rápido como f",
        "Que g(n) > f(n) para todos los valores de n sin excepción",
        "Que g y f tienen exactamente el mismo orden de crecimiento asintótico",
      ],
      correct: 0,
    },
    {
      concept: "Notación Ω (Cota Inferior Asintótica)",
      conceptIndex: 9,
      question: "¿Para qué caso de complejidad se usa habitualmente la notación Ω?",
      options: [
        "Para acotar el caso peor, ya que Ω establece un límite máximo al crecimiento",
        "Para acotar el caso mejor, ya que Ω establece un límite inferior al crecimiento",
        "Para acotar el caso promedio, ya que Ω describe el comportamiento esperado",
      ],
      correct: 1,
    },
    {
      concept: "Notación Ω (Cota Inferior Asintótica)",
      conceptIndex: 9,
      question: "Si lím(n→∞) f(n)/g(n) = +∞, ¿qué relación existe entre f y g?",
      options: [
        "f ∈ Θ(g), porque el límite existe aunque sea infinito",
        "f ∈ O(g) y g ∉ O(f), porque f crece más lento",
        "f ∈ Ω(g) y g ∉ Ω(f), porque f crece estrictamente más rápido que g",
      ],
      correct: 2,
    },

    // ── CONCEPTO 10: Notación Θ ──
    {
      concept: "Notación Θ (Coste Exacto Asintótico)",
      conceptIndex: 10,
      question: "¿Cómo se expresa la relación entre Θ(f), O(f) y Ω(f)?",
      options: [
        "Θ(f) = O(f) ∪ Ω(f), es la unión de ambas cotas",
        "Θ(f) = O(f) ∩ Ω(f), es la intersección: acotada tanto por arriba como por abajo por múltiplos de f",
        "Θ(f) ⊂ O(f) ⊂ Ω(f), en ese orden de inclusión",
      ],
      correct: 1,
    },
    {
      concept: "Notación Θ (Coste Exacto Asintótico)",
      conceptIndex: 10,
      question: "¿Son equivalentes asintóticamente los logaritmos en distintas bases? ¿Y las exponenciales?",
      options: [
        "Ambos son equivalentes: Θ(log_a n) = Θ(log_b n) y Θ(2ⁿ) = Θ(3ⁿ) para cualquier a,b > 1",
        "Los logaritmos son equivalentes (difieren en constante multiplicativa), pero las exponenciales NO: Θ(2ⁿ) ≠ Θ(3ⁿ)",
        "Las exponenciales son equivalentes, pero los logaritmos no: Θ(log₂ n) ≠ Θ(log₃ n)",
      ],
      correct: 1,
    },
    {
      concept: "Notación Θ (Coste Exacto Asintótico)",
      conceptIndex: 10,
      question: "¿Cuándo se cumple que f ∈ Θ(g) usando el criterio del límite?",
      options: [
        "Cuando lím(n→∞) f(n)/g(n) = 0 (el límite existe y es cero)",
        "Cuando lím(n→∞) f(n)/g(n) ∈ ℝ⁺ (el límite existe, es finito y positivo)",
        "Cuando lím(n→∞) f(n)/g(n) = +∞ (el límite existe y es infinito)",
      ],
      correct: 1,
    },

    // ── CONCEPTO 11: Jerarquía de Clases ──
    {
      concept: "Jerarquía de Clases de Complejidad",
      conceptIndex: 11,
      question: "¿Cuál es el orden correcto de inclusión de las siguientes clases, de menor a mayor complejidad?",
      options: [
        "O(1) ⊂ O(n) ⊂ O(log n) ⊂ O(n log n) ⊂ O(n²) ⊂ O(2ⁿ)",
        "O(1) ⊂ O(log n) ⊂ O(n) ⊂ O(n log n) ⊂ O(n²) ⊂ O(2ⁿ)",
        "O(log n) ⊂ O(1) ⊂ O(n) ⊂ O(n²) ⊂ O(n log n) ⊂ O(2ⁿ)",
      ],
      correct: 1,
    },
    {
      concept: "Jerarquía de Clases de Complejidad",
      conceptIndex: 11,
      question: "¿Qué complejidad se considera 'prohibitiva' en la práctica y por qué?",
      options: [
        "O(n log n), porque crece más rápido que la lineal para grandes valores de n",
        "O(n²), porque supera la complejidad lineal para cualquier entrada mayor de n = 100",
        "Las exponenciales y superexponenciales (O(2ⁿ), O(n!), O(nⁿ)), porque crecen demasiado rápido para entradas moderadas",
      ],
      correct: 2,
    },
    {
      concept: "Jerarquía de Clases de Complejidad",
      conceptIndex: 11,
      question: "¿A qué clase de complejidad pertenece la búsqueda binaria?",
      options: [
        "O(1), ya que siempre accede directamente al elemento buscado mediante su índice",
        "O(log n), ya que en cada paso descarta la mitad del espacio de búsqueda",
        "O(n), ya que en el peor caso recorre todos los elementos del array",
      ],
      correct: 1,
    },

    // ── CONCEPTO 12: Cálculo en Iterativos ──
    {
      concept: "Cálculo de Complejidad en Algoritmos Iterativos",
      conceptIndex: 12,
      question: "¿Cuál es la complejidad de dos bucles anidados, cada uno de n iteraciones, con un cuerpo de coste Θ(1)?",
      options: [
        "Θ(n), porque la complejidad total es la suma de las iteraciones de ambos bucles",
        "Θ(n log n), porque el bucle interior se ejecuta un número logarítmico de veces en cada iteración del exterior",
        "Θ(n²), porque el cuerpo se ejecuta n×n = n² veces en total",
      ],
      correct: 2,
    },
    {
      concept: "Cálculo de Complejidad en Algoritmos Iterativos",
      conceptIndex: 12,
      question: "Para el ejemplo T(n) = 1 + (n+1) + n + 1 = 3n+3 (suma de vector), ¿cuál es su clase asintótica exacta?",
      options: [
        "Θ(3n), porque el coeficiente 3 es parte de la complejidad real",
        "Θ(n²), porque la suma de los términos 3n+3 crece cuadráticamente",
        "Θ(n), porque 3n+3 está acotado por arriba y por abajo por múltiplos de n para n suficientemente grande",
      ],
      correct: 2,
    },
    {
      concept: "Cálculo de Complejidad en Algoritmos Iterativos",
      conceptIndex: 12,
      question: "¿Qué regla permite simplificar la complejidad de una suma de bloques como Θ(1) + Θ(n) + Θ(n²)?",
      options: [
        "Se suman las tres complejidades para obtener Θ(n² + n + 1)",
        "Domina el término de mayor orden: Θ(max{1, n, n²}) = Θ(n²)",
        "Se multiplican las tres complejidades para obtener Θ(n³)",
      ],
      correct: 1,
    },

    // ── CONCEPTO 13: Relaciones de Recurrencia ──
    {
      concept: "Relaciones de Recurrencia",
      conceptIndex: 13,
      question: "¿Para qué tipo de algoritmos se usan las relaciones de recurrencia en el análisis de complejidad?",
      options: [
        "Para algoritmos iterativos con múltiples bucles anidados de profundidad variable",
        "Para algoritmos recursivos, cuyo coste T(n) depende del coste de resolver subproblemas de menor tamaño",
        "Exclusivamente para algoritmos de tipo Divide y Vencerás con exactamente dos llamadas recursivas",
      ],
      correct: 1,
    },
    {
      concept: "Relaciones de Recurrencia",
      conceptIndex: 13,
      question: "¿Cuál es la relación de recurrencia y la complejidad resultante de la búsqueda binaria recursiva?",
      options: [
        "T(n) = 2T(n/2) + Θ(1) → T(n) ∈ Θ(n)",
        "T(n) = T(n/2) + Θ(1) → T(n) ∈ Θ(log n)",
        "T(n) = T(n-1) + Θ(1) → T(n) ∈ Θ(n)",
      ],
      correct: 1,
    },
    {
      concept: "Relaciones de Recurrencia",
      conceptIndex: 13,
      question: "En la recurrencia T(n) = a·T(F(n)) + P(n), ¿qué representa P(n)?",
      options: [
        "El tamaño del subproblema generado por las llamadas recursivas",
        "El número de llamadas recursivas que realiza el algoritmo por nivel",
        "El coste del trabajo extra distinto de las llamadas recursivas (dividir y combinar)",
      ],
      correct: 2,
    },

    // ── CONCEPTO 14: Método de Sustitución ──
    {
      concept: "Método de Sustitución",
      conceptIndex: 14,
      question: "¿En qué consiste el método de sustitución para resolver recurrencias?",
      options: [
        "Sustituir la recurrencia por una función cerrada conocida y verificar que satisface la ecuación",
        "Expandir la recurrencia k veces aplicando su propia definición, observar el patrón y obtener el término general cuando se alcanza el caso base",
        "Sustituir los parámetros de la recurrencia por valores concretos y calcular el resultado numéricamente",
      ],
      correct: 1,
    },
    {
      concept: "Método de Sustitución",
      conceptIndex: 14,
      question: "Resolviendo T(n) = n + T(n-1) con T(1) = 1 por sustitución, ¿cuál es el resultado?",
      options: [
        "T(n) = n·T(1) = n ∈ Θ(n)",
        "T(n) = Σⱼ₌₁ⁿ j = n(n+1)/2 ∈ Θ(n²)",
        "T(n) = 2ⁿ - 1 ∈ Θ(2ⁿ)",
      ],
      correct: 1,
    },
    {
      concept: "Método de Sustitución",
      conceptIndex: 14,
      question: "¿A qué tipo de recurrencias se aplica directamente el método de sustitución?",
      options: [
        "A recurrencias con múltiples llamadas recursivas, como T(n) = 2T(n/2) + n",
        "Solo a recurrencias lineales con una única llamada recursiva a sí misma",
        "Solo a recurrencias cuyo caso base tiene complejidad Θ(1)",
      ],
      correct: 1,
    },

    // ── CONCEPTO 15: Quicksort ──
    {
      concept: "Quicksort",
      conceptIndex: 15,
      question: "¿Cuál es el mejor caso de Quicksort y qué complejidad produce?",
      options: [
        "Cuando el array ya está ordenado; produce Θ(n) ya que no hay que realizar intercambios",
        "Cuando el pivote siempre es el elemento mediana, generando subproblemas de tamaño n/2; produce Ω(n log n)",
        "Cuando todos los elementos son iguales; produce Θ(1) porque no hay que comparar nada",
      ],
      correct: 1,
    },
    {
      concept: "Quicksort",
      conceptIndex: 15,
      question: "¿Cuándo se produce el peor caso de Quicksort usando el primer elemento como pivote?",
      options: [
        "Cuando el array tiene exactamente n/2 elementos repetidos",
        "Cuando el array ya está ordenado (ascendente o descendente), porque el pivote siempre cae en un extremo",
        "Cuando todos los elementos son distintos y se distribuyen aleatoriamente",
      ],
      correct: 1,
    },
    {
      concept: "Quicksort",
      conceptIndex: 15,
      question: "¿Qué ventaja ofrece Quicksort mediana frente a Quicksort primer elemento?",
      options: [
        "Reduce la complejidad espacial de O(n) a O(1) al no necesitar memoria auxiliar",
        "Garantiza complejidad Θ(n log n) en todos los casos forzando siempre el mejor caso",
        "Elimina la necesidad de la fase de particionado, reduciendo el número de comparaciones",
      ],
      correct: 1,
    },

    // ── CONCEPTO 16: Montículo (Heap) ──
    {
      concept: "Montículo (Heap)",
      conceptIndex: 16,
      question: "¿Qué dos propiedades debe cumplir un árbol binario para ser un montículo máximo (max-heap)?",
      options: [
        "Ser un árbol binario de búsqueda (BST) y tener todos los niveles completamente llenos",
        "Ser esencialmente completo (EC) y que todo nodo sea mayor o igual que sus dos hijos",
        "Tener altura mínima y que el nodo raíz contenga el valor mínimo del conjunto",
      ],
      correct: 1,
    },
    {
      concept: "Montículo (Heap)",
      conceptIndex: 16,
      question: "Para un nodo en la posición i de un vector que representa un heap, ¿cuáles son las posiciones de sus hijos y su padre?",
      options: [
        "Hijo izq. = i-1, hijo der. = i+1, padre = 2i",
        "Hijo izq. = 2i+1, hijo der. = 2i+2, padre = (i-1)/2",
        "Hijo izq. = 2i, hijo der. = 2i+1, padre = i/2",
      ],
      correct: 1,
    },
    {
      concept: "Montículo (Heap)",
      conceptIndex: 16,
      question: "¿Por qué la construcción de un heap mediante Heapification (hundir nodos) es Θ(n) y no O(n log n)?",
      options: [
        "Porque no todos los nodos necesitan hundirse la misma cantidad; los nodos hoja no se hunden y los nodos altos se hunden muy poco, resultando en una suma que converge a O(n)",
        "Porque el algoritmo de hundimiento tiene complejidad O(1) y se aplica n veces",
        "Porque en un array ya ordenado ningún nodo necesita hundirse, dando complejidad Θ(1)",
      ],
      correct: 0,
    },

    // ── CONCEPTO 17: Heapsort ──
    {
      concept: "Heapsort",
      conceptIndex: 17,
      question: "¿Cuáles son las dos fases de Heapsort y cuál es la complejidad de cada una?",
      options: [
        "Fase 1 (ordenación): O(n log n); Fase 2 (construcción del heap): Θ(n)",
        "Fase 1 (construcción del heap): Θ(n); Fase 2 (ordenación mediante extracciones): O(n log n)",
        "Ambas fases tienen complejidad O(n log n), sumando O(n log n) en total",
      ],
      correct: 1,
    },
    {
      concept: "Heapsort",
      conceptIndex: 17,
      question: "¿Cuál es la complejidad espacial de Heapsort y qué lo diferencia de Mergesort en este aspecto?",
      options: [
        "Heapsort tiene complejidad espacial Θ(n) igual que Mergesort, ya que ambos necesitan arrays auxiliares",
        "Heapsort tiene complejidad espacial Θ(1) (ordena in-place sin memoria adicional), frente a Θ(n) de Mergesort",
        "Heapsort tiene complejidad espacial O(log n) por la pila de recursión, frente a O(1) de Mergesort",
      ],
      correct: 1,
    },
    {
      concept: "Heapsort",
      conceptIndex: 17,
      question: "¿Cuál es la principal ventaja de Heapsort frente a Quicksort en términos de complejidad?",
      options: [
        "Heapsort es más rápido en la práctica para datos aleatorios gracias a su mejor localidad de caché",
        "Heapsort garantiza O(n log n) en el peor caso, mientras que Quicksort puede degenerar a O(n²)",
        "Heapsort requiere menos comparaciones que Quicksort para cualquier entrada",
      ],
      correct: 1,
    },

  ],
});
