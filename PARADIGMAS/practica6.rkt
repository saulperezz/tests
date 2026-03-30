#lang racket
(require rackunit)
(require "lpp.rkt")
(require 2htdp/image)

;;; ============================================================
;;; PRÁCTICA 6: Procedimientos recursivos e iterativos
;;; Lenguajes y Paradigmas de Programación, curso 2025-26
;;; ============================================================


;;; ============================================================
;;; EJERCICIO 1
;;; ============================================================

;;; ------------------------------------------------------------
;;; a) concat e concat-iter: concatena lista de cadenas (iterativo)
;;; ------------------------------------------------------------

(define (concat-iter lista resultado)
  (if (null? lista)
      resultado
      (concat-iter (rest lista)
                   (string-append resultado (first lista)))))

(define (concat lista)
  (concat-iter lista ""))

(check-equal? (concat '("hola" "y" "adiós"))          "holayadiós")
(check-equal? (concat-iter '("hola" "y" "adiós") "")  "holayadiós")
(check-equal? (concat '())                             "")
(check-equal? (concat '("solo"))                       "solo")
(check-equal? (concat '("a" "b" "c" "d"))              "abcd")

;;; ------------------------------------------------------------
;;; b) min-max e min-max-iter: mínimo y máximo de una lista (iterativo)
;;; ------------------------------------------------------------

(define (min-max-iter lista resultado)
  (if (null? lista)
      resultado
      (min-max-iter (rest lista)
                    (cons (min (car resultado) (first lista))
                          (max (cdr resultado) (first lista))))))

(define (min-max lista)
  (min-max-iter (rest lista)
                (cons (first lista) (first lista))))

(check-equal? (min-max '(2 5 9 12 5 0 4))          '(0 . 12))
(check-equal? (min-max '(3 2 -8 4 10 0))            '(-8 . 10))
(check-equal? (min-max-iter '(5 9 12 -2 5 0 4) '(2 . 2)) '(-2 . 12))
(check-equal? (min-max '(7))                         '(7 . 7))
(check-equal? (min-max '(1 1 1))                     '(1 . 1))


;;; ============================================================
;;; EJERCICIO 2
;;; ============================================================

;;; ------------------------------------------------------------
;;; a) expande-pareja y expande-parejas con recursión por la cola
;;; ------------------------------------------------------------

(define (expande-pareja-iter par resultado)
  (if (= (cdr par) 0)
      resultado
      (expande-pareja-iter (cons (car par) (- (cdr par) 1))
                           (cons (car par) resultado))))

(define (expande-pareja par)
  (expande-pareja-iter par '()))

;;; expande-lista-iter acumula la expansión de todas las parejas en orden
;;; Procesamos la lista de parejas de derecha a izquierda para que el
;;; resultado quede en el orden correcto.
(define (expande-lista-iter lista-parejas resultado)
  (if (null? lista-parejas)
      resultado
      (expande-lista-iter (rest lista-parejas)
                          (append (expande-pareja (first lista-parejas))
                                  resultado))))

(define (expande-parejas . args)
  ;; Procesamos de derecha a izquierda para mantener el orden
  (expande-lista-iter (reverse args) '()))

(check-equal? (expande-pareja (cons 'a 4)) '(a a a a))
(check-equal? (expande-pareja '(#t . 5))   '(#t #t #t #t #t))
(check-equal? (expande-pareja '(x . 0))    '())

(check-equal? (expande-parejas '(#t . 3) '("LPP" . 2) '(b . 4))
              '(#t #t #t "LPP" "LPP" b b b b))
(check-equal? (expande-parejas) '())

;;; ------------------------------------------------------------
;;; b) rotar: mueve k elementos de la cabeza al final (iterativo)
;;;
;;; Usamos la propia lista como acumulador del resultado:
;;; cada llamada mueve el primer elemento al final, k veces.
;;; ------------------------------------------------------------

(define (rotar k lista)
  (if (= k 0)
      lista
      (rotar (- k 1)
             (append (rest lista) (list (first lista))))))

(check-equal? (rotar 4 '(a b c d e f g)) '(e f g a b c d))
(check-equal? (rotar 0 '(a b c d))       '(a b c d))
(check-equal? (rotar 2 '(1 2 3 4 5))     '(3 4 5 1 2))
(check-equal? (rotar 3 '(a b c))          '(a b c))


;;; ============================================================
;;; EJERCICIO 3
;;; ============================================================

;;; ------------------------------------------------------------
;;; a) mi-foldl: versión iterativa (por la cola) de foldl
;;; ------------------------------------------------------------

(define (mi-foldl f resultado lista)
  (if (null? lista)
      resultado
      (mi-foldl f
                (f (first lista) resultado)
                (rest lista))))

(check-equal? (mi-foldl string-append "****" '("hola" "que" "tal"))
              "talquehola****")
(check-equal? (mi-foldl cons '() '(1 2 3 4))
              '(4 3 2 1))
(check-equal? (mi-foldl + 0 '(1 2 3 4 5))  15)
(check-equal? (mi-foldl * 1 '(1 2 3 4 5)) 120)

;;; ------------------------------------------------------------
;;; b) binario-a-decimal: algoritmo iterativo con lista de bits
;;; ------------------------------------------------------------

(define (binario-a-decimal-iter lista-bits resultado)
  (if (null? lista-bits)
      resultado
      (binario-a-decimal-iter (rest lista-bits)
                              (+ (* resultado 2) (first lista-bits)))))

(define (binario-a-decimal lista-bits)
  (binario-a-decimal-iter lista-bits 0))

(check-equal? (binario-a-decimal '(1 1 1 1)) 15)
(check-equal? (binario-a-decimal '(1 1 0))    6)
(check-equal? (binario-a-decimal '(1 0))       2)
(check-equal? (binario-a-decimal '(0))          0)
(check-equal? (binario-a-decimal '(1 0 1 1))   11)


;;; ============================================================
;;; EJERCICIO 4 - Pascal con memoization
;;; ============================================================

;;; El triángulo de Pascal: C(n,k) = C(n-1,k-1) + C(n-1,k)
;;; Casos base: C(n,0) = 1  y  C(n,n) = 1

(define diccionario (make-dic))

(define (pascal-memo n k dic)
  (cond
    ((or (= k 0) (= k n)) 1)
    ((key-exists? (cons n k) dic)
     (get (cons n k) dic))
    (else
     (put (cons n k)
          (+ (pascal-memo (- n 1) (- k 1) dic)
             (pascal-memo (- n 1) k       dic))
          dic))))

(check-equal? (pascal-memo 8  4 diccionario)  70)
(check-equal? (pascal-memo 40 20 diccionario) 137846528820)
(check-equal? (pascal-memo 0  0 diccionario)   1)
(check-equal? (pascal-memo 5  2 diccionario)  10)


;;; ============================================================
;;; EJERCICIO 5 - Figuras recursivas
;;; ============================================================

;;; ------------------------------------------------------------
;;; a) Curva de Koch
;;;
;;; La curva de Koch de nivel n y longitud l se construye uniendo:
;;;   - Koch(n-1, l/3)  original
;;;   - Koch(n-1, l/3)  rotada -60°
;;;   - Koch(n-1, l/3)  rotada +60°
;;;   - Koch(n-1, l/3)  original
;;;
;;; La alineación es: beside/align "bottom"
;;; Caso base (nivel 0): una línea horizontal de longitud trazo.
;;; ------------------------------------------------------------

(define (koch nivel trazo)
  (if (= nivel 0)
      (rectangle trazo 1 "solid" "black")
      (beside/align "bottom"
                    (koch (- nivel 1) (/ trazo 3))
                    (rotate 60  (koch (- nivel 1) (/ trazo 3)))
                    (rotate -60 (koch (- nivel 1) (/ trazo 3)))
                    (koch (- nivel 1) (/ trazo 3)))))

;;; ------------------------------------------------------------
;;; b) Copo de nieve de Koch
;;;
;;; El copo de nieve se forma con tres curvas de Koch:
;;;  - la primera en posición original
;;;  - la segunda rotada 120°
;;;  - la tercera rotada 240°
;;; Se colocan formando un triángulo equilátero.
;;; ------------------------------------------------------------

(define (copo-nieve nivel trazo)
  (above
   (beside/align "bottom" (rotate 180 (koch nivel trazo)) (rotate 180 (koch nivel trazo)))
   (beside/align "top"    (koch nivel trazo)               (koch nivel trazo))))


;;; ============================================================
;;; EJERCICIO 6 - Alfombra de Sierpinski
;;;
;;; La alfombra de Sierpinski de lado tam se construye poniendo
;;; 8 alfombras de lado tam/3 alrededor de un cuadrado vacío central.
;;;
;;; Distribución (3x3 de subtam, el centro es hueco):
;;;
;;;  [ A ][ A ][ A ]
;;;  [ A ][ . ][ A ]
;;;  [ A ][ A ][ A ]
;;;
;;; Caso base (tam < umbral): círculo sin relleno de diámetro tam.
;;; ============================================================

(define UMBRAL 20)

(define (fila-sierpinski-solida tam)
  (beside (alfombra-sierpinski (/ tam 3))
          (alfombra-sierpinski (/ tam 3))
          (alfombra-sierpinski (/ tam 3))))

(define (fila-sierpinski-hueco tam)
  (beside (alfombra-sierpinski (/ tam 3))
          (square (/ tam 3) "solid" "white")
          (alfombra-sierpinski (/ tam 3))))

(define (alfombra-sierpinski tam)
  (if (< tam UMBRAL)
      (circle (/ tam 2) "outline" "black")
      (above (fila-sierpinski-solida tam)
             (fila-sierpinski-hueco  tam)
             (fila-sierpinski-solida tam))))
