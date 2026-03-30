#lang racket
(require rackunit)
(require "lpp.rkt")

;;; ============================================================
;;; PRÁCTICA 8: Árboles
;;; Lenguajes y Paradigmas de Programación, curso 2025-26
;;; ============================================================


;;; ============================================================
;;; EJERCICIO 1
;;; ============================================================

;;; ------------------------------------------------------------
;;; a.1) Árbol genérico
;;; ------------------------------------------------------------
;;;
;;; Árbol según la figura del enunciado:
;;;
;;;          40
;;;        / | \
;;;       2   8   5
;;;      / \   \
;;;     3   10   6
;;;

(define arbol '(40 (2 (3) (10)) (8 (6)) (5)))

;;; Expresión que devuelve el número 10:
(check-equal? (dato-arbol (second (hijos-arbol (first (hijos-arbol arbol))))) 10)

;;; ------------------------------------------------------------
;;; a.2) Análisis de suma-datos-arbol con recursión mutua
;;; ------------------------------------------------------------
;;;
;;; Las funciones del enunciado son:
;;;
;;; (define (suma-datos-arbol arbol)
;;;     (+ (dato-arbol arbol)
;;;        (suma-datos-bosque (hijos-arbol arbol))))
;;;
;;; (define (suma-datos-bosque bosque)
;;;     (if (null? bosque)
;;;         0
;;;         (+ (suma-datos-arbol (first bosque))
;;;            (suma-datos-bosque (rest bosque)))))
;;;
;;; Llamada: (suma-datos-bosque (hijos-arbol arbol))
;;; donde bosque = '((2 (3) (10)) (8 (6)) (5))
;;;
;;; PREGUNTA 1: ¿Qué devuelve (suma-datos-arbol (first bosque))?
;;;   (first bosque) = '(2 (3) (10))
;;;   (suma-datos-arbol '(2 (3) (10)))
;;;     = 2 + (suma-datos-bosque '((3) (10)))
;;;     = 2 + (suma-datos-arbol '(3)) + (suma-datos-bosque '((10)))
;;;     = 2 + (3 + 0) + (10 + 0)
;;;   RESPUESTA: Devuelve 15
;;;
;;; PREGUNTA 2: ¿Qué devuelve la primera llamada recursiva a suma-datos-bosque?
;;;   La primera llamada recursiva es (suma-datos-bosque (rest bosque))
;;;   = (suma-datos-bosque '((8 (6)) (5)))
;;;   = (suma-datos-arbol '(8 (6))) + (suma-datos-bosque '((5)))
;;;   = (8 + 6) + (5 + 0)
;;;   = 14 + 5
;;;   RESPUESTA: Devuelve 19

;;; ------------------------------------------------------------
;;; a.3) Análisis de suma-datos-arbol-fos
;;; ------------------------------------------------------------
;;;
;;; (define (suma-datos-arbol-fos arbol)
;;;    (foldr + (dato-arbol arbol)
;;;        (map suma-datos-arbol-fos (hijos-arbol arbol))))
;;;
;;; Llamada: (suma-datos-arbol-fos arbol)
;;;
;;; PREGUNTA 1: ¿Qué devuelve la invocación a map?
;;;   (map suma-datos-arbol-fos '((2 (3) (10)) (8 (6)) (5)))
;;;   aplica la función a cada hijo:
;;;     - (suma-datos-arbol-fos '(2 (3) (10))) = 2+3+10 = 15
;;;     - (suma-datos-arbol-fos '(8 (6)))      = 8+6    = 14
;;;     - (suma-datos-arbol-fos '(5))          = 5
;;;   RESPUESTA: Devuelve '(15 14 5)
;;;
;;; PREGUNTA 2: ¿Qué invocaciones a + realiza foldr?
;;;   (foldr + 40 '(15 14 5)) procesa de derecha a izquierda:
;;;   1ª: (+ 5 40)  => 45
;;;   2ª: (+ 14 45) => 59
;;;   3ª: (+ 15 59) => 74
;;;   Resultado final: 74

;;; ------------------------------------------------------------
;;; b.1) Árbol binario
;;; ------------------------------------------------------------
;;;
;;; Árbol binario según la figura del enunciado:
;;;
;;;           20
;;;          /  \
;;;        10    40
;;;       /  \  /  \
;;;      5   15 29  50
;;;

(define arbolb '(20 (10 (5 () ()) (15 () ()))
                    (40 (29 () ()) (50 () ()))))

;;; Expresión que devuelve el número 29:
(check-equal? (dato-arbolb (hijo-izq-arbolb (hijo-der-arbolb arbolb))) 29)


;;; ============================================================
;;; EJERCICIO 2
;;; ============================================================

;;; ------------------------------------------------------------
;;; a) to-string-arbol: concatena símbolos en recorrido preorden
;;; ------------------------------------------------------------

;;; Versión con recursión mutua
(define (to-string-arbol arbol)
  (string-append (symbol->string (dato-arbol arbol))
                 (to-string-bosque (hijos-arbol arbol))))

(define (to-string-bosque bosque)
  (if (null? bosque)
      ""
      (string-append (to-string-arbol (first bosque))
                     (to-string-bosque (rest bosque)))))

;;; Versión con funciones de orden superior (una sola función)
(define (to-string-arbol-fos arbol)
  (apply string-append
         (symbol->string (dato-arbol arbol))
         (map to-string-arbol-fos (hijos-arbol arbol))))

;;; Árbol de ejemplo del enunciado
(define arbol-letras '(a (b (c (d)) (e)) (f)))

(check-equal? (to-string-arbol arbol-letras) "abcdef")
(check-equal? (to-string-arbol-fos arbol-letras) "abcdef")


;;; ------------------------------------------------------------
;;; b) veces-arbol: número de veces que aparece un dato
;;; ------------------------------------------------------------

;;; Versión con recursión mutua
(define (veces-arbol dato arbol)
  (+ (if (equal? dato (dato-arbol arbol)) 1 0)
     (veces-bosque dato (hijos-arbol arbol))))

(define (veces-bosque dato bosque)
  (if (null? bosque)
      0
      (+ (veces-arbol dato (first bosque))
         (veces-bosque dato (rest bosque)))))

;;; Versión con funciones de orden superior
(define (veces-arbol-fos dato arbol)
  (foldr +
         (if (equal? dato (dato-arbol arbol)) 1 0)
         (map (lambda (hijo) (veces-arbol-fos dato hijo))
              (hijos-arbol arbol))))

(check-equal? (veces-arbol 'b '(a (b (c) (d)) (b (b) (f)))) 3)
(check-equal? (veces-arbol 'g '(a (b (c) (d)) (b (b) (f)))) 0)
(check-equal? (veces-arbol-fos 'b '(a (b (c) (d)) (b (b) (f)))) 3)
(check-equal? (veces-arbol-fos 'g '(a (b (c) (d)) (b (b) (f)))) 0)


;;; ============================================================
;;; EJERCICIO 3
;;; ============================================================

(define arbol1 '(10 (2) (12 (4) (2)) (10 (5))))
(define arbol2 '(10 (2) (12 (4) (2)) (10 (6))))

;;; ------------------------------------------------------------
;;; a) hojas-cumplen: hojas del árbol que cumplen el predicado
;;; ------------------------------------------------------------

;;; Versión con recursión mutua
(define (hojas-cumplen pred arbol)
  (if (hoja-arbol? arbol)
      (if (pred (dato-arbol arbol))
          (list (dato-arbol arbol))
          '())
      (hojas-cumplen-bosque pred (hijos-arbol arbol))))

(define (hojas-cumplen-bosque pred bosque)
  (if (null? bosque)
      '()
      (append (hojas-cumplen pred (first bosque))
              (hojas-cumplen-bosque pred (rest bosque)))))

;;; Versión con funciones de orden superior
(define (hojas-cumplen-fos pred arbol)
  (if (hoja-arbol? arbol)
      (if (pred (dato-arbol arbol))
          (list (dato-arbol arbol))
          '())
      (foldr append '()
             (map (lambda (hijo) (hojas-cumplen-fos pred hijo))
                  (hijos-arbol arbol)))))

(check-equal? (hojas-cumplen even? arbol1) '(2 4 2))
(check-equal? (hojas-cumplen even? arbol2) '(2 4 2 6))
(check-equal? (hojas-cumplen-fos even? arbol1) '(2 4 2))
(check-equal? (hojas-cumplen-fos even? arbol2) '(2 4 2 6))


;;; ------------------------------------------------------------
;;; b) todas-hojas-cumplen?: todas las hojas cumplen el predicado
;;; ------------------------------------------------------------

;;; Versión con recursión mutua
(define (todas-hojas-cumplen? pred arbol)
  (if (hoja-arbol? arbol)
      (pred (dato-arbol arbol))
      (todas-hojas-cumplen-bosque? pred (hijos-arbol arbol))))

(define (todas-hojas-cumplen-bosque? pred bosque)
  (if (null? bosque)
      #t
      (and (todas-hojas-cumplen? pred (first bosque))
           (todas-hojas-cumplen-bosque? pred (rest bosque)))))

;;; Versión con funciones de orden superior
(define (todas-hojas-cumplen-fos? pred arbol)
  (if (hoja-arbol? arbol)
      (pred (dato-arbol arbol))
      (for-all? (lambda (hijo) (todas-hojas-cumplen-fos? pred hijo))
                (hijos-arbol arbol))))

(check-equal? (todas-hojas-cumplen? even? arbol1) #f)
(check-equal? (todas-hojas-cumplen? even? arbol2) #t)
(check-equal? (todas-hojas-cumplen-fos? even? arbol1) #f)
(check-equal? (todas-hojas-cumplen-fos? even? arbol2) #t)


;;; ============================================================
;;; EJERCICIO 4
;;; ============================================================

(define arbol3 '(20 (2) (8 (4) (2)) (9 (5))))
(define arbol4 '(20 (2) (8 (4) (5)) (9 (5))))

;;; ------------------------------------------------------------
;;; a) suma-raices-hijos: suma de las raíces de los hijos
;;; ------------------------------------------------------------

(define (suma-raices-hijos arbol)
  (foldr + 0 (map dato-arbol (hijos-arbol arbol))))

(check-equal? (suma-raices-hijos arbol3) 19)
(check-equal? (suma-raices-hijos (second (hijos-arbol arbol3))) 6)


;;; ------------------------------------------------------------
;;; b) raices-mayores-arbol?: raíz mayor que la suma de raíces de hijos,
;;;    y todos los descendientes cumplen también la propiedad
;;; ------------------------------------------------------------

;;; Versión con recursión mutua
(define (raices-mayores-arbol? arbol)
  (and (> (dato-arbol arbol) (suma-raices-hijos arbol))
       (raices-mayores-bosque? (hijos-arbol arbol))))

(define (raices-mayores-bosque? bosque)
  (if (null? bosque)
      #t
      (and (raices-mayores-arbol? (first bosque))
           (raices-mayores-bosque? (rest bosque)))))

;;; Versión con funciones de orden superior
(define (raices-mayores-arbol-fos? arbol)
  (and (> (dato-arbol arbol) (suma-raices-hijos arbol))
       (for-all? raices-mayores-arbol-fos? (hijos-arbol arbol))))

(check-equal? (raices-mayores-arbol? arbol3) #t)
(check-equal? (raices-mayores-arbol? arbol4) #f)
(check-equal? (raices-mayores-arbol-fos? arbol3) #t)
(check-equal? (raices-mayores-arbol-fos? arbol4) #f)


;;; ------------------------------------------------------------
;;; c) comprueba-raices-arbol: sustituye nodos por 1 ó 0
;;; ------------------------------------------------------------

(define (comprueba-raices-arbol arbol)
  (construye-arbol
   (if (> (dato-arbol arbol) (suma-raices-hijos arbol)) 1 0)
   (map comprueba-raices-arbol (hijos-arbol arbol))))

(define raices_arbol3 (comprueba-raices-arbol arbol3))
(define raices_arbol4 (comprueba-raices-arbol arbol4))
(check-equal? raices_arbol3 '(1 (1) (1 (1) (1)) (1 (1))))
(check-equal? raices_arbol4 '(1 (1) (0 (1) (1)) (1 (1))))


;;; ============================================================
;;; EJERCICIO 5
;;; ============================================================

;;; Árbol para el apartado a) (según la figura del enunciado).
;;; Los ejemplos imponen:
;;;   - raíz = a
;;;   - 'a' tiene un hijo 'b' (y otros)
;;;   - 'b' tiene un hijo 'a' que SÍ es hoja (camino a-b-a termina en hoja)
;;;   - 'b' no es hoja (camino a-b solo llega a nodo interior)
;;;
;;;         a
;;;       / | \
;;;      b   d  e
;;;     / \     \
;;;    a   c      f

(define arbol-ej5a '(a (b (a) (c)) (d) (e (f))))

;;; ------------------------------------------------------------
;;; a) es-camino?: comprueba si la lista forma un camino raíz-hoja
;;; ------------------------------------------------------------

(define (es-camino? lista arbol)
  (cond
    ;; Último elemento de la lista: debe coincidir con la raíz y ser hoja
    ((null? (rest lista))
     (and (equal? (first lista) (dato-arbol arbol))
          (hoja-arbol? arbol)))
    ;; El primer elemento no coincide con la raíz: no es camino
    ((not (equal? (first lista) (dato-arbol arbol)))
     #f)
    ;; Coincide: seguimos buscando en alguno de los hijos
    (else
     (es-camino-bosque? (rest lista) (hijos-arbol arbol)))))

(define (es-camino-bosque? lista bosque)
  (if (null? bosque)
      #f
      (or (es-camino? lista (first bosque))
          (es-camino-bosque? lista (rest bosque)))))

(check-equal? (es-camino? '(a b a) arbol-ej5a) #t)
(check-equal? (es-camino? '(a b) arbol-ej5a)   #f)
(check-equal? (es-camino? '(a b a b) arbol-ej5a) #f)


;;; Árbol para el apartado b) (según la figura del enunciado).
;;; Los ejemplos exigen:
;;;   nivel 0: (1)      nivel 1: (2 6)
;;;   nivel 2: (3 5 7)  nivel 3: (4 2)
;;;
;;;           1
;;;          / \
;;;         2   6
;;;        / \   \
;;;       3   5   7
;;;       |   |
;;;       4   2

(define arbol-ej5b '(1 (2 (3 (4)) (5 (2))) (6 (7))))

;;; ------------------------------------------------------------
;;; b) nodos-nivel: lista de nodos en el nivel dado
;;; ------------------------------------------------------------

(define (nodos-nivel nivel arbol)
  (if (= nivel 0)
      (list (dato-arbol arbol))
      (nodos-nivel-bosque (- nivel 1) (hijos-arbol arbol))))

(define (nodos-nivel-bosque nivel bosque)
  (if (null? bosque)
      '()
      (append (nodos-nivel nivel (first bosque))
              (nodos-nivel-bosque nivel (rest bosque)))))

(check-equal? (nodos-nivel 0 arbol-ej5b) '(1))
(check-equal? (nodos-nivel 1 arbol-ej5b) '(2 6))
(check-equal? (nodos-nivel 2 arbol-ej5b) '(3 5 7))
(check-equal? (nodos-nivel 3 arbol-ej5b) '(4 2))


;;; ============================================================
;;; EJERCICIO 6
;;; ============================================================

(define arbolb1 '(20 (13 (2  () ())
                         (18 () ()))
                     (40 (25 () ())
                         (43 () ()))))

(define arbolb2 '(20 (13 (2  () ())
                         (22 () ()))
                     (40 (25 () ())
                         (43 () ()))))

;;; ------------------------------------------------------------
;;; a) ordenado-entre?: árbol binario ordenado con datos en [min, max]
;;; ------------------------------------------------------------
;;;
;;; Estrategia: propagamos cotas ajustadas recursivamente.
;;; El hijo izquierdo tiene datos en [min, raiz] y el derecho en [raiz, max].

(define (ordenado-entre? arbolb min max)
  (if (vacio-arbolb? arbolb)
      #t
      (and (>= (dato-arbolb arbolb) min)
           (<= (dato-arbolb arbolb) max)
           (ordenado-entre? (hijo-izq-arbolb arbolb) min (dato-arbolb arbolb))
           (ordenado-entre? (hijo-der-arbolb arbolb) (dato-arbolb arbolb) max))))

(check-equal? (ordenado-entre? arbolb1 0 50) #t)
(check-equal? (ordenado-entre? arbolb2 0 50) #f)
(check-equal? (ordenado-entre? arbolb1 0 30) #f)


;;; ------------------------------------------------------------
;;; b) ordenado-menor? y ordenado-mayor?
;;; ------------------------------------------------------------

(define (ordenado-menor? arbolb max)
  (ordenado-entre? arbolb -inf.0 max))

(define (ordenado-mayor? arbolb min)
  (ordenado-entre? arbolb min +inf.0))

(check-equal? (ordenado-menor? arbolb1 50) #t)
(check-equal? (ordenado-menor? arbolb1 40) #f)
(check-equal? (ordenado-menor? arbolb2 50) #f)
(check-equal? (ordenado-mayor? arbolb1 0)  #t)
(check-equal? (ordenado-mayor? arbolb1 20) #f)
(check-equal? (ordenado-mayor? arbolb2 0)  #f)


;;; ------------------------------------------------------------
;;; c) ordenado?
;;; ------------------------------------------------------------

(define (ordenado? arbolb)
  (ordenado-entre? arbolb -inf.0 +inf.0))

(check-equal? (ordenado? arbolb1) #t)
(check-equal? (ordenado? arbolb2) #f)


;;; ============================================================
;;; EJERCICIO 7
;;; ============================================================

;;; Árbol binario para los ejemplos del enunciado (según la figura):
;;;
;;;              9
;;;            /   \
;;;           6     15
;;;          /     /  \
;;;         3     12   20
;;;          \   /
;;;           4 10
;;;
;;; Verificación de los ejemplos:
;;;   '(= < < = > =): recoger 9, ir izq (6), ir izq (3),
;;;                   recoger 3, ir der (4), recoger 4  => '(9 3 4)
;;;   '(> = < < =)  : ir der (15), recoger 15, ir izq (12),
;;;                   ir izq (10), recoger 10            => '(15 10)

(define arbolb-ej7
  '(9  (6  (3 () (4 () ())) ())
       (15 (12 (10 () ()) ()) (20 () ()))))

;;; ------------------------------------------------------------
;;; a) camino-arbolb: recorre el árbol según el camino dado
;;; ------------------------------------------------------------

(define (camino-arbolb arbolb camino)
  (cond
    ((null? camino) '())
    ((equal? (first camino) '=)
     (cons (dato-arbolb arbolb)
           (camino-arbolb arbolb (rest camino))))
    ((equal? (first camino) '<)
     (camino-arbolb (hijo-izq-arbolb arbolb) (rest camino)))
    ((equal? (first camino) '>)
     (camino-arbolb (hijo-der-arbolb arbolb) (rest camino)))))

(check-equal? (camino-arbolb arbolb-ej7 '(= < < = > =)) '(9 3 4))
(check-equal? (camino-arbolb arbolb-ej7 '(> = < < =))   '(15 10))


;;; ------------------------------------------------------------
;;; b) inserta-ordenado: inserta n en un árbol binario ordenado
;;; ------------------------------------------------------------

(define (inserta-ordenado n a)
  (if (vacio-arbolb? a)
      (construye-arbolb n arbolb-vacio arbolb-vacio)
      (if (< n (dato-arbolb a))
          (construye-arbolb (dato-arbolb a)
                            (inserta-ordenado n (hijo-izq-arbolb a))
                            (hijo-der-arbolb a))
          (construye-arbolb (dato-arbolb a)
                            (hijo-izq-arbolb a)
                            (inserta-ordenado n (hijo-der-arbolb a))))))

(define a1 (inserta-ordenado 5 arbolb-vacio))
(define a2 (inserta-ordenado 4 a1))
(define a3 (inserta-ordenado 2 a2))
(define a4 (inserta-ordenado 6 a3))

;;;            5
;;;           / \
;;;          4   6
;;;         /
;;;        2

(check-equal? a1 '(5 () ()))
(check-equal? a2 '(5 (4 () ()) ()))
(check-equal? a3 '(5 (4 (2 () ()) ()) ()))
(check-equal? a4 '(5 (4 (2 () ()) ()) (6 () ())))
;;; El árbol resultante debe estar ordenado:
(check-equal? (ordenado? a4) #t)
