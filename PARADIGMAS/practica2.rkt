#lang racket
(require rackunit)

;;; ============================================================
;;; PRÁCTICA 2: Programación funcional en Scheme
;;; Lenguajes y Paradigmas de Programación, curso 2025-26
;;; ============================================================


;;; ============================================================
;;; EJERCICIO 1
;;; ============================================================

;;; ------------------------------------------------------------
;;; a) binario-a-decimal: 4 bits -> número decimal
;;; ------------------------------------------------------------

(define (binario-a-decimal b3 b2 b1 b0)
  (+ (* b3 (expt 2 3))
     (* b2 (expt 2 2))
     (* b1 (expt 2 1))
     (* b0 (expt 2 0))))

(check-equal? (binario-a-decimal 1 1 1 1) 15)
(check-equal? (binario-a-decimal 0 1 1 0) 6)
(check-equal? (binario-a-decimal 0 0 1 0) 2)
(check-equal? (binario-a-decimal 0 0 0 0) 0)
(check-equal? (binario-a-decimal 1 0 0 0) 8)

;;; ------------------------------------------------------------
;;; b) binario-a-hexadecimal: 4 bits -> carácter hexadecimal
;;;
;;; Estrategia:
;;;   - Convertir primero a decimal con binario-a-decimal
;;;   - Si decimal <= 9: el carácter es (integer->char (+ decimal (char->integer #\0)))
;;;   - Si decimal >= 10: el carácter es (integer->char (+ (- decimal 10) (char->integer #\A)))
;;; ------------------------------------------------------------

(define (decimal-a-hexadecimal n)
  (if (<= n 9)
      (integer->char (+ n (char->integer #\0)))
      (integer->char (+ (- n 10) (char->integer #\A)))))

(define (binario-a-hexadecimal b3 b2 b1 b0)
  (decimal-a-hexadecimal (binario-a-decimal b3 b2 b1 b0)))

(check-equal? (binario-a-hexadecimal 1 1 1 1) #\F)
(check-equal? (binario-a-hexadecimal 0 1 1 0) #\6)
(check-equal? (binario-a-hexadecimal 1 0 1 0) #\A)
(check-equal? (binario-a-hexadecimal 0 0 0 0) #\0)
(check-equal? (binario-a-hexadecimal 1 0 0 1) #\9)
(check-equal? (binario-a-hexadecimal 1 1 0 0) #\C)


;;; ============================================================
;;; EJERCICIO 2 - Cifrado César
;;; ============================================================

;;; Devuelve el índice 0..25 de un carácter minúscula
(define (encuentra-indice char)
  (- (char->integer char) (char->integer #\a)))

;;; Devuelve el carácter minúscula correspondiente al índice 0..25
(define (encuentra-caracter indice)
  (integer->char (+ indice (char->integer #\a))))

;;; Comprueba si un carácter está entre #\a y #\z
(define (entre-az? char)
  (and (char>=? char #\a) (char<=? char #\z)))

;;; Rota un índice 0..25 aplicando el desplazamiento (puede ser negativo)
(define (rota-indice indice desplazamiento)
  (modulo (+ indice desplazamiento) 26))

;;; Cifra un carácter minúscula con el desplazamiento dado
(define (cifra-caracter-minuscula char desplazamiento)
  (encuentra-caracter (rota-indice (encuentra-indice char) desplazamiento)))

;;; Cifra un carácter:
;;;   - Si es minúscula: cifra directamente
;;;   - Si es mayúscula: baja a minúscula, cifra y sube a mayúscula
;;;   - Si no es letra inglesa: devuelve el carácter sin cambios
(define (cifra-caracter char desplazamiento)
  (cond
    ((entre-az? char)
     (cifra-caracter-minuscula char desplazamiento))
    ((and (char-upper-case? char) (entre-az? (char-downcase char)))
     (char-upcase (cifra-caracter-minuscula (char-downcase char) desplazamiento)))
    (else char)))

;;; Descifra: es cifrar con el desplazamiento negado
(define (descifra-caracter char desplazamiento)
  (cifra-caracter char (- desplazamiento)))

;;; Tests de funciones auxiliares
(check-equal? (encuentra-indice #\a)  0)
(check-equal? (encuentra-indice #\b)  1)
(check-equal? (encuentra-indice #\m) 12)
(check-equal? (encuentra-indice #\z) 25)

(check-equal? (encuentra-caracter  0) #\a)
(check-equal? (encuentra-caracter  1) #\b)
(check-equal? (encuentra-caracter 12) #\m)
(check-equal? (encuentra-caracter 25) #\z)

(check-equal? (entre-az? #\a) #t)
(check-equal? (entre-az? #\m) #t)
(check-equal? (entre-az? #\z) #t)
(check-equal? (entre-az? #\`) #f)
(check-equal? (entre-az? #\{) #f)

(check-equal? (rota-indice  4  12) 16)
(check-equal? (rota-indice  4  24)  2)
(check-equal? (rota-indice  4  -5) 25)

;;; Tests de cifra-caracter y descifra-caracter
(check-equal? (cifra-caracter #\c   5) #\h)
(check-equal? (cifra-caracter #\z  -1) #\y)
(check-equal? (cifra-caracter #\j  40) #\x)
(check-equal? (cifra-caracter #\D   3) #\G)
(check-equal? (cifra-caracter #\ñ   3) #\ñ)  ; no es letra inglesa => sin cambios

(check-equal? (descifra-caracter #\d   3) #\a)
(check-equal? (descifra-caracter #\y  -1) #\z)
(check-equal? (descifra-caracter #\x  40) #\j)
(check-equal? (descifra-caracter #\G   3) #\D)
(check-equal? (descifra-caracter #\tab 3) #\tab)  ; carácter no letra => sin cambios


;;; ============================================================
;;; EJERCICIO 3 - Menor de tres
;;; ============================================================

;;; Versión 1: usando if
(define (menor-de-tres n1 n2 n3)
  (if (< n1 n2)
      (if (< n1 n3) n1 n3)
      (if (< n2 n3) n2 n3)))

;;; Función auxiliar para la versión 2
(define (menor x y)
  (if (< x y) x y))

;;; Versión 2: composición de llamadas a menor, sin if en la función principal
(define (menor-de-tres-v2 n1 n2 n3)
  (menor n1 (menor n2 n3)))

(check-equal? (menor-de-tres 2 8 1) 1)
(check-equal? (menor-de-tres 3 0 3) 0)
(check-equal? (menor-de-tres 5 5 5) 5)
(check-equal? (menor-de-tres 10 1 100) 1)

(check-equal? (menor-de-tres-v2 2 8 1) 1)
(check-equal? (menor-de-tres-v2 3 0 3) 0)
(check-equal? (menor-de-tres-v2 5 5 5) 5)
(check-equal? (menor-de-tres-v2 10 1 100) 1)


;;; ============================================================
;;; EJERCICIO 4 - Modelo de sustitución
;;; ============================================================

;;; ------------------------------------------------------------
;;; a) Evaluación de (g (f (+ 2 1)) (+ 1 1))
;;;    con (define (f x) (cons x 2))
;;;        (define (g x y) (cons x y))
;;;
;;; ---- ORDEN APLICATIVO (evalúa argumentos antes de sustituir) ----
;;;
;;; (g (f (+ 2 1)) (+ 1 1))
;;;   => (g (f 3) (+ 1 1))          ; se evalúa (+ 2 1) => 3
;;;   => (g (f 3) 2)                 ; se evalúa (+ 1 1) => 2
;;;   => (g (cons 3 2) 2)            ; se evalúa (f 3) => (cons 3 2)
;;;   => (cons (cons 3 2) 2)         ; se sustituye en g
;;;   => ((3 . 2) . 2)               ; resultado final
;;;
;;; ---- ORDEN NORMAL (sustituye primero, evalúa al final) ----
;;;
;;; (g (f (+ 2 1)) (+ 1 1))
;;;   => (cons (f (+ 2 1)) (+ 1 1))  ; se expande g
;;;   => (cons (cons (+ 2 1) 2) (+ 1 1)) ; se expande f
;;;   => (cons (cons 3 2) (+ 1 1))   ; se evalúa (+ 2 1) => 3
;;;   => (cons (cons 3 2) 2)          ; se evalúa (+ 1 1) => 2
;;;   => ((3 . 2) . 2)                ; resultado final
;;;
;;; Ambos órdenes producen el mismo resultado: '((3 . 2) . 2)
;;; ------------------------------------------------------------

;;; ------------------------------------------------------------
;;; b) Evaluación de (func-2 0 (func-1 10))
;;;    con (define (func-1 x) (/ x 0))
;;;        (define (func-2 x y) (if (= x 0) 0 y))
;;;
;;; ---- ORDEN APLICATIVO ----
;;;
;;; (func-2 0 (func-1 10))
;;;   => (func-2 0 (/ 10 0))    ; se evalúa (func-1 10)
;;;   => ERROR: división por cero   ; (/ 10 0) provoca un error
;;;   El programa termina con error antes de poder evaluar func-2.
;;;
;;; ---- ORDEN NORMAL ----
;;;
;;; (func-2 0 (func-1 10))
;;;   => (if (= 0 0) 0 (func-1 10))  ; se expande func-2
;;;   => (if #t 0 (func-1 10))        ; se evalúa (= 0 0) => #t
;;;   => 0                             ; la rama #t devuelve 0
;;;   (func-1 10) NUNCA se evalúa porque if cortocircuita.
;;;   Resultado final: 0
;;;
;;; Conclusión: con orden normal el programa devuelve 0 sin error,
;;; con orden aplicativo produce un error de división por cero.
;;; ------------------------------------------------------------


;;; ============================================================
;;; EJERCICIO 5 - cadenas-mayores
;;; ============================================================

;;; Recibe 2 listas de 3 cadenas y devuelve la lista con las cadenas
;;; de mayor longitud en cada posición (en empate gana lista1)
(define (cadenas-mayores lista1 lista2)
  (list (if (>= (string-length (first lista1))
                (string-length (first lista2)))
            (first lista1)
            (first lista2))
        (if (>= (string-length (second lista1))
                (string-length (second lista2)))
            (second lista1)
            (second lista2))
        (if (>= (string-length (third lista1))
                (string-length (third lista2)))
            (third lista1)
            (third lista2))))

(check-equal? (cadenas-mayores '("hola" "que" "tal")   '("meme" "y" "adios"))
              '("hola" "que" "adios"))
(check-equal? (cadenas-mayores '("esto" "es" "lpp")    '("hoy" "hay" "clase"))
              '("esto" "hay" "clase"))
(check-equal? (cadenas-mayores '("aa" "bb" "cc")        '("aa" "bb" "cc"))
              '("aa" "bb" "cc"))   ; empate => gana lista1
(check-equal? (cadenas-mayores '("x" "y" "z")           '("abc" "def" "ghi"))
              '("abc" "def" "ghi"))


;;; ============================================================
;;; EJERCICIO 6
;;; ============================================================

;;; ------------------------------------------------------------
;;; a) Representación de cartas de la baraja francesa
;;; ------------------------------------------------------------

;;; Devuelve el palo como símbolo dado el carácter del palo
(define (obten-palo char)
  (cond
    ((equal? char #\♠) 'Picas)
    ((equal? char #\♣) 'Tréboles)
    ((equal? char #\♥) 'Corazones)
    ((equal? char #\♦) 'Diamantes)))

;;; Devuelve el valor numérico dado el carácter del número/figura
(define (obten-valor char)
  (cond
    ((equal? char #\A) 1)
    ((equal? char #\J) 10)
    ((equal? char #\Q) 11)
    ((equal? char #\K) 12)
    (else (- (char->integer char) (char->integer #\0)))))

;;; Devuelve una pareja (valor . palo) dado un símbolo de carta
(define (carta simbolo)
  (cons (obten-valor (string-ref (symbol->string simbolo) 0))
        (obten-palo  (string-ref (symbol->string simbolo) 1))))

(define tres-de-picas    '3♠)
(define as-de-corazones  'A♥)
(define jota-de-diamantes 'J♦)

;;; Tests obten-palo y obten-valor
(check-equal? (obten-palo #\♠) 'Picas)
(check-equal? (obten-palo #\♥) 'Corazones)
(check-equal? (obten-palo #\♣) 'Tréboles)
(check-equal? (obten-palo #\♦) 'Diamantes)
(check-equal? (obten-valor #\3) 3)
(check-equal? (obten-valor #\J) 10)
(check-equal? (obten-valor #\A) 1)
(check-equal? (obten-valor #\K) 12)

;;; Tests carta
(check-equal? (carta tres-de-picas)      '(3  . Picas))
(check-equal? (carta as-de-corazones)    '(1  . Corazones))
(check-equal? (carta jota-de-diamantes)  '(10 . Diamantes))
(check-equal? (carta 'K♣)               '(12 . Tréboles))
(check-equal? (carta 'Q♥)               '(11 . Corazones))

;;; ------------------------------------------------------------
;;; b) jugada-mano: clasifica una mano de 3 cartas
;;; ------------------------------------------------------------

;;; Devuelve el valor numérico de un símbolo de carta
(define (valor-carta simbolo)
  (car (carta simbolo)))

(define (jugada-mano carta1 carta2 carta3)
  (cond
    ((= (valor-carta carta1) (valor-carta carta2) (valor-carta carta3))
     (string-append "trío de " (number->string (valor-carta carta1))))
    ((= (valor-carta carta1) (valor-carta carta2))
     (string-append "pareja de " (number->string (valor-carta carta1))))
    ((= (valor-carta carta1) (valor-carta carta3))
     (string-append "pareja de " (number->string (valor-carta carta1))))
    ((= (valor-carta carta2) (valor-carta carta3))
     (string-append "pareja de " (number->string (valor-carta carta2))))
    (else "nada")))

(check-equal? (jugada-mano '3♥ '3♣ '3♥) "trío de 3")
(check-equal? (jugada-mano 'K♦ '7♠ 'K♥) "pareja de 12")
(check-equal? (jugada-mano '5♣ '4♣ '6♣) "nada")
(check-equal? (jugada-mano 'A♠ 'A♦ '7♣) "pareja de 1")
(check-equal? (jugada-mano 'Q♠ 'Q♦ 'Q♣) "trío de 11")
