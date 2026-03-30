#lang racket
(require rackunit)

;;; ============================================================
;;; PRÁCTICA 1: Seminario de Scheme
;;; Lenguajes y Paradigmas de Programación, curso 2025-26
;;; ============================================================


;;; ============================================================
;;; EJERCICIO 1 - Expresiones numéricas y tipos simples
;;; ============================================================
;;; Resultados predichos (y comprobados):
;;;
;;; 3                                           => 3
;;; (+ 1 2)                                     => 3
;;; (+ 1 2 3 4)                                 => 10
;;; (+)                                         => 0
;;; (sqrt 25)                                   => 5
;;; (* (+ 2 3) 5)                               => 25
;;; +                                           => #<procedure:+>
;;; #\+                                         => #\+   (carácter +)
;;; "+"                                         => "+"   (cadena +)
;;; "hola"                                      => "hola"
;;;
;;; (+ (- 4 (* 3 (/ 4 2) 4)) 3)                => -17
;;; (* (+ (+ 2 3) 4) (* (* 3 3) 2))            => 126
;;; (* (+ 2 3 4 5) 3 (- 5 2 1))                => 72
;;; (+ (- (+ (- (+ 2 3) 5) 1) 2) 3)            => 2
;;; (- (sqrt (* 5 (+ 3 2))) (+ 1 1 1 1))       => 1.0
;;; (> (* 3 (+ 2 (+ 3 1)) (+ 1 1)) (+ (* 2 2) 3)) => #t
;;; (= (* 3 2) (+ 1 (+ 2 2) 1))                => #t
;;; (not (> (+ 3 2) 5))                         => #t
;;; (and (even? 2) (odd? (+ 3 2)))              => #t
;;; (remainder (+ 6 2) (+ 1 1))                 => 0


;;; ============================================================
;;; EJERCICIO 2 - Parejas
;;; ============================================================
;;; Resultados predichos (y comprobados):
;;;
;;; (cons 1 2)                                  => '(1 . 2)
;;; (car (cons 1 2))                            => 1
;;; (cdr (cons 1 2))                            => 2
;;; (cons (* 2 3) (/ 4 2))                      => '(6 . 2)
;;; (cons (+ 2 1) (if (> 2 3) "2" "3"))         => '(3 . "3")
;;;
;;; (car (car (cons (cons 1 2) 3)))             => 1
;;; (car (cons (cons 3 4) 2))                   => '(3 . 4)
;;; (cdr (cons (cons 3 4) 2))                   => 2
;;; (cdr (cons 1 (cons 2 3)))                   => '(2 . 3)
;;; (cdr (car (cons (cons 1 2) 3)))             => 2


;;; ============================================================
;;; EJERCICIO 3 - Listas
;;; ============================================================
;;; Resultados predichos (y comprobados):
;;;
;;; (list 1 2 3 4)                              => '(1 2 3 4)
;;; (rest (list 1 2 3 4))                       => '(2 3 4)
;;; (first '(1 2 3 4))                          => 1
;;; (first (list #t 1 "Hola"))                  => #t
;;; (first (rest (list 1 2 3 4)))               => 2
;;; (rest (rest '(1 2 3 4)))                    => '(3 4)
;;; (first (rest (rest (list 1 2 3 4))))        => 3
;;; (list (* 2 2) (+ 1 2) (/ 4 2))             => '(4 3 2)
;;; (list (+ 2 3) (- 3 4) (string-ref "hola" 3)) => '(5 -1 #\a)
;;;
;;; (cons 3 '(1 2 3))                           => '(3 1 2 3)
;;; (rest (cons #t (cons "Hola" (list 1))))     => '("Hola" 1)
;;; (first (list (list 1 2) 1 2 3 4))           => '(1 2)
;;; (first (rest '((1 2) 1 2)))                 => 1
;;; (cons '(1 2 3) '(4 5 6))                    => '((1 2 3) 4 5 6)
;;; (first (rest (list 1 2 3 4)))               => 2
;;; (rest (rest (list 1 2 3 4)))                => '(3 4)
;;; (first (rest (rest (rest '(1 2 3 4)))))     => 4


;;; ============================================================
;;; EJERCICIO 4 - Acceso a elementos de lista
;;; ============================================================

;;; a) Expresión que devuelve 3 de (list 1 2 3 4 5):
(check-equal? (first (rest (rest (list 1 2 3 4 5)))) 3)

;;; b) Expresión que devuelve (5) de (list 1 2 3 4 5):
(check-equal? (rest (rest (rest (rest (list 1 2 3 4 5))))) '(5))

;;; c) Expresión que devuelve 5 de (list 1 2 3 4 5):
(check-equal? (first (rest (rest (rest (rest (list 1 2 3 4 5)))))) 5)

;;; d) ¿Qué devuelve (first (rest (rest (list 1 (list 2 3) (list 4 5) 6))))?
;;;    => devuelve (list 4 5), es decir '(4 5)
(check-equal? (first (rest (rest (list 1 (list 2 3) (list 4 5) 6)))) '(4 5))

;;; e) ¿Qué devuelve (rest (rest '(1 (2 3) 4 5)))?
;;;    => devuelve '(4 5)
(check-equal? (rest (rest '(1 (2 3) 4 5))) '(4 5))


;;; ============================================================
;;; EJERCICIO 5 - Estructuras de control y definiciones
;;; ============================================================
;;; Resultados predichos (y comprobados):
;;;
;;; (equal? "hola" "hola")                      => #t
;;; (string-ref "pepe" 1)                       => #\e
;;; (substring "buenos dias" 1 4)               => "uen"
;;; (= "hola" "hola")                           => ERROR (= solo para números)
;;; (string-ref (substring "buenos dias" 2 5) 1)=> #\n
;;; (define pi 3.14159)                         => (define pi...)
;;; pi                                          => 3.14159
;;; "pi"                                        => "pi"
;;; (+ pi (+ pi pi))                            => 9.42477
;;; (+ (* pi pi) (- 2 pi pi pi pi))             => ~-2.01
;;;
;;; (+ (char->integer(integer->char 1200))
;;;    (char->integer #\A))                     => 1265
;;; (string-length (make-string 7 #\E))         => 7
;;; (define a 3)
;;; (define b (+ a 1))                          => b = 4
;;; (+ a b (* a b))                             => 3+4+12 = 19
;;; (= a b)                                     => #f
;;; (if (and (> a b) (< b (* a b))) b a)        => 3  (a, ya que (> 3 4) es #f)
;;; (cond ((= a 4) 6)
;;;       ((= b 4) (+ 6 7 a))
;;;       (else 25))                            => 16  (b=4, devuelve 6+7+3)
;;; (+ 2 (if (> b a) b a))                     => 6   (b>a, devuelve 2+4)
;;; (* (cond ((> a b) a) ((< a b) b) (else -1))
;;;    (+ a 1))                                 => 16  (b=4, 4*(3+1))
;;; ((if (< a b) + -) a b)                      => 7   (a<b -> +, 3+4)


;;; ============================================================
;;; EJERCICIO 6
;;; ============================================================

;;; ------------------------------------------------------------
;;; a) distancia: distancia euclídea entre dos puntos (parejas)
;;; ------------------------------------------------------------

(define (distancia p1 p2)
  (sqrt (+ (expt (- (car p2) (car p1)) 2)
           (expt (- (cdr p2) (cdr p1)) 2))))

(check-equal? (distancia '(0 . 0) '(0 . 10)) 10)
(check-equal? (distancia '(0 . 0) '(10 . 0)) 10)
(check-equal? (distancia '(0 . 0) '(10 . 10)) 14.142135623730951)


;;; ------------------------------------------------------------
;;; b) isosceles?: comprueba si tres vértices forman triángulo isósceles
;;;
;;; Condición: exactamente dos lados iguales.
;;;   - Los tres iguales => equilátero => NO isósceles
;;;   - Al menos dos iguales y no los tres => isósceles
;;;
;;; Se implementa con una única expresión booleana, sin if.
;;; ------------------------------------------------------------

(define (isosceles? p1 p2 p3)
  (and (not (= (distancia p1 p2) (distancia p1 p3) (distancia p2 p3)))
       (or (= (distancia p1 p2) (distancia p1 p3))
           (= (distancia p1 p2) (distancia p2 p3))
           (= (distancia p1 p3) (distancia p2 p3)))))

(check-equal? (isosceles? '(0 . 0) '(3 . 0) '(6 . 0)) #t)
(check-equal? (isosceles? '(2 . 2) '(4 . 0) '(0 . 0)) #t)
(check-equal? (isosceles? '(0 . 0) '(0 . 0) '(0 . 0)) #f)
(check-equal? (isosceles? '(0 . 0) '(1 . 1) '(3 . 2)) #f)
