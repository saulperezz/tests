window.TEMAS_ADA = window.TEMAS_ADA || [];
window.TEMAS_ADA.push({
  id: "voraces",
  nombre: "Algoritmos Voraces",
  tema: 5,
  resumenUrl: "resumen_voraces.html",
  preguntas: [

    // ── CONCEPTO 1: Algoritmo Voraz — Definición ──
    {
      concept: "Algoritmo Voraz — Definición",
      conceptIndex: 1,
      question: "¿Cuál es la característica esencial que define a un algoritmo voraz?",
      options: [
        "Explora todas las posibles soluciones y selecciona la mejor mediante búsqueda exhaustiva",
        "Toma en cada etapa la decisión localmente óptima según un criterio de selección, sin reconsiderar decisiones pasadas",
        "Divide el problema en subproblemas independientes y combina sus soluciones óptimas",
      ],
      correct: 1,
    },
    {
      concept: "Algoritmo Voraz — Definición",
      conceptIndex: 1,
      question: "¿Qué limitación fundamental tienen los algoritmos voraces respecto a la optimalidad global?",
      options: [
        "Siempre encuentran la solución óptima global, ya que la optimalidad local implica la global",
        "Nunca encuentran la solución óptima global; solo producen aproximaciones",
        "No todos los problemas admiten la estrategia voraz: la elección de óptimos locales no siempre conduce al óptimo global",
      ],
      correct: 2,
    },
    {
      concept: "Algoritmo Voraz — Definición",
      conceptIndex: 1,
      question: "¿Cuál es la complejidad temporal habitual de los algoritmos voraces y por qué?",
      options: [
        "O(2ⁿ), porque deben explorar todas las combinaciones posibles de candidatos",
        "Habitualmente O(n log n), gracias al carácter irreversible de sus decisiones que evita el backtracking",
        "Θ(n²), porque comparan cada par de candidatos antes de seleccionar el mejor",
      ],
      correct: 1,
    },

    // ── CONCEPTO 2: Criterio de Selección Voraz ──
    {
      concept: "Criterio de Selección Voraz",
      conceptIndex: 2,
      question: "¿Qué papel desempeña el criterio de selección en el diseño de un algoritmo voraz?",
      options: [
        "Determina el orden en que se inicializa el almacén de resultados parciales",
        "Es la pieza clave del diseño y determina si el algoritmo encontrará siempre la solución óptima o solo una aproximación",
        "Define la función objetivo que el algoritmo trata de maximizar o minimizar",
      ],
      correct: 1,
    },
    {
      concept: "Criterio de Selección Voraz",
      conceptIndex: 2,
      question: "¿Cuál es el criterio de selección voraz correcto para la mochila continua?",
      options: [
        "Seleccionar el objeto de mayor valor total vᵢ",
        "Seleccionar el objeto de menor peso wᵢ",
        "Seleccionar el objeto de mayor valor específico vᵢ/wᵢ",
      ],
      correct: 2,
    },
    {
      concept: "Criterio de Selección Voraz",
      conceptIndex: 2,
      question: "¿Qué se requiere formalmente para validar un criterio de selección voraz?",
      options: [
        "Comprobar que funciona correctamente en al menos cinco casos de prueba representativos",
        "Demostrar formalmente que el criterio garantiza el óptimo ante cualquier instancia del problema",
        "Verificar que la complejidad del algoritmo resultante es inferior a O(n²)",
      ],
      correct: 1,
    },

    // ── CONCEPTO 3: Solución Factible vs. Solución Óptima ──
    {
      concept: "Solución Factible vs. Solución Óptima",
      conceptIndex: 3,
      question: "¿Qué distingue una solución factible de una solución óptima?",
      options: [
        "La solución factible minimiza la función objetivo; la óptima la maximiza",
        "La solución factible satisface todas las restricciones del problema; la óptima es la factible que mejor valor de función objetivo alcanza",
        "La solución factible se obtiene con algoritmos voraces; la óptima solo con programación dinámica",
      ],
      correct: 1,
    },
    {
      concept: "Solución Factible vs. Solución Óptima",
      conceptIndex: 3,
      question: "En el esquema voraz, ¿qué ocurre con un candidato que haría la solución no factible?",
      options: [
        "Se guarda en una lista de espera para reconsiderarse en iteraciones posteriores",
        "Se descarta definitivamente y no vuelve a considerarse (decisión irreversible)",
        "Se fracciona para incluir solo la parte que mantiene la factibilidad",
      ],
      correct: 1,
    },
    {
      concept: "Solución Factible vs. Solución Óptima",
      conceptIndex: 3,
      question: "¿Puede un algoritmo voraz producir una solución que no sea factible aunque exista alguna solución factible?",
      options: [
        "No; el esquema voraz garantiza siempre encontrar una solución factible si existe alguna",
        "Sí; por ejemplo, el problema del cambio con ciertos conjuntos de monedas no canónicos puede no encontrar ninguna solución factible",
        "Sí, pero solo cuando la función objetivo es de maximización, nunca de minimización",
      ],
      correct: 1,
    },

    // ── CONCEPTO 4: Función Objetivo ──
    {
      concept: "Función Objetivo",
      conceptIndex: 4,
      question: "¿Qué expresa la función objetivo en un problema de optimización?",
      options: [
        "Las restricciones que debe cumplir la solución para ser considerada válida",
        "La expresión matemática que mide la calidad de una solución y que el algoritmo trata de maximizar o minimizar",
        "El criterio de selección voraz que determina qué candidato se elige en cada etapa",
      ],
      correct: 1,
    },
    {
      concept: "Función Objetivo",
      conceptIndex: 4,
      question: "¿Cuál es la función objetivo del problema del fontanero diligente?",
      options: [
        "Maximizar el número de tareas completadas antes de un plazo determinado",
        "Minimizar la duración de la tarea más larga de la secuencia",
        "Minimizar el tiempo total de espera acumulado E(n) = Σ Eᵢ de todos los clientes",
      ],
      correct: 2,
    },
    {
      concept: "Función Objetivo",
      conceptIndex: 4,
      question: "¿Cuál es la función objetivo del árbol de recubrimiento mínimo (MST)?",
      options: [
        "Maximizar el número de vértices conectados usando el menor número de aristas posible",
        "Minimizar la suma de pesos de las aristas seleccionadas que conecten todos los vértices",
        "Minimizar la arista de mayor peso incluida en el árbol de recubrimiento",
      ],
      correct: 1,
    },

    // ── CONCEPTO 5: Decisión Irreversible ──
    {
      concept: "Decisión Irreversible",
      conceptIndex: 5,
      question: "¿Por qué la irreversibilidad de las decisiones es a la vez la principal ventaja y la principal limitación de los algoritmos voraces?",
      options: [
        "Es una ventaja porque permite reutilizar candidatos descartados; es una limitación porque aumenta el uso de memoria",
        "Es una ventaja porque elimina el backtracking y hace el algoritmo eficiente; es una limitación porque si una decisión local no conduce al óptimo global no hay forma de corregirlo",
        "Es una ventaja porque garantiza la optimalidad; es una limitación porque impide paralelizar el algoritmo",
      ],
      correct: 1,
    },
    {
      concept: "Decisión Irreversible",
      conceptIndex: 5,
      question: "En el esquema voraz, después de evaluar un candidato y, ¿qué sucede independientemente de si se incluye en la solución o se descarta?",
      options: [
        "El candidato y se elimina del conjunto de candidatos y no vuelve a considerarse",
        "El candidato y se reinserta al final de la lista de candidatos para una posible revisión",
        "El candidato y se almacena en el conjunto de soluciones descartadas para su análisis posterior",
      ],
      correct: 0,
    },
    {
      concept: "Decisión Irreversible",
      conceptIndex: 5,
      question: "¿Qué técnica algorítmica SÍ permite reconsiderar decisiones pasadas, a diferencia de los algoritmos voraces?",
      options: [
        "Divide y Vencerás, que reordena los candidatos tras cada decisión",
        "Backtracking, que puede deshacer decisiones anteriores al explorar el espacio de soluciones",
        "Programación Dinámica, que almacena todas las decisiones posibles antes de elegir",
      ],
      correct: 1,
    },

    // ── CONCEPTO 6: Esquema General Voraz ──
    {
      concept: "Esquema General Voraz",
      conceptIndex: 6,
      question: "¿Cuál suele ser la operación dominante en la complejidad del esquema general voraz?",
      options: [
        "La función esFactible, que comprueba en cada paso si la solución parcial sigue siendo válida",
        "La función prepararDatos, que generalmente incluye una ordenación de los candidatos",
        "La función añadeElemento, que inserta el candidato seleccionado en la solución",
      ],
      correct: 1,
    },
    {
      concept: "Esquema General Voraz",
      conceptIndex: 6,
      question: "¿Qué comprueba la función esFactible en el esquema voraz?",
      options: [
        "Si el candidato seleccionado tiene el mayor valor de la función objetivo entre los restantes",
        "Si añadir el candidato a la solución parcial mantiene la factibilidad de dicha solución",
        "Si la solución parcial actual ya es óptima y el algoritmo puede terminar anticipadamente",
      ],
      correct: 1,
    },
    {
      concept: "Esquema General Voraz",
      conceptIndex: 6,
      question: "¿En qué orden se aplican los pasos del esquema voraz dentro del bucle principal?",
      options: [
        "esFactible → selecciona → añadeElemento → quitaElemento",
        "selecciona → esFactible → (añadeElemento si factible) → quitaElemento",
        "prepararDatos → selecciona → quitaElemento → esFactible → añadeElemento",
      ],
      correct: 1,
    },

    // ── CONCEPTO 7: Mochila Continua ──
    {
      concept: "Mochila Continua (Fractional Knapsack)",
      conceptIndex: 7,
      question: "¿Por qué el algoritmo voraz garantiza la solución óptima en la mochila continua pero no en la discreta?",
      options: [
        "Porque en la continua los pesos son siempre enteros, lo que facilita la selección óptima",
        "Porque en la continua se puede tomar una fracción de cada objeto, lo que permite siempre llenar la mochila completamente siguiendo el criterio de mayor valor específico",
        "Porque en la continua el número de objetos disponibles es siempre mayor que la capacidad W",
      ],
      correct: 1,
    },
    {
      concept: "Mochila Continua (Fractional Knapsack)",
      conceptIndex: 7,
      question: "¿Cuál es la complejidad temporal de la solución voraz de la mochila continua?",
      options: [
        "O(n), recorriendo los objetos una sola vez en orden arbitrario",
        "O(n²), comparando cada par de objetos para determinar el de mayor valor específico",
        "O(n log n), dominada por la ordenación de los objetos por valor específico decreciente",
      ],
      correct: 2,
    },
    {
      concept: "Mochila Continua (Fractional Knapsack)",
      conceptIndex: 7,
      question: "¿Qué rango de valores puede tomar xᵢ en la mochila continua, a diferencia de la discreta?",
      options: [
        "xᵢ ∈ {0, 1}, igual que en la mochila discreta",
        "xᵢ ∈ [0, 1], permitiendo tomar cualquier fracción de cada objeto",
        "xᵢ ∈ ℕ, permitiendo tomar múltiples copias enteras de cada objeto",
      ],
      correct: 1,
    },

    // ── CONCEPTO 8: Valor Específico ──
    {
      concept: "Valor Específico (Densidad de Valor)",
      conceptIndex: 8,
      question: "¿Qué mide el valor específico vᵢ/wᵢ de un objeto?",
      options: [
        "El peso total que ocupa el objeto i en relación al valor máximo de la mochila",
        "El valor obtenido por unidad de peso del objeto i",
        "La fracción del objeto i que debe tomarse para maximizar el valor total",
      ],
      correct: 1,
    },
    {
      concept: "Valor Específico (Densidad de Valor)",
      conceptIndex: 8,
      question: "Para el ejemplo del temario (W=12, w=(6,5,2), v=(49,40,20)), ¿qué valor total produce el criterio de mayor valor específico?",
      options: [
        "99, tomando los objetos de mayor valor total",
        "100.8, tomando los objetos de menor peso",
        "101, que es el valor óptimo alcanzado por el criterio de mayor valor específico",
      ],
      correct: 2,
    },
    {
      concept: "Valor Específico (Densidad de Valor)",
      conceptIndex: 8,
      question: "¿El criterio de mayor valor específico garantiza el óptimo en la mochila discreta (0/1)?",
      options: [
        "Sí, es el único criterio que garantiza el óptimo tanto en la mochila continua como en la discreta",
        "No; para la mochila discreta ningún criterio voraz conocido garantiza el óptimo ante cualquier instancia",
        "Sí, siempre que los pesos sean números enteros y la capacidad W sea suficientemente grande",
      ],
      correct: 1,
    },

    // ── CONCEPTO 9: Demostración de Corrección ──
    {
      concept: "Demostración de Corrección de un Algoritmo Voraz",
      conceptIndex: 9,
      question: "¿Qué técnica se usa habitualmente para demostrar formalmente la corrección de un algoritmo voraz?",
      options: [
        "Inducción matemática sobre el número de candidatos procesados",
        'El "exchange argument": se supone que existe una solución óptima distinta a la voraz y se demuestra que puede transformarse en ella sin empeorar el valor',
        'El "cut and paste": se demuestra que la solución voraz contiene soluciones óptimas de sus subproblemas',
      ],
      correct: 1,
    },
    {
      concept: "Demostración de Corrección de un Algoritmo Voraz",
      conceptIndex: 9,
      question: "¿Es suficiente con verificar la corrección del algoritmo voraz en varios ejemplos concretos?",
      options: [
        "Sí; si el algoritmo produce la solución óptima en diez o más instancias distintas, se considera correcto",
        "No; hay que demostrar formalmente que el criterio voraz conduce al óptimo para cualquier instancia posible del problema",
        "Sí, siempre que los ejemplos elegidos sean suficientemente representativos del espacio de instancias",
      ],
      correct: 1,
    },
    {
      concept: "Demostración de Corrección de un Algoritmo Voraz",
      conceptIndex: 9,
      question: "En la demostración de corrección de la mochila continua, ¿qué se prueba sobre V(X) y V(Y)?",
      options: [
        "Que V(X) = V(Y) para toda solución factible Y, lo que implica que todas las soluciones son igualmente óptimas",
        "Que V(X) - V(Y) ≥ 0 para cualquier solución factible Y, lo que prueba que la solución voraz X es óptima",
        "Que V(X) > V(Y) estrictamente para toda solución factible Y distinta de X",
      ],
      correct: 1,
    },

    // ── CONCEPTO 10: Heurística Voraz ──
    {
      concept: "Heurística Voraz",
      conceptIndex: 10,
      question: "¿Cuándo se usa un algoritmo voraz como heurística en lugar de como algoritmo exacto?",
      options: [
        "Cuando el problema tiene solución óptima única y se quiere encontrarla de forma eficiente",
        "Cuando no se conoce ningún criterio voraz que garantice el óptimo, pero se quiere una solución factible de calidad razonable en tiempo polinómico",
        "Cuando la entrada es demasiado pequeña para justificar el uso de programación dinámica",
      ],
      correct: 1,
    },
    {
      concept: "Heurística Voraz",
      conceptIndex: 10,
      question: "¿Cuál es el equilibrio fundamental que debe considerarse al usar una heurística voraz?",
      options: [
        "Entre la complejidad espacial del almacén y la precisión de la solución obtenida",
        "Entre la eficiencia (complejidad baja) y la eficacia (calidad de la solución obtenida)",
        "Entre el número de candidatos procesados y el número de restricciones del problema",
      ],
      correct: 1,
    },
    {
      concept: "Heurística Voraz",
      conceptIndex: 10,
      question: "¿Cuál de los siguientes afirma correctamente una limitación de la heurística voraz?",
      options: [
        "En casos extremos puede producir una solución no factible aunque exista alguna solución factible",
        "Siempre produce una solución factible, aunque puede que no sea óptima",
        "Solo es aplicable a problemas de maximización, no de minimización",
      ],
      correct: 0,
    },

    // ── CONCEPTO 11: Mochila Discreta — Voraz No Funciona ──
    {
      concept: "Mochila Discreta — El Voraz No Funciona",
      conceptIndex: 11,
      question: "Para el contraejemplo del temario (W=120, w=(60,60,20), v=(300,300,200)), ¿qué solución produce el criterio voraz por valor específico?",
      options: [
        "Tomar los objetos 1 y 2 con valor total 600 (solución óptima)",
        "Tomar el objeto 3 y uno de los objetos 1 ó 2 con valor total 500 (solución subóptima)",
        "No encontrar ninguna solución factible porque ningún objeto cabe en la mochila",
      ],
      correct: 1,
    },
    {
      concept: "Mochila Discreta — El Voraz No Funciona",
      conceptIndex: 11,
      question: "¿Se ha demostrado que no existe ningún criterio voraz que resuelva óptimamente la mochila discreta en el caso general?",
      options: [
        "Sí; está demostrado que ningún criterio voraz puede resolver óptimamente la mochila 0/1",
        "No; tampoco se ha podido demostrar que no existe, ya que el problema es NP-completo para el caso general",
        "Sí; la NP-completitud del problema prueba directamente que ningún algoritmo voraz puede resolverlo",
      ],
      correct: 1,
    },
    {
      concept: "Mochila Discreta — El Voraz No Funciona",
      conceptIndex: 11,
      question: "¿Cuál es el método preferido para resolver óptimamente la mochila 0/1 cuando los pesos son discretos y W no es demasiado grande?",
      options: [
        "Algoritmo voraz con el criterio de mayor valor específico",
        "Búsqueda exhaustiva con poda (branch and bound)",
        "Programación Dinámica con complejidad Θ(nW)",
      ],
      correct: 2,
    },

    // ── CONCEPTO 12: Problema del Cambio ──
    {
      concept: "Problema del Cambio (Coin Change)",
      conceptIndex: 12,
      question: "¿Cuál es el criterio voraz para el problema del cambio?",
      options: [
        "Tomar la moneda de menor valor posible hasta alcanzar la cantidad M",
        "Tomar en cada paso la moneda de mayor valor posible que no supere la cantidad restante",
        "Tomar monedas en orden aleatorio hasta alcanzar exactamente la cantidad M",
      ],
      correct: 1,
    },
    {
      concept: "Problema del Cambio (Coin Change)",
      conceptIndex: 12,
      question: "¿Para qué tipo de sistemas de monedas garantiza el criterio voraz la solución óptima?",
      options: [
        "Para cualquier conjunto de denominaciones, siempre que incluya la moneda de valor 1",
        "Solo para sistemas canónicos de monedas como el euro o el dólar",
        "Para todos los sistemas no canónicos con un número impar de denominaciones",
      ],
      correct: 1,
    },
    {
      concept: "Problema del Cambio (Coin Change)",
      conceptIndex: 12,
      question: "¿Cuál es la complejidad temporal del algoritmo voraz para el problema del cambio (tras ordenar las monedas)?",
      options: [
        "O(n log n), dominada por la ordenación de las denominaciones",
        "O(n·M), donde n es el número de denominaciones y M la cantidad a cambiar",
        "O(n), recorriendo las denominaciones una única vez de mayor a menor",
      ],
      correct: 2,
    },

    // ── CONCEPTO 13: Árbol de Recubrimiento Mínimo ──
    {
      concept: "Árbol de Recubrimiento de Coste Mínimo (MST)",
      conceptIndex: 13,
      question: "¿Cuántas aristas tiene exactamente un árbol de recubrimiento de un grafo con n vértices?",
      options: [
        "n aristas, una por cada vértice del grafo",
        "n-1 aristas, que es el mínimo necesario para conectar n vértices sin ciclos",
        "n(n-1)/2 aristas, conectando cada par de vértices exactamente una vez",
      ],
      correct: 1,
    },
    {
      concept: "Árbol de Recubrimiento de Coste Mínimo (MST)",
      conceptIndex: 13,
      question: "¿Puede existir más de un MST con el mismo coste mínimo en un grafo?",
      options: [
        "No; el MST es siempre único para cualquier grafo ponderado conexo",
        "Sí; puede haber más de un árbol de recubrimiento con el mismo coste mínimo",
        "Solo cuando el grafo tiene aristas con peso cero",
      ],
      correct: 1,
    },
    {
      concept: "Árbol de Recubrimiento de Coste Mínimo (MST)",
      conceptIndex: 13,
      question: "¿Qué dos algoritmos voraces clásicos resuelven el problema del MST garantizando siempre el óptimo?",
      options: [
        "Dijkstra y Bellman-Ford",
        "Prim y Kruskal",
        "Floyd y Warshall",
      ],
      correct: 1,
    },

    // ── CONCEPTO 14: Algoritmo de Prim ──
    {
      concept: "Algoritmo de Prim",
      conceptIndex: 14,
      question: "¿Cómo selecciona Prim la siguiente arista a añadir al árbol en construcción?",
      options: [
        "Selecciona la arista de menor peso global del grafo que no forme ciclo",
        "Selecciona la arista de menor peso que conecte un vértice ya visitado con uno no visitado todavía",
        "Selecciona la arista de mayor peso que conecte dos componentes conexas distintas",
      ],
      correct: 1,
    },
    {
      concept: "Algoritmo de Prim",
      conceptIndex: 14,
      question: "¿Cuál es la complejidad temporal de la versión mejorada de Prim con vectores de mínimos?",
      options: [
        "O(V³), evaluando todas las aristas en cada uno de los V-1 pasos",
        "O(E log E), dominada por la ordenación de todas las aristas del grafo",
        "O(V²), actualizando los vectores de mínimos en O(V) tras cada inserción",
      ],
      correct: 2,
    },
    {
      concept: "Algoritmo de Prim",
      conceptIndex: 14,
      question: "¿En qué tipo de grafo es preferible usar Prim frente a Kruskal?",
      options: [
        "En grafos dispersos con pocas aristas (E << V²)",
        "En grafos densos con muchas aristas (E ≈ V²)",
        "En grafos con aristas de peso negativo",
      ],
      correct: 1,
    },

    // ── CONCEPTO 15: Algoritmo de Kruskal ──
    {
      concept: "Algoritmo de Kruskal",
      conceptIndex: 15,
      question: "¿En qué orden procesa Kruskal las aristas del grafo?",
      options: [
        "En orden decreciente de peso, descartando las más costosas primero",
        "En orden aleatorio, usando la estructura Union-Find para detectar ciclos",
        "En orden creciente de peso, incorporando cada arista si no forma ciclo con las ya seleccionadas",
      ],
      correct: 2,
    },
    {
      concept: "Algoritmo de Kruskal",
      conceptIndex: 15,
      question: "¿Qué estructura de datos necesita Kruskal para comprobar eficientemente si añadir una arista formaría un ciclo?",
      options: [
        "Una tabla hash que almacene los pesos de todas las aristas ya procesadas",
        "La estructura de conjuntos disjuntos (Union-Find) para saber si dos vértices pertenecen a la misma componente",
        "Una cola de prioridad que mantenga ordenadas las aristas restantes por peso",
      ],
      correct: 1,
    },
    {
      concept: "Algoritmo de Kruskal",
      conceptIndex: 15,
      question: "¿Cuál es la complejidad temporal de Kruskal?",
      options: [
        "O(V²), independientemente del número de aristas del grafo",
        "O(E log E), dominada por la ordenación de las aristas",
        "O(E·V), por el coste de comprobar ciclos en cada una de las E aristas",
      ],
      correct: 1,
    },

    // ── CONCEPTO 16: Union-Find ──
    {
      concept: "Conjuntos Disjuntos / Union-Find",
      conceptIndex: 16,
      question: "¿Para qué se usa la estructura Union-Find en el algoritmo de Kruskal?",
      options: [
        "Para ordenar las aristas por peso antes de comenzar el algoritmo",
        "Para detectar si los dos extremos de una arista pertenecen a la misma componente conexa, lo que indicaría que formarían un ciclo",
        "Para almacenar el árbol de recubrimiento mínimo resultante de forma eficiente",
      ],
      correct: 1,
    },
    {
      concept: "Conjuntos Disjuntos / Union-Find",
      conceptIndex: 16,
      question: "Con una implementación básica de Union-Find mediante vector de etiquetas, ¿cuáles son las complejidades de find y union?",
      options: [
        "find ∈ O(1) y union ∈ O(V), porque hay que reetiqueter todos los elementos del grupo fusionado",
        "find ∈ O(log V) y union ∈ O(log V), usando la implementación en árbol",
        "find ∈ O(1) y union ∈ O(1) amortizado, con compresión de caminos y unión por rango",
      ],
      correct: 0,
    },
    {
      concept: "Conjuntos Disjuntos / Union-Find",
      conceptIndex: 16,
      question: "¿Cuál es la complejidad de la operación de inicialización de Union-Find para V vértices?",
      options: [
        "O(1), ya que solo se inicializa un puntero global",
        "O(V), creando un grupo independiente para cada vértice",
        "O(V log V), ordenando los vértices para facilitar las operaciones posteriores",
      ],
      correct: 1,
    },

    // ── CONCEPTO 17: Comparativa Prim vs. Kruskal ──
    {
      concept: "Comparativa Prim vs. Kruskal",
      conceptIndex: 17,
      question: "¿Cuál es la complejidad de Kruskal en el peor caso (grafo completo con E ∈ O(V²))?",
      options: [
        "O(V²), igual que Prim, por lo que ambos son equivalentes en grafos densos",
        "O(V² log V), que es peor que Prim para grafos densos",
        "O(V log V), mejor que Prim incluso en grafos densos",
      ],
      correct: 1,
    },
    {
      concept: "Comparativa Prim vs. Kruskal",
      conceptIndex: 17,
      question: "¿Cuál es la diferencia estructural más destacada entre Prim y Kruskal durante la construcción del MST?",
      options: [
        "Prim siempre mantiene un único subárbol conectado que crece desde el vértice inicial; Kruskal puede tener múltiples subárboles desconectados que se van fusionando",
        "Prim procesa aristas en orden creciente de peso; Kruskal las procesa en orden decreciente",
        "Prim garantiza el MST óptimo; Kruskal solo produce una aproximación",
      ],
      correct: 0,
    },
    {
      concept: "Comparativa Prim vs. Kruskal",
      conceptIndex: 17,
      question: "Usando colas de prioridad (montículos de Fibonacci), ¿qué complejidad puede alcanzar Prim?",
      options: [
        "O(V log V), eliminando completamente la dependencia del número de aristas",
        "O(E + V log V), que lo hace competitivo con Kruskal incluso en grafos dispersos",
        "O(E log V), igual que Kruskal pero con una constante multiplicativa menor",
      ],
      correct: 1,
    },

    // ── CONCEPTO 18: Fontanero Diligente ──
    {
      concept: "El Fontanero Diligente (Scheduling)",
      conceptIndex: 18,
      question: "¿Cuál es el criterio voraz óptimo para el problema del fontanero diligente?",
      options: [
        "Atender primero la tarea de mayor duración (LPT: Longest Processing Time)",
        "Atender las tareas en el orden en que llegan los clientes (FIFO)",
        "Atender primero la tarea de menor duración (SPT: Shortest Processing Time)",
      ],
      correct: 2,
    },
    {
      concept: "El Fontanero Diligente (Scheduling)",
      conceptIndex: 18,
      question: "Si la tarea i tiene duración tᵢ y se atiende en la posición k de la secuencia, ¿cuál es su tiempo de espera Eᵢ?",
      options: [
        "Eᵢ = tᵢ, solo la duración de su propia tarea",
        "Eᵢ = t₁ + t₂ + ... + tₖ, la suma de las duraciones de todas las tareas hasta la suya inclusive",
        "Eᵢ = tₖ₊₁ + tₖ₊₂ + ... + tₙ, la suma de las tareas que se atienden después",
      ],
      correct: 1,
    },
    {
      concept: "El Fontanero Diligente (Scheduling)",
      conceptIndex: 18,
      question: "¿Cómo se demuestra la corrección del criterio SPT en el fontanero diligente?",
      options: [
        "Mediante inducción sobre el número de tareas, probando que SPT es óptimo para n=1 y n=2",
        "Mediante el argumento del intercambio: intercambiar dos tareas adyacentes fuera del orden SPT no mejora el coste total",
        "Mediante un contraejemplo que demuestre que cualquier otro orden produce un coste mayor",
      ],
      correct: 1,
    },

    // ── CONCEPTO 19: Asignación de Tareas ──
    {
      concept: "Problema de Asignación de Tareas",
      conceptIndex: 19,
      question: "¿Qué representa xᵢⱼ = 1 en la formalización del problema de asignación?",
      options: [
        "Que el coste de asignar la tarea j al trabajador i es igual a 1",
        "Que el trabajador i realiza la tarea j en la solución",
        "Que el trabajador i y la tarea j son incompatibles y no pueden asignarse",
      ],
      correct: 1,
    },
    {
      concept: "Problema de Asignación de Tareas",
      conceptIndex: 19,
      question: "¿Garantiza el enfoque voraz simple (asignar a cada trabajador su tarea de menor coste en orden) la solución óptima?",
      options: [
        "Sí, siempre que los costes bᵢⱼ sean todos distintos",
        "No; el enfoque voraz simple no garantiza el óptimo para el caso general de asignación",
        "Sí, porque el problema de asignación tiene subestructura óptima que el voraz aprovecha",
      ],
      correct: 1,
    },
    {
      concept: "Problema de Asignación de Tareas",
      conceptIndex: 19,
      question: "¿Qué algoritmo resuelve exactamente el problema de asignación con complejidad O(n³)?",
      options: [
        "El Algoritmo Húngaro (Hungarian Algorithm)",
        "El Algoritmo de Kruskal adaptado a grafos bipartitos",
        "La Programación Dinámica con tabla de dimensión n×n",
      ],
      correct: 0,
    },

    // ── CONCEPTO 20: Problemas de Optimización por Selección Discreta ──
    {
      concept: "Problemas de Optimización por Selección Discreta",
      conceptIndex: 20,
      question: "¿Qué caracteriza a los problemas de optimización por selección discreta para los que están diseñados los algoritmos voraces?",
      options: [
        "Las variables de decisión son continuas y pueden tomar cualquier valor real en un intervalo",
        "Las decisiones son binarias: incluir o no cada elemento del conjunto de candidatos",
        "El conjunto de candidatos es infinito y no puede ordenarse de forma finita",
      ],
      correct: 1,
    },
    {
      concept: "Problemas de Optimización por Selección Discreta",
      conceptIndex: 20,
      question: "¿Por qué la mochila continua no pertenece estrictamente a la categoría de problemas de optimización por selección discreta?",
      options: [
        "Porque su función objetivo es de maximización en lugar de minimización",
        "Porque admite selecciones fraccionarias (xᵢ ∈ [0,1]) en lugar de solo decisiones binarias (xᵢ ∈ {0,1})",
        "Porque no tiene restricciones de capacidad, a diferencia de la mochila discreta",
      ],
      correct: 1,
    },
    {
      concept: "Problemas de Optimización por Selección Discreta",
      conceptIndex: 20,
      question: "¿Cuáles son los cuatro elementos formales que definen un problema de optimización por selección discreta?",
      options: [
        "Función recursiva, caso base, almacén de resultados y función de combinación",
        "Conjunto de candidatos, restricciones, función objetivo y solución óptima",
        "Criterio de selección, función de factibilidad, función de completitud y función objetivo",
      ],
      correct: 1,
    },

    // ── CONCEPTO 21: Complejidad Típica ──
    {
      concept: "Complejidad Típica de los Algoritmos Voraces",
      conceptIndex: 21,
      question: "¿Por qué la complejidad de los algoritmos voraces es habitualmente O(n log n)?",
      options: [
        "Porque el bucle principal recorre los candidatos dos veces: una para seleccionarlos y otra para verificar su factibilidad",
        "Porque la operación dominante suele ser la ordenación previa de los candidatos según el criterio voraz",
        "Porque la función esFactible tiene complejidad O(log n) y se ejecuta n veces",
      ],
      correct: 1,
    },
    {
      concept: "Complejidad Típica de los Algoritmos Voraces",
      conceptIndex: 21,
      question: "¿Cuál es la complejidad del algoritmo voraz para el fontanero diligente?",
      options: [
        "O(n), recorriendo las tareas una única vez tras la ordenación",
        "O(n²), comparando cada par de tareas para determinar el orden óptimo",
        "O(n log n), dominada por la ordenación de las tareas por duración creciente",
      ],
      correct: 2,
    },
    {
      concept: "Complejidad Típica de los Algoritmos Voraces",
      conceptIndex: 21,
      question: "¿Por qué el bucle principal de un algoritmo voraz tiene complejidad O(n) en el peor caso?",
      options: [
        "Porque la función de selección ordena los candidatos en cada iteración del bucle",
        "Porque el carácter irreversible de las decisiones elimina el backtracking, haciendo que cada candidato se procese exactamente una vez",
        "Porque la estructura Union-Find garantiza que cada operación del bucle es O(1)",
      ],
      correct: 1,
    },

  ],
});
