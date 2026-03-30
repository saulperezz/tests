window.TEMAS_ADA = window.TEMAS_ADA || [];
window.TEMAS_ADA.push({
  id: "pd",
  nombre: "Programación Dinámica",
  tema: 4,
  resumenUrl: "resumen_pd.html",
  preguntas: [
    // ── CONCEPTO 1: Programación Dinámica ──
    {
      concept: "Programación Dinámica",
      conceptIndex: 1,
      question: "¿Cuál es la característica fundamental que distingue a la Programación Dinámica de la solución recursiva ingenua?",
      options: [
        "Dividir el problema en subproblemas independientes y combinar sus soluciones",
        "Guardar las soluciones de subproblemas ya resueltos para no recalcularlos",
        "Explorar todas las posibles soluciones y quedarse con la mejor mediante fuerza bruta",
      ],
      correct: 1,
    },
    {
      concept: "Programación Dinámica",
      conceptIndex: 1,
      question: "Coloquialmente, al transformar una solución recursiva (PD) en iterativa, se dice que…",
      options: [
        "Se sustituyen los paréntesis (llamadas recursivas) por corchetes (accesos al almacén)",
        "Se sustituyen los bucles por llamadas recursivas con valor de retorno acumulado",
        "Se eliminan las condiciones base y se reemplazan por casos vacíos en la tabla",
      ],
      correct: 0,
    },
    {
      concept: "Programación Dinámica",
      conceptIndex: 1,
      question: "La Programación Dinámica transforma habitualmente una complejidad exponencial en…",
      options: [
        "Logarítmica, gracias al uso de estructuras de datos eficientes",
        "Lineal, ya que cada subproblema se resuelve exactamente una vez",
        "Polinómica, evitando el recálculo innecesario de subproblemas",
      ],
      correct: 2,
    },

    // ── CONCEPTO 2: Subproblemas Superpuestos ──
    {
      concept: "Subproblemas Superpuestos",
      conceptIndex: 2,
      question: "¿Qué diferencia los subproblemas superpuestos (PD) de los subproblemas en Divide y Vencerás?",
      options: [
        "En PD los mismos subproblemas se repiten en distintas ramas del árbol de recursión; en DyV los subproblemas son disjuntos",
        "En PD los subproblemas son siempre del mismo tamaño; en DyV los tamaños son distintos",
        "En PD los subproblemas no pueden combinarse entre sí; en DyV siempre existe una función de combinación",
      ],
      correct: 0,
    },
    {
      concept: "Subproblemas Superpuestos",
      conceptIndex: 2,
      question: "En la mochila 0/1 con n objetos y capacidad W (pesos discretos), ¿cuántos subproblemas distintos existen?",
      options: [
        "2ⁿ, que es precisamente por eso que la solución naive es exponencial",
        "n + W, uno por cada objeto más uno por cada unidad de capacidad",
        "nW, indexados por el número de objetos considerados y la capacidad restante",
      ],
      correct: 2,
    },
    {
      concept: "Subproblemas Superpuestos",
      conceptIndex: 2,
      question: "¿Cuál es la causa directa de la complejidad exponencial de la solución recursiva naive en problemas con subproblemas superpuestos?",
      options: [
        "El exceso de parámetros en la función recursiva, que multiplica el coste de cada llamada",
        "La resolución repetida de los mismos subproblemas en distintas ramas del árbol de llamadas",
        "La profundidad excesiva del árbol de recursión, que desborda la pila del sistema",
      ],
      correct: 1,
    },

    // ── CONCEPTO 3: Subestructura Óptima ──
    {
      concept: "Subestructura Óptima",
      conceptIndex: 3,
      question: "¿Qué afirma la propiedad de subestructura óptima (Principio de Optimalidad)?",
      options: [
        "El problema puede dividirse en subproblemas de igual tamaño, cada uno con solución trivial",
        "Una solución óptima del problema puede construirse eficientemente a partir de las soluciones óptimas de sus subproblemas",
        "La solución óptima siempre se obtiene seleccionando el elemento de mayor valor en cada paso (estrategia voraz)",
      ],
      correct: 1,
    },
    {
      concept: "Subestructura Óptima",
      conceptIndex: 3,
      question: "¿Cómo se denomina el tipo de demostración más habitual para probar la subestructura óptima?",
      options: [
        '"Proof by induction": demostración inductiva sobre el tamaño del problema',
        '"Divide and conquer": reducción al absurdo dividiendo el problema en mitades',
        '"Cut and paste": si hubiese una subsolucion mejor, se podría insertar en la solución global para mejorarla, contradiciendo su optimalidad',
      ],
      correct: 2,
    },
    {
      concept: "Subestructura Óptima",
      conceptIndex: 3,
      question: "La subestructura óptima es condición necesaria para aplicar PD. ¿Es también condición suficiente?",
      options: [
        "Sí, si un problema tiene subestructura óptima siempre se puede aplicar PD con complejidad polinómica",
        "Sí, y además garantiza que la solución PD resultante tendrá complejidad temporal lineal",
        "No; también se requiere que existan subproblemas superpuestos para que PD sea beneficiosa",
      ],
      correct: 2,
    },

    // ── CONCEPTO 4: Memoización ──
    {
      concept: "Memoización",
      conceptIndex: 4,
      question: "¿Qué tipo de recorrido caracteriza a la memoización frente a la PD iterativa?",
      options: [
        "Top-down (descendente): parte del problema original y desciende hacia los subproblemas más pequeños",
        "Bottom-up (ascendente): resuelve primero los subproblemas más pequeños y construye hacia arriba",
        "Level-order: resuelve los subproblemas en orden de profundidad creciente del árbol de recursión",
      ],
      correct: 0,
    },
    {
      concept: "Memoización",
      conceptIndex: 4,
      question: "¿Cuál es la ventaja principal de la memoización frente a la PD iterativa en ciertos problemas?",
      options: [
        "Siempre tiene menor complejidad espacial que la versión iterativa, independientemente del problema",
        "Solo resuelve los subproblemas que son realmente necesarios para calcular la solución",
        "Garantiza siempre una complejidad temporal asintóticamente menor que la versión iterativa",
      ],
      correct: 1,
    },
    {
      concept: "Memoización",
      conceptIndex: 4,
      question: "¿Cuál de los siguientes elementos es imprescindible en la implementación de la memoización?",
      options: [
        "Un contador de llamadas recursivas para limitar la profundidad máxima del árbol",
        "Una función de combinación explícita que mezcle los resultados de todos los subproblemas",
        "Un valor centinela que permita distinguir si un subproblema ya ha sido resuelto o no",
      ],
      correct: 2,
    },

    // ── CONCEPTO 5: Almacén de Resultados Parciales ──
    {
      concept: "Almacén de Resultados Parciales",
      conceptIndex: 5,
      question: "En la mochila 0/1, ¿qué representa la celda M[i][j] del almacén?",
      options: [
        "El peso total de los primeros i objetos que caben con capacidad máxima j",
        "El número de objetos seleccionados de entre los primeros i con capacidad máxima j",
        "La ganancia máxima obtenible usando los primeros i objetos con capacidad máxima j",
      ],
      correct: 2,
    },
    {
      concept: "Almacén de Resultados Parciales",
      conceptIndex: 5,
      question: "¿A qué corresponde el 'contorno' o 'perfil' de la tabla en PD?",
      options: [
        "A los casos base del problema, que inicializan las fronteras de la tabla antes del recorrido principal",
        "A las celdas que contienen el valor óptimo global, distribuido por toda la tabla",
        "A las celdas que no han sido calculadas en la versión recursiva por ser innecesarias",
      ],
      correct: 0,
    },
    {
      concept: "Almacén de Resultados Parciales",
      conceptIndex: 5,
      question: "En la versión recursiva con memoización de la mochila, ¿qué significa que aproximadamente el 60% de las celdas no hayan sido calculadas?",
      options: [
        "Un error en la inicialización del almacén que deja subproblemas sin resolver",
        "Que la capacidad j es siempre mayor que el peso máximo de los objetos restantes en esos casos",
        "Un ahorro computacional: esos subproblemas no eran necesarios para obtener la solución óptima",
      ],
      correct: 2,
    },

    // ── CONCEPTO 6: PD Recursiva vs PD Iterativa ──
    {
      concept: "PD Recursiva vs. PD Iterativa",
      conceptIndex: 6,
      question: "¿En qué situación la versión recursiva con memoización puede ser más eficiente que la iterativa?",
      options: [
        "Cuando la complejidad espacial de la tabla es Θ(1) y no se necesita almacén",
        "Cuando el problema tiene una única solución óptima sin empates entre alternativas",
        "Cuando solo una fracción de los subproblemas es necesaria para resolver el problema original",
      ],
      correct: 2,
    },
    {
      concept: "PD Recursiva vs. PD Iterativa",
      conceptIndex: 6,
      question: "¿Cuál es el principal inconveniente de la versión iterativa (bottom-up) frente a la recursiva con memoización?",
      options: [
        "No puede aprovechar la subestructura óptima del problema, limitando su aplicabilidad",
        "Debe resolver todos los subproblemas aunque algunos no sean necesarios para la solución final",
        "Siempre tiene mayor complejidad temporal asintótica que la versión recursiva con memoización",
      ],
      correct: 1,
    },
    {
      concept: "PD Recursiva vs. PD Iterativa",
      conceptIndex: 6,
      question: "¿En cuál de las dos versiones es más fácil reducir la complejidad espacial del almacén?",
      options: [
        "En la versión iterativa, ya que se controla el orden de relleno y se pueden descartar filas ya no necesarias",
        "En la versión recursiva, ya que el almacén solo contiene los subproblemas que han sido calculados",
        "Ambas versiones permiten reducir la complejidad espacial con igual facilidad",
      ],
      correct: 0,
    },

    // ── CONCEPTO 7: Recorrido Ascendente ──
    {
      concept: "Recorrido Ascendente (Bottom-Up)",
      conceptIndex: 7,
      question: "¿Qué condición debe cumplir la enumeración de subproblemas en la PD iterativa?",
      options: [
        "Todo subproblema del que depende p debe estar resuelto antes que p, siendo el problema original el último",
        "Los subproblemas deben resolverse en orden decreciente de tamaño, de mayor a menor",
        "Los subproblemas pueden resolverse en cualquier orden, ya que el almacén garantiza la corrección",
      ],
      correct: 0,
    },
    {
      concept: "Recorrido Ascendente (Bottom-Up)",
      conceptIndex: 7,
      question: "En la mochila 0/1 iterativa, ¿cuál es el orden correcto de los bucles anidados?",
      options: [
        "Bucle exterior sobre la capacidad (de W a 1) y bucle interior sobre los objetos (de n a 1) en orden decreciente",
        "Un único bucle que recorre simultáneamente objetos y capacidades siguiendo la diagonal de la tabla",
        "Bucle exterior sobre los objetos (de 1 a n) y bucle interior sobre la capacidad (de 1 a W)",
      ],
      correct: 2,
    },
    {
      concept: "Recorrido Ascendente (Bottom-Up)",
      conceptIndex: 7,
      question: "¿Qué garantiza el recorrido bottom-up en relación con la subestructura óptima?",
      options: [
        "Que cuando se calcula M[i][j], las soluciones de todos los subproblemas de los que depende ya están almacenadas",
        "Que el recorrido es totalmente independiente de la subestructura óptima del problema",
        "Que el recorrido solo es válido cuando todos los subproblemas tienen exactamente el mismo tamaño",
      ],
      correct: 0,
    },

    // ── CONCEPTO 8: Extracción de la Solución Óptima ──
    {
      concept: "Extracción de la Solución Óptima",
      conceptIndex: 8,
      question: "¿Con qué complejidad temporal se extrae la secuencia de decisiones óptimas de la tabla en la mochila 0/1?",
      options: [
        "Θ(nW), recorriendo toda la tabla de nuevo desde el principio",
        "Θ(W), recorriendo únicamente la última fila de la tabla de izquierda a derecha",
        "Θ(n), recorriendo la tabla de forma descendente desde M[n][W] hasta el caso base",
      ],
      correct: 2,
    },
    {
      concept: "Extracción de la Solución Óptima",
      conceptIndex: 8,
      question: "¿Qué ocurre si se ha reducido la complejidad espacial del almacén (p.ej., usando solo dos filas) y luego se intenta extraer la solución?",
      options: [
        "La extracción es posible pero requiere una complejidad temporal mayor, Θ(n²), para reconstruir los pasos",
        "No es posible extraer las decisiones óptimas porque se ha perdido la información de filas anteriores",
        "Se puede extraer igualmente reconstruyendo las filas eliminadas a partir de la función de transición",
      ],
      correct: 1,
    },
    {
      concept: "Extracción de la Solución Óptima",
      conceptIndex: 8,
      question: "Durante la extracción de la solución en la mochila 0/1, ¿qué significa que ambas alternativas (tomar y rechazar el objeto) produzcan el mismo valor óptimo?",
      options: [
        "Indica un error en la construcción de la tabla, ya que no debería haber empates en el valor óptimo",
        "Significa que el objeto en cuestión no afecta al valor óptimo y debe rechazarse siempre",
        "Existen varias secuencias de decisiones distintas que producen el mismo valor óptimo; se puede elegir cualquiera",
      ],
      correct: 2,
    },

    // ── CONCEPTO 9: Complejidad Temporal ──
    {
      concept: "Complejidad Temporal de PD",
      conceptIndex: 9,
      question: "¿Por qué la complejidad Θ(nW) de la mochila 0/1 se considera 'pseudopolinómica'?",
      options: [
        "Porque solo es válida cuando los pesos son números enteros estrictamente menores que n",
        "Porque la complejidad real incluye un factor logarítmico oculto en la representación binaria de los pesos",
        "Porque depende del valor numérico de W, no del número de bits necesarios para representarlo como entrada",
      ],
      correct: 2,
    },
    {
      concept: "Complejidad Temporal de PD",
      conceptIndex: 9,
      question: "¿Cuál es la complejidad temporal de la solución PD (memoización o iterativa) del problema del corte de tubos?",
      options: [
        "O(2ⁿ), igual que la solución recursiva naive ya que los subproblemas son los mismos",
        "O(n log n), gracias al recorrido ascendente que aprovecha el orden de los subproblemas",
        "O(n²), porque cada subproblema M[l] requiere un bucle de longitud l para calcular el máximo",
      ],
      correct: 2,
    },
    {
      concept: "Complejidad Temporal de PD",
      conceptIndex: 9,
      question: "¿Cuál es la complejidad temporal de la solución PD del coeficiente binomial C(n, r)?",
      options: [
        "Θ(n²), independientemente del valor de r",
        "Θ(rn), resolviendo cada subproblema (i, j) exactamente una vez",
        "Θ(2ⁿ), debido al árbol binario de llamadas derivado de la identidad de Pascal",
      ],
      correct: 1,
    },

    // ── CONCEPTO 10: Complejidad Espacial ──
    {
      concept: "Complejidad Espacial y su Reducción",
      conceptIndex: 10,
      question: "En la mochila 0/1, si se reduce el almacén a Θ(W) usando dos vectores alternados, ¿qué capacidad se pierde?",
      options: [
        "La capacidad de obtener el valor óptimo global, que ya no puede calcularse correctamente",
        "La capacidad de extraer la secuencia de decisiones óptimas, pues se pierde información de filas anteriores",
        "La capacidad de reducir aún más la complejidad espacial a Θ(1) en problemas simples",
      ],
      correct: 1,
    },
    {
      concept: "Complejidad Espacial y su Reducción",
      conceptIndex: 10,
      question: "¿Cómo se logra reducir la complejidad espacial de Θ(nW) a Θ(W) en la mochila 0/1 iterativa?",
      options: [
        "Usando un único vector actualizado en orden inverso de capacidad (de W a 0) para evitar usar valores de la fila actual",
        "Eliminando las columnas cuya capacidad j supere el peso máximo del objeto que se está procesando",
        "Usando dos vectores alternados (swap), ya que para calcular la fila n solo se necesita la fila n-1",
      ],
      correct: 2,
    },
    {
      concept: "Complejidad Espacial y su Reducción",
      conceptIndex: 10,
      question: "¿Por qué NO se puede reducir la complejidad espacial en el problema del corte de tubos?",
      options: [
        "Porque los precios de los tubos pueden ser negativos y el almacén debe conservarlos todos",
        "Porque la tabla es unidimensional y O(n) ya es el mínimo posible para este problema",
        "Porque cada subproblema M[l] depende de todos los subproblemas anteriores M[l-i] (i=1..l), no solo del inmediatamente anterior",
      ],
      correct: 2,
    },

    // ── CONCEPTO 11: Mochila 0/1 ──
    {
      concept: "Problema de la Mochila 0/1",
      conceptIndex: 11,
      question: "¿Cuál es la diferencia principal entre la mochila 0/1 y la mochila fraccionaria (continua)?",
      options: [
        "En la 0/1 cada objeto tiene un peso fijo de 1 unidad; en la fraccionaria los pesos son reales arbitrarios",
        "En la 0/1 los objetos no se pueden fraccionar, lo que la hace mucho más difícil que la fraccionaria",
        "En la 0/1 solo se puede incluir un objeto por tipo; en la fraccionaria se pueden incluir múltiples copias del mismo",
      ],
      correct: 1,
    },
    {
      concept: "Problema de la Mochila 0/1",
      conceptIndex: 11,
      question: "¿Por qué la mochila 0/1 con pesos continuos (no discretizables) no puede resolverse eficientemente con PD?",
      options: [
        "Porque no cumple la subestructura óptima cuando los pesos son valores reales continuos",
        "Porque los pesos continuos no pueden usarse como índices del almacén, que requiere dimensiones discretas finitas",
        "Porque el número de objetos distintos sería infinito y el almacén no podría representarlos",
      ],
      correct: 1,
    },
    {
      concept: "Problema de la Mochila 0/1",
      conceptIndex: 11,
      question: "En la formalización de la mochila 0/1, ¿qué representa xᵢ = 1 en la secuencia de decisiones (x₁, x₂, ..., xₙ)?",
      options: [
        "Que el objeto i ocupa exactamente 1 unidad de capacidad en la mochila",
        "Que el objeto i tiene un valor vᵢ igual a 1 unidad monetaria",
        "Que el objeto i es seleccionado para incluirse en la mochila",
      ],
      correct: 2,
    },

    // ── CONCEPTO 12: Corte de Tubos ──
    {
      concept: "Problema del Corte de Tubos",
      conceptIndex: 12,
      question: "¿Por qué la búsqueda exhaustiva en el corte de tubos tiene complejidad exponencial?",
      options: [
        "Porque hay n! formas posibles de ordenar los cortes del tubo de longitud n",
        "Porque hay 2^(n-1) formas posibles de decidir si cortar o no en cada punto entre unidades del tubo",
        "Porque hay n² combinaciones distintas de longitudes de corte para un tubo de longitud n",
      ],
      correct: 1,
    },
    {
      concept: "Problema del Corte de Tubos",
      conceptIndex: 12,
      question: "En la recurrencia rₙ = max_{1≤i≤n}(pᵢ + rₙ₋ᵢ), ¿qué representa el término rₙ₋ᵢ?",
      options: [
        "El precio de venta directo del trozo de longitud n-i sin realizar ningún corte adicional",
        "El número de cortes necesarios para maximizar la ganancia del trozo restante de longitud n-i",
        "La ganancia máxima del trozo restante de longitud n-i, suponiendo que se corta de forma óptima",
      ],
      correct: 2,
    },
    {
      concept: "Problema del Corte de Tubos",
      conceptIndex: 12,
      question: "¿Cuál es la complejidad espacial de la solución PD del corte de tubos?",
      options: [
        "O(n²), necesitando una matriz para almacenar todas las combinaciones posibles de cortes",
        "O(n), usando un vector unidimensional M[0..n] donde M[l] es la ganancia máxima para longitud l",
        "O(2ⁿ), proporcional al número de formas distintas de cortar el tubo",
      ],
      correct: 1,
    },

    // ── CONCEPTO 13: Coeficiente Binomial ──
    {
      concept: "Coeficiente Binomial (Identidad de Pascal)",
      conceptIndex: 13,
      question: "¿Cuáles son los casos base de la Identidad de Pascal para C(n, r)?",
      options: [
        "C(n, 1) = n y C(n, n-1) = n para todo n ∈ ℕ",
        "C(0, 0) = 0 y C(1, 1) = 1, como punto de partida de la recursión",
        "C(n, 0) = 1 y C(n, n) = 1 para todo n ∈ ℕ",
      ],
      correct: 2,
    },
    {
      concept: "Coeficiente Binomial (Identidad de Pascal)",
      conceptIndex: 13,
      question: "¿En qué orden se rellenan los subproblemas en la solución iterativa del coeficiente binomial C(n, r)?",
      options: [
        "Por filas de arriba a abajo (i de 1 a n), y dentro de cada fila de izquierda a derecha (j de 1 a r)",
        "En orden diagonal, calculando simultáneamente todas las celdas con igual valor de n-r",
        "Por columnas de izquierda a derecha (j de 1 a r), y dentro de cada columna de arriba a abajo",
      ],
      correct: 2,
    },
    {
      concept: "Coeficiente Binomial (Identidad de Pascal)",
      conceptIndex: 13,
      question: "¿Cuál es la complejidad espacial de la solución PD trivial del coeficiente binomial C(n, r)?",
      options: [
        "Θ(r), ya que en cada paso solo se necesita almacenar la última fila calculada de la tabla de Pascal",
        "Θ(n²), ya que la tabla de Pascal es siempre cuadrada independientemente de r",
        "Θ(rn), aunque es mejorable hasta O(min(r, n-r)) utilizando uno o dos vectores",
      ],
      correct: 2,
    },

    // ── CONCEPTO 14: Solución Naive ──
    {
      concept: "Solución Ingenua (Naive)",
      conceptIndex: 14,
      question: "¿Cuál es la causa principal de la ineficiencia de la solución recursiva naive?",
      options: [
        "El uso excesivo de memoria de la pila por las llamadas recursivas anidadas",
        "La imposibilidad de determinar el caso base del problema en tiempo polinómico",
        "La resolución repetida de los mismos subproblemas en distintas ramas del árbol de llamadas",
      ],
      correct: 2,
    },
    {
      concept: "Solución Ingenua (Naive)",
      conceptIndex: 14,
      question: "¿Es la recursividad en sí misma la causa de la ineficiencia en las soluciones naive?",
      options: [
        "Sí; cualquier solución recursiva es inherentemente menos eficiente que su equivalente iterativa",
        "Sí; la recursividad impide que el compilador aplique optimizaciones que reducirían la complejidad real",
        "No; la ineficiencia se debe a la repetición de cálculos de subproblemas, no a la recursividad per se",
      ],
      correct: 2,
    },
    {
      concept: "Solución Ingenua (Naive)",
      conceptIndex: 14,
      question: "La solución naive de la mochila 0/1 tiene complejidad O(2ⁿ). ¿Cuántos subproblemas distintos existen realmente?",
      options: [
        "2ⁿ, lo que confirma que la solución naive no repite ningún cálculo y es inherentemente exponencial",
        "n, ya que cada objeto se evalúa exactamente una vez en el camino hacia la decisión óptima",
        "nW, lo que demuestra que la solución naive resuelve los mismos subproblemas una y otra vez",
      ],
      correct: 2,
    },

    // ── CONCEPTO 15: Valor Centinela ──
    {
      concept: "Valor Centinela",
      conceptIndex: 15,
      question: "¿Qué propiedad fundamental debe tener el valor centinela en un almacén de memoización?",
      options: [
        "Debe ser el valor neutro de la operación de combinación (p.ej. 0 para sumas, 1 para productos)",
        "Debe ser el valor más grande representable por el tipo de dato utilizado en el almacén",
        "Debe ser un valor que no pueda ser resultado válido de ningún subproblema del problema",
      ],
      correct: 2,
    },
    {
      concept: "Valor Centinela",
      conceptIndex: 15,
      question: "¿Por qué no se puede usar -1.0 como centinela en un problema donde las ganancias pueden ser negativas?",
      options: [
        "Porque los tipos de dato de coma flotante no permiten distinguir -1.0 de otros valores negativos con precisión",
        "Porque -1.0 podría ser un valor válido de la solución y el algoritmo no distinguiría entre 'calculado' y 'sin calcular'",
        "Porque el compilador optimiza automáticamente los valores -1.0 y puede producir resultados incorrectos",
      ],
      correct: 1,
    },
    {
      concept: "Valor Centinela",
      conceptIndex: 15,
      question: "En la implementación de memoización del coeficiente binomial, ¿por qué es seguro usar 0 como centinela si C(n,0) = 1?",
      options: [
        "Porque la inicialización a 0 es la más eficiente en C++ al usar vectores con inicialización por defecto",
        "Porque el valor 0 es el elemento neutro de la suma y simplifica los cálculos intermedios",
        "Porque C(n, r) ≥ 1 para todo n ≥ r ≥ 0, por lo que 0 nunca puede ser un resultado válido",
      ],
      correct: 2,
    },

    // ── CONCEPTO 16: Esquema General / Identificación ──
    {
      concept: "Esquema de Identificación de PD",
      conceptIndex: 16,
      question: "¿Cuál es el primer paso del esquema de identificación para determinar si PD es aplicable a un problema?",
      options: [
        "Construir directamente la tabla iterativa bottom-up con el orden de recorrido ascendente",
        "Verificar si el problema cumple la subestructura óptima antes de plantear ninguna solución",
        "Diseñar una solución recursiva (top-down) y analizar si su complejidad temporal es prohibitiva",
      ],
      correct: 2,
    },
    {
      concept: "Esquema de Identificación de PD",
      conceptIndex: 16,
      question: "¿Qué característica de los subproblemas indica que PD puede ser beneficiosa?",
      options: [
        "Que los subproblemas son todos del mismo tamaño y pueden resolverse en paralelo eficientemente",
        "Que el número de subproblemas distintos es exactamente igual al tamaño n de la entrada",
        "Que los subproblemas se superponen (se repiten) y el reparto de tamaños es no equitativo",
      ],
      correct: 2,
    },
    {
      concept: "Esquema de Identificación de PD",
      conceptIndex: 16,
      question: "¿Es suficiente que un problema sea de optimización para poder aplicar PD eficientemente?",
      options: [
        "Sí; todos los problemas de optimización tienen subestructura óptima por definición",
        "Sí; la naturaleza de optimización implica directamente que sus subproblemas se superponen",
        "No; además debe cumplir la subestructura óptima y presentar subproblemas superpuestos",
      ],
      correct: 2,
    },

    // ── CONCEPTO 17: Aplicaciones Clásicas ──
    {
      concept: "Aplicaciones Clásicas de PD",
      conceptIndex: 17,
      question: "¿Cuál de los siguientes algoritmos NO es una aplicación clásica de PD mencionada en el temario?",
      options: [
        "Algoritmo de Floyd (caminos mínimos entre todos los pares de vértices de un grafo)",
        "Cálculo de la distancia de edición (edit distance) entre dos cadenas de texto",
        "Algoritmo Quicksort (ordenación rápida mediante partición recursiva)",
      ],
      correct: 2,
    },
    {
      concept: "Aplicaciones Clásicas de PD",
      conceptIndex: 17,
      question: "¿Qué problema sobre grafos resuelve el algoritmo de Warshall mediante PD?",
      options: [
        "Encontrar el camino más corto entre un vértice origen y todos los demás vértices del grafo",
        "Encontrar el árbol generador mínimo de un grafo ponderado no dirigido",
        "Determinar si existe un camino (de cualquier longitud) entre cada par de vértices del grafo",
      ],
      correct: 2,
    },
    {
      concept: "Aplicaciones Clásicas de PD",
      conceptIndex: 17,
      question: "¿Qué tienen en común el LCS (Longest Common Subsequence) y la distancia de edición?",
      options: [
        "Ambos tienen complejidad O(n log n) con PD, igual que los algoritmos de ordenación eficientes",
        "Ambos son problemas sobre cadenas que se resuelven con PD definiendo subproblemas sobre prefijos de las cadenas",
        "Ambos solo pueden resolverse con la versión iterativa de PD, siendo imposible aplicar memoización",
      ],
      correct: 1,
    },
  ],
});
