#lang racket
(require rackunit)
(require "lpp.rkt")

;;; ============================================================
;;; PRÁCTICA 3: Recursión, parejas y diagramas box-and-pointer
;;; Lenguajes y Paradigmas de Programación, curso 2025-26
;;; ============================================================

;;; Función auxiliar de la práctica 2 necesaria aquí
(define (menor x y)
  (if (< x y) x y))

;;; Funciones de carta de la práctica 2 necesarias en ejercicio 5
(define (obten-valor char)
  (cond
    ((equal? char #\A) 1)
    ((equal? char #\J) 10)
    ((equal? char #\Q) 11)
    ((equal? char #\K) 12)
    (else (- (char->integer char) (char->integer #\0)))))

(define (obten-palo char)
  (cond
    ((equal? char #\♠) 'Picas)
    ((equal? char #\♣) 'Tréboles)
    ((equal? char #\♥) 'Corazones)
    ((equal? char #\♦) 'Diamantes)))

(define (valor-carta simbolo)
  (obten-valor (string-ref (symbol->string simbolo) 0)))

;;; Función cifra-caracter de la práctica 2
(define (encuentra-indice char)
  (- (char->integer char) (char->integer #\a)))
(define (encuentra-caracter indice)
  (integer->char (+ indice (char->integer #\a))))
(define (entre-az? char)
  (and (char>=? char #\a) (char<=? char #\z)))
(define (rota-indice indice desplazamiento)
  (modulo (+ indice desplazamiento) 26))
(define (cifra-caracter-minuscula char desplazamiento)
  (encuentra-caracter (rota-indice (encuentra-indice char) desplazamiento)))
(define (cifra-caracter char desplazamiento)
  (cond
    ((entre-az? char)
     (cifra-caracter-minuscula char desplazamiento))
    ((and (char-upper-case? char) (entre-az? (char-downcase char)))
     (char-upcase (cifra-caracter-minuscula (char-downcase char) desplazamiento)))
    (else char)))


;;; ============================================================
;;; EJERCICIO 1
;;; ============================================================

;;; ------------------------------------------------------------
;;; a.1) minimo: mínimo de una lista de números (recursivo)
;;; ------------------------------------------------------------

(define (minimo lista)
  (if (null? (rest lista))
      (first lista)
      (menor (first lista) (minimo (rest lista)))))

(check-equal? (minimo '(2))         2)
(check-equal? (minimo '(1 8 6 4 3)) 1)
(check-equal? (minimo '(1 -1 3 -6 4)) -6)
(check-equal? (minimo '(5 5 5))     5)
(check-equal? (minimo '(10))        10)

;;; ------------------------------------------------------------
;;; a.2) Análisis de la recursión en (minimo '(1 8 6 4 3))
;;;
;;; 1. ¿Qué lista se pasa como parámetro a la primera llamada recursiva?
;;;    => '(8 6 4 3)   [es (rest '(1 8 6 4 3))]
;;;
;;; 2. ¿Qué devuelve esa llamada recursiva?
;;;    => 3  [el mínimo de '(8 6 4 3) es 3]
;;;
;;; 3. ¿Con qué argumentos se llama a la función menor que devuelve el resultado final?
;;;    => (menor 1 3)  [primer elemento=1, resultado recursión=3]
;;;    => devuelve 1
;;; ------------------------------------------------------------

;;; ------------------------------------------------------------
;;; b) concatena: lista de caracteres -> cadena
;;; ------------------------------------------------------------

(define (concatena lista-chars)
  (if (null? lista-chars)
      ""
      (string-append (string (first lista-chars))
                     (concatena (rest lista-chars)))))

(check-equal? (concatena '()) "")
(check-equal? (concatena '(#\H #\o #\l #\a)) "Hola")
(check-equal? (concatena '(#\S #\c #\h #\e #\m #\e #\space #\m #\o #\l #\a))
              "Scheme mola")
(check-equal? (concatena '(#\a #\b #\c)) "abc")

;;; ------------------------------------------------------------
;;; c) cifra-cadena / descifra-cadena usando recursión
;;; ------------------------------------------------------------

(define (cifra-cadena cad desplazamiento)
  (concatena (map (lambda (c) (cifra-caracter c desplazamiento))
                  (string->list cad))))

(define (descifra-cadena cad desplazamiento)
  (cifra-cadena cad (- desplazamiento)))

(check-equal?
 (cifra-cadena "En un lugar de la Mancha, de cuyo nombre no quiero acordarme" 10)
 "Ox ex veqkb no vk Wkxmrk, no meiy xywlbo xy aesoby kmybnkbwo")

(check-equal?
 (descifra-cadena "Ox ex veqkb no vk Wkxmrk, no meiy xywlbo xy aesoby kmybnkbwo" 10)
 "En un lugar de la Mancha, de cuyo nombre no quiero acordarme")

(check-equal? (descifra-cadena (cifra-cadena "Hola Mundo!" 7) 7) "Hola Mundo!")

;;; ------------------------------------------------------------
;;; d) contiene? y str-contiene?
;;; ------------------------------------------------------------

(define (contiene? lista elemento)
  (cond
    ((null? lista) #f)
    ((equal? (first lista) elemento) #t)
    (else (contiene? (rest lista) elemento))))

(define (str-contiene? cadena char)
  (contiene? (string->list cadena) char))

(check-equal? (contiene? '(algo 3 #\A) 3)      #t)
(check-equal? (contiene? '(algo 3 #\A) "algo") #f)
(check-equal? (contiene? '(algo 3 #\A) 'algo)  #t)
(check-equal? (contiene? '() 5)                #f)

(check-equal? (str-contiene? "Hola" #\o)               #t)
(check-equal? (str-contiene? "Esto es una frase" #\space) #t)
(check-equal? (str-contiene? "Hola" #\h)               #f)


;;; ============================================================
;;; EJERCICIO 2
;;; ============================================================

;;; ------------------------------------------------------------
;;; a) todos-iguales?: todos los elementos de la lista son iguales
;;; ------------------------------------------------------------

(define (todos-iguales? lista)
  (cond
    ((null? lista)             #t)
    ((null? (rest lista))      #t)
    ((equal? (first lista) (second lista))
     (todos-iguales? (rest lista)))
    (else #f)))

(check-equal? (todos-iguales? '())              #t)
(check-equal? (todos-iguales? '(a))             #t)
(check-equal? (todos-iguales? '(a a a a a a a)) #t)
(check-equal? (todos-iguales? '((a b) (a b) (a b))) #t)
(check-equal? (todos-iguales? '(a a a a a b))   #f)

;;; ------------------------------------------------------------
;;; b) todos-distintos?: todos los elementos son distintos
;;; ------------------------------------------------------------

(define (todos-distintos? lista)
  (cond
    ((null? lista)        #t)
    ((null? (rest lista)) #t)
    ((contiene? (rest lista) (first lista)) #f)
    (else (todos-distintos? (rest lista)))))

(check-equal? (todos-distintos? '())        #t)
(check-equal? (todos-distintos? '(a))       #t)
(check-equal? (todos-distintos? '(a b c))   #t)
(check-equal? (todos-distintos? '(a b c a)) #f)

;;; ------------------------------------------------------------
;;; c) solo-dos-iguales?: exactamente un par de elementos iguales,
;;;    el resto todos distintos
;;;
;;; Estrategia: si el primer elemento aparece en el resto,
;;;   comprobamos que no vuelve a aparecer en el resto del resto,
;;;   y que los demás son todos distintos entre sí.
;;;   Si el primer elemento NO aparece en el resto, pasamos al siguiente.
;;; ------------------------------------------------------------

;;; Cuenta cuántas veces aparece elem en lista
(define (cuenta-veces elem lista)
  (cond
    ((null? lista) 0)
    ((equal? (first lista) elem)
     (+ 1 (cuenta-veces elem (rest lista))))
    (else (cuenta-veces elem (rest lista)))))

;;; Devuelve la lista sin todas las ocurrencias de elem
(define (quita-todos elem lista)
  (cond
    ((null? lista) '())
    ((equal? (first lista) elem) (quita-todos elem (rest lista)))
    (else (cons (first lista) (quita-todos elem (rest lista))))))

(define (solo-dos-iguales? lista)
  (cond
    ;; Listas de 0 o 1 elemento: imposible tener exactamente dos iguales
    ((null? lista)        #f)
    ((null? (rest lista)) #f)
    ;; El primer elemento aparece exactamente una vez más en el resto
    ((= (cuenta-veces (first lista) (rest lista)) 1)
     ;; El resto (sin el primer elemento) debe tener todos distintos
     ;; y ninguno igual al primero (ya está cubierto por cuenta-veces=1)
     (todos-distintos? (quita-todos (first lista) (rest lista))))
    ;; El primer elemento aparece más de una vez en el resto => más de dos iguales
    ((> (cuenta-veces (first lista) (rest lista)) 1)
     #f)
    ;; El primer elemento no aparece en el resto: seguimos mirando
    (else (solo-dos-iguales? (rest lista)))))

(check-equal? (solo-dos-iguales? '())           #f)
(check-equal? (solo-dos-iguales? '(a))          #f)
(check-equal? (solo-dos-iguales? '(a b c a))    #t)
(check-equal? (solo-dos-iguales? '(a b c b a a)) #f)
(check-equal? (solo-dos-iguales? '(a b c a a))  #f)
(check-equal? (solo-dos-iguales? '(a b c a b))  #f)


;;; ============================================================
;;; EJERCICIO 3 - Diagramas caja y puntero
;;; ============================================================

;;; ------------------------------------------------------------
;;; a.1) Definición de p1 a partir del diagrama:
;;;
;;;  p1 apunta a una lista cuyo primer elemento es la lista (a b),
;;;  el segundo elemento es la pareja (c . d), y el tercer elemento es e.
;;;
;;;  Estructura: ( (a b)  (c . d)  e )
;;;
;;;  Usando el mínimo de list/cons (sin quote):
;;; ------------------------------------------------------------

(define p1 (list (list 'a 'b) (cons 'c 'd) 'e))

;;; a.2) Expresiones que devuelven b y d a partir de p1:
;;;   b es el segundo elemento de la sublista (a b), es decir,
;;;     el second del first de p1:
(check-equal? (second (first p1)) 'b)

;;;   d es el cdr de la pareja (c . d), que está en la segunda posición de p1:
(check-equal? (cdr (second p1)) 'd)

;;; ------------------------------------------------------------
;;; b.1) Definición de p2 a partir del diagrama:
;;;
;;;  p2 apunta a una pareja cuyo car es la lista (a b c)
;;;  y cuyo cdr es otra pareja cuyo car es d y cuyo cdr es la lista (e).
;;;
;;;  Estructura: ( (a b c) d e )  representada como:
;;;    (cons (list 'a 'b 'c) (cons 'd (list 'e)))
;;; ------------------------------------------------------------

(define p2 (cons (list 'a 'b 'c) (cons 'd (list 'e))))

;;; b.2) Expresiones que devuelven c y e a partir de p2:
;;;   c es el tercer elemento de la lista (a b c), que es el car de p2:
(check-equal? (third (car p2)) 'c)

;;;   e es el first de la lista (e), que está como cdr del cdr de p2:
(check-equal? (first (cdr (cdr p2))) 'e)


;;; ============================================================
;;; EJERCICIO 4
;;; ============================================================

;;; contar-datos-iguales: cuenta parejas con car = cdr
(define (contar-datos-iguales lista-parejas)
  (cond
    ((null? lista-parejas) 0)
    ((equal? (car (first lista-parejas))
             (cdr (first lista-parejas)))
     (+ 1 (contar-datos-iguales (rest lista-parejas))))
    (else (contar-datos-iguales (rest lista-parejas)))))

(check-equal? (contar-datos-iguales
               (list (cons 2 3) (cons "hola" "hola") (cons #\a #\a) (cons 'true 'false))) 2)
(check-equal? (contar-datos-iguales
               (list (cons 2 "hola") (cons "hola" 3) (cons #\a 'true) (cons #\b 'false))) 0)
(check-equal? (contar-datos-iguales '()) 0)
(check-equal? (contar-datos-iguales '((1 . 1) (2 . 2) (3 . 3))) 3)


;;; ============================================================
;;; EJERCICIO 5 - Manos de póker
;;; ============================================================

(define mano1 '(A♦ 2♦ 3♣ 4♦ 5♥))
(define mano2 '(J♦ J♣ J♠ J♥ K♣))

;;; ------------------------------------------------------------
;;; a) palo-carta
;;; ------------------------------------------------------------

(define (palo-carta simbolo)
  (obten-palo (string-ref (symbol->string simbolo) 1)))

(check-equal? (palo-carta 'A♠) 'Picas)
(check-equal? (palo-carta '2♣) 'Tréboles)
(check-equal? (palo-carta '3♥) 'Corazones)
(check-equal? (palo-carta '4♦) 'Diamantes)

;;; ------------------------------------------------------------
;;; b) veces-palo y color?
;;; ------------------------------------------------------------

(define (veces-palo lista palo)
  (cond
    ((null? lista) 0)
    ((equal? (palo-carta (first lista)) palo)
     (+ 1 (veces-palo (rest lista) palo)))
    (else (veces-palo (rest lista) palo))))

(check-equal? (veces-palo '(5♠ 6♣ 7♥ 8♦ 9♠) 'Picas)    2)
(check-equal? (veces-palo '(J♠ Q♣ K♥) 'Diamantes)        0)
(check-equal? (veces-palo '(A♣ 2♥ 3♠) 'Corazones)        1)
(check-equal? (veces-palo '() 'Tréboles)                  0)

(define (color? mano)
  (= (veces-palo mano (palo-carta (first mano)))
     (length mano)))

(check-equal? (color? '(5♣ J♦ J♣ Q♠ Q♥)) #f)
(check-equal? (color? '(2♦ 5♦ 6♦ J♦ K♦)) #t)

;;; ------------------------------------------------------------
;;; c) escalera? y escalera-color?
;;;
;;; escalera?: valores consecutivos ordenados de menor a mayor.
;;;   Caso base: lista de 1 carta => siempre escalera.
;;;   Caso recursivo: el segundo valor = primer valor + 1, y el resto es escalera.
;;; ------------------------------------------------------------

(define (escalera? lista)
  (if (null? (rest lista))
      #t
      (and (= (valor-carta (second lista))
              (+ (valor-carta (first lista)) 1))
           (escalera? (rest lista)))))

(check-equal? (escalera? '(5♣ 4♦ 3♣))     #f)
(check-equal? (escalera? '(8♣ 9♦ J♣ Q♦))  #t)
(check-equal? (escalera? '(8♣ 2♣))         #f)
(check-equal? (escalera? '(A♣ 2♦ 3♣))     #t)

(define (escalera-color? mano)
  (and (escalera? mano) (color? mano)))

(check-equal? (escalera-color? '(5♣ 6♦ 7♣ 8♠ 9♥)) #f)
(check-equal? (escalera-color? '(A♦ 2♦ 3♦ 4♦ 5♦)) #t)


;;; ============================================================
;;; EJERCICIO 6
;;; ============================================================

;;; ------------------------------------------------------------
;;; a) suma-izq y suma-der
;;; ------------------------------------------------------------

(define (suma-izq pareja n)
  (cons (+ (car pareja) n) (cdr pareja)))

(define (suma-der pareja n)
  (cons (car pareja) (+ (cdr pareja) n)))

(check-equal? (suma-izq (cons 10 20) 3) '(13 . 20))
(check-equal? (suma-der (cons 10 20) 5) '(10 . 25))
(check-equal? (suma-izq (cons 0 0) 7)   '(7 . 0))
(check-equal? (suma-der (cons 0 0) 7)   '(0 . 7))

;;; ------------------------------------------------------------
;;; b.1) suma-impares-pares: devuelve (suma-impares . suma-pares)
;;; ------------------------------------------------------------

(define (suma-impares-pares lista-num)
  (if (null? lista-num)
      (cons 0 0)
      (if (odd? (first lista-num))
          (suma-izq (suma-impares-pares (rest lista-num)) (first lista-num))
          (suma-der (suma-impares-pares (rest lista-num)) (first lista-num)))))

(check-equal? (suma-impares-pares '(3 2 1 4 8 7 6 5)) '(16 . 20))
(check-equal? (suma-impares-pares '(3 1 5))            '(9 . 0))
(check-equal? (suma-impares-pares '(2 4 6))            '(0 . 12))
(check-equal? (suma-impares-pares '())                 '(0 . 0))

;;; ------------------------------------------------------------
;;; b.2) Primera llamada recursiva de (suma-impares-pares '(2 1 2 1 4))
;;;
;;; (suma-impares-pares '(2 1 2 1 4))
;;;   primera llamada recursiva => (suma-impares-pares '(1 2 1 4))
;;;
;;; Calculamos (suma-impares-pares '(1 2 1 4)):
;;;   recursión sobre '(2 1 4) => (suma-impares-pares '(2 1 4))
;;;     recursión sobre '(1 4) => (suma-impares-pares '(1 4))
;;;       recursión sobre '(4) => (suma-impares-pares '(4))
;;;         recursión sobre '() => (cons 0 0)
;;;         4 es par => (suma-der '(0.0) 4) => (0 . 4)
;;;       1 es impar => (suma-izq '(0.4) 1) => (1 . 4)
;;;     2 es par => (suma-der '(1.4) 2) => (1 . 6)
;;;   1 es impar => (suma-izq '(1.6) 1) => (2 . 6)
;;;
;;; RESPUESTA: la primera llamada recursiva devuelve (2 . 6)
;;; ------------------------------------------------------------

;;; ------------------------------------------------------------
;;; c) cadena-mayor: pareja (cadena-mayor . longitud)
;;;    En empate gana la última que aparezca en la lista.
;;; ------------------------------------------------------------

(define (cadena-mayor lista)
  (if (null? lista)
      (cons "" 0)
      (if (> (string-length (first lista)) (cdr (cadena-mayor (rest lista))))
          (cons (first lista) (string-length (first lista)))
          (cadena-mayor (rest lista)))))

(check-equal? (cadena-mayor '("vamos" "a" "obtener" "la" "cadena" "mayor"))
              '("obtener" . 7))
(check-equal? (cadena-mayor '("prueba" "con" "maximo" "igual"))
              '("maximo" . 6))
(check-equal? (cadena-mayor '()) '("" . 0))
(check-equal? (cadena-mayor '("hola")) '("hola" . 4))
