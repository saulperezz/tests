#lang racket
(require rackunit)
(require "lpp.rkt")

;;; ============================================================
;;; PRÁCTICA 4: Funciones recursivas que devuelven listas
;;; Lenguajes y Paradigmas de Programación, curso 2025-26
;;; ============================================================

;;; Funciones auxiliares reutilizadas de prácticas anteriores
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

(define (palo-carta simbolo)
  (obten-palo (string-ref (symbol->string simbolo) 1)))


;;; ============================================================
;;; EJERCICIO 1
;;; ============================================================

;;; ------------------------------------------------------------
;;; a) es-prefijo? y contiene-prefijo
;;; ------------------------------------------------------------

;;; Comprueba si pal1 es prefijo de pal2
(define (es-prefijo? pal1 pal2)
  (and (<= (string-length pal1) (string-length pal2))
       (equal? pal1 (substring pal2 0 (string-length pal1)))))

;;; Devuelve lista de booleanos: ¿es prefijo cada palabra de la lista?
(define (contiene-prefijo prefijo lista-pal)
  (if (null? lista-pal)
      '()
      (cons (es-prefijo? prefijo (first lista-pal))
            (contiene-prefijo prefijo (rest lista-pal)))))

(check-equal? (es-prefijo? "ante" "anterior") #t)
(check-equal? (es-prefijo? "ante" "antígona") #f)
(check-equal? (es-prefijo? "ante" "antena")   #t)
(check-equal? (es-prefijo? "ante" "anatema")  #f)
(check-equal? (es-prefijo? "" "hola")         #t)  ; cadena vacía es prefijo de todo
(check-equal? (es-prefijo? "hola" "ho")       #f)  ; prefijo más largo que la palabra

(check-equal? (contiene-prefijo "ante" '("anterior" "antígona" "antena" "anatema"))
              '(#t #f #t #f))
(check-equal? (contiene-prefijo "pre" '("prefijo" "pre" "repre" "prepara"))
              '(#t #t #f #t))

;;; ------------------------------------------------------------
;;; b) cadenas-mayores generalizada (listas de longitud variable)
;;; ------------------------------------------------------------

;;; En empate gana la cadena de lista1 (igual que en la práctica 2)
(define (cadenas-mayores lista1 lista2)
  (cond
    ((and (null? lista1) (null? lista2)) '())
    ((null? lista1) lista2)
    ((null? lista2) lista1)
    (else
     (cons (if (>= (string-length (first lista1))
                   (string-length (first lista2)))
               (first lista1)
               (first lista2))
           (cadenas-mayores (rest lista1) (rest lista2))))))

(check-equal? (cadenas-mayores '("hola" "que" "tal") '("adios"))
              '("adios" "que" "tal"))
(check-equal? (cadenas-mayores '("hola" "que" "tal") '("meme" "y" "adios"))
              '("hola" "que" "adios"))
(check-equal? (cadenas-mayores '("la" "primera" "práctica" "de" "recursión")
                               '("confiar" "en" "la" "recursión" "facilita" "su" "resolución"))
              '("confiar" "primera" "práctica" "recursión" "recursión" "su" "resolución"))
(check-equal? (cadenas-mayores '() '()) '())
(check-equal? (cadenas-mayores '("abc") '()) '("abc"))


;;; ============================================================
;;; EJERCICIO 2
;;; ============================================================

;;; ------------------------------------------------------------
;;; a) inserta-pos: inserta dato en la posición pos de la lista
;;; ------------------------------------------------------------

(define (inserta-pos dato pos lista)
  (if (= pos 0)
      (cons dato lista)
      (cons (first lista)
            (inserta-pos dato (- pos 1) (rest lista)))))

(check-equal? (inserta-pos 'b 2 '(a a a a)) '(a a b a a))
(check-equal? (inserta-pos 'b 0 '(a a a a)) '(b a a a a))
(check-equal? (inserta-pos 'x 4 '(a b c d)) '(a b c d x))
(check-equal? (inserta-pos 1 0 '())          '(1))

;;; ------------------------------------------------------------
;;; b) inserta-ordenada: inserta n en lista ordenada de menor a mayor
;;; ------------------------------------------------------------

(define (inserta-ordenada n lista-ordenada)
  (cond
    ((null? lista-ordenada) (list n))
    ((<= n (first lista-ordenada)) (cons n lista-ordenada))
    (else (cons (first lista-ordenada)
                (inserta-ordenada n (rest lista-ordenada))))))

(check-equal? (inserta-ordenada 10 '(-8 2 3 11 20)) '(-8 2 3 10 11 20))
(check-equal? (inserta-ordenada -9 '(-8 2 3 11 20)) '(-9 -8 2 3 11 20))
(check-equal? (inserta-ordenada 99 '(-8 2 3 11 20)) '(-8 2 3 11 20 99))
(check-equal? (inserta-ordenada 5  '())             '(5))

;;; ------------------------------------------------------------
;;; c) ordena: ordena una lista usando inserta-ordenada
;;; ------------------------------------------------------------

(define (ordena lista)
  (if (null? lista)
      '()
      (inserta-ordenada (first lista)
                        (ordena (rest lista)))))

(check-equal? (ordena '(2 -1 100 4 -6)) '(-6 -1 2 4 100))
(check-equal? (ordena '(3 1 2))         '(1 2 3))
(check-equal? (ordena '())              '())
(check-equal? (ordena '(1))             '(1))
(check-equal? (ordena '(5 5 3 1 3))    '(1 3 3 5 5))


;;; ============================================================
;;; EJERCICIO 3
;;; ============================================================

;;; ------------------------------------------------------------
;;; a) mueve-al-principio: mueve la primera aparición de dato al inicio
;;; ------------------------------------------------------------

;;; Función auxiliar: elimina la primera aparición de dato en lista
(define (elimina-primera dato lista)
  (cond
    ((null? lista) '())
    ((equal? (first lista) dato) (rest lista))
    (else (cons (first lista)
                (elimina-primera dato (rest lista))))))

(define (mueve-al-principio lista dato)
  (cons dato (elimina-primera dato lista)))

(check-equal? (mueve-al-principio '(a b e c d e f) 'e) '(e a b c d e f))
(check-equal? (mueve-al-principio '(a b c d e f g) 'a) '(a b c d e f g))
(check-equal? (mueve-al-principio '(1 2 3 4) 4)        '(4 1 2 3))

;;; ------------------------------------------------------------
;;; b) comprueba-simbolos: parejas (símbolo . n) cuando longitud coincide con n
;;; ------------------------------------------------------------

(define (comprueba-simbolos lista-simbolos lista-num)
  (cond
    ((null? lista-simbolos) '())
    ((= (string-length (symbol->string (first lista-simbolos)))
        (first lista-num))
     (cons (cons (first lista-simbolos) (first lista-num))
           (comprueba-simbolos (rest lista-simbolos) (rest lista-num))))
    (else (comprueba-simbolos (rest lista-simbolos) (rest lista-num)))))

(check-equal? (comprueba-simbolos '(este es un ejercicio de examen) '(2 1 2 9 1 6))
              '((un . 2) (ejercicio . 9) (examen . 6)))
(check-equal? (comprueba-simbolos '(hola que tal) '(4 3 3))
              '((hola . 4) (que . 3) (tal . 3)))
(check-equal? (comprueba-simbolos '(a b c) '(5 5 5)) '())


;;; ============================================================
;;; EJERCICIO 4
;;; ============================================================

;;; ------------------------------------------------------------
;;; a) expande-pareja: n repeticiones del dato de la pareja
;;; ------------------------------------------------------------

(define (expande-pareja pareja)
  (if (= (cdr pareja) 0)
      '()
      (cons (car pareja)
            (expande-pareja (cons (car pareja) (- (cdr pareja) 1))))))

(check-equal? (expande-pareja '(hola . 3)) '(hola hola hola))
(check-equal? (expande-pareja '(#t . 5))   '(#t #t #t #t #t))
(check-equal? (expande-pareja '(x . 0))    '())
(check-equal? (expande-pareja '(1 . 1))    '(1))

;;; ------------------------------------------------------------
;;; b.1) expande-parejas usando función recursiva auxiliar expande-lista
;;; ------------------------------------------------------------

(define (expande-lista lista-parejas)
  (if (null? lista-parejas)
      '()
      (append (expande-pareja (first lista-parejas))
              (expande-lista (rest lista-parejas)))))

(define (expande-parejas . args)
  (expande-lista args))

(check-equal? (expande-parejas '(#t . 3) '("LPP" . 2) '(b . 4))
              '(#t #t #t "LPP" "LPP" b b b b))
(check-equal? (expande-parejas) '())
(check-equal? (expande-parejas '(a . 1)) '(a))

;;; ------------------------------------------------------------
;;; b.2) expande-parejas-2: la propia función es recursiva con args variables
;;; ------------------------------------------------------------

(define (expande-parejas-2 . args)
  (if (null? args)
      '()
      (append (expande-pareja (first args))
              (apply expande-parejas-2 (rest args)))))

(check-equal? (expande-parejas-2 '(#t . 3) '("LPP" . 2) '(b . 4))
              '(#t #t #t "LPP" "LPP" b b b b))
(check-equal? (expande-parejas-2) '())
(check-equal? (expande-parejas-2 '(z . 2) '(w . 1)) '(z z w))

;;; ------------------------------------------------------------
;;; c) expande: expande elementos precedidos por un número
;;; ------------------------------------------------------------

(define (expande lista)
  (cond
    ((null? lista) '())
    ((number? (first lista))
     (append (expande-pareja (cons (second lista) (first lista)))
             (expande (rest (rest lista)))))
    (else (cons (first lista)
                (expande (rest lista))))))

(check-equal? (expande '(4 clase ua 3 lpp aulario))
              '(clase clase clase clase ua lpp lpp lpp aulario))
(check-equal? (expande '(a b c))        '(a b c))
(check-equal? (expande '(2 x y 3 z))   '(x x y z z z))
(check-equal? (expande '())             '())


;;; ============================================================
;;; EJERCICIO 5
;;; ============================================================

;;; ------------------------------------------------------------
;;; a) Expresiones con lambda
;;;
;;; ((lambda (x) (* x x)) 3)
;;;   => 9   [aplica lambda con x=3: 3*3]
;;;
;;; ((lambda () (+ 6 4)))
;;;   => 10  [lambda sin parámetros: 6+4]
;;;
;;; ((lambda (x y) (* x (+ 2 y))) (+ 2 3) 4)
;;;   => 30  [x=5, y=4: 5*(2+4)=30]
;;;
;;; ((lambda (x y) (* x (+ 2 x))) 5)
;;;   => ERROR: la lambda espera 2 argumentos pero solo se pasa 1
;;;
;;; (define f (lambda (a b) (string-append "***" a b "***")))
;;; (define g f)
;;; (procedure? g)  => #t   [g es un procedimiento]
;;; (g "Hola" "Adios")  => "***HolaAdios***"
;;; ------------------------------------------------------------

;;; ------------------------------------------------------------
;;; b) Equivalentes con lambda:
;;;
;;; (define (suma-3 x) (+ x 3))
;;;   equivale a:
;;;   (define suma-3 (lambda (x) (+ x 3)))
;;;
;;; (define (factorial x)
;;;   (if (= x 0) 1 (* x (factorial (- x 1)))))
;;;   equivale a:
;;;   (define factorial
;;;     (lambda (x)
;;;       (if (= x 0) 1 (* x (factorial (- x 1))))))
;;; ------------------------------------------------------------

(define suma-3 (lambda (x) (+ x 3)))
(define factorial
  (lambda (x)
    (if (= x 0) 1 (* x (factorial (- x 1))))))

(check-equal? (suma-3 7)    10)
(check-equal? (factorial 5) 120)

;;; ------------------------------------------------------------
;;; c) Invocaciones con funciones de orden superior
;;;
;;; (define (doble x) (* 2 x))
;;; (define (foo f g x y) (f (g x) y))
;;; (define (bar f p x y) (if (and (p x) (p y)) (f x y) 'error))
;;;
;;; (foo + 10 doble 15)
;;;   => ERROR: 10 no es un procedimiento (g=10, se intenta llamar (10 doble) )
;;;   En realidad foo llama (f (g x) y) = (+ (10 doble) 15) => error: 10 no es función
;;;
;;; (foo doble + 10 15)
;;;   => (doble (+ 10) 15) => ERROR: doble espera 1 arg, pero aquí (+ 10)=10 y y=15
;;;   Espera: (doble (+ 10 15)) => doble recibe solo el resultado de (g x)=+10, y=15
;;;   foo llama (f (g x) y) = (doble (+ 10) 15)
;;;   doble solo acepta 1 argumento => ERROR
;;;
;;; (foo + doble 10 15)
;;;   => (+ (doble 10) 15) = (+ 20 15) = 35
;;;
;;; (foo string-append (lambda (x) (string-append "***" x)) "Hola" "Adios")
;;;   => (string-append (string-append "***" "Hola") "Adios")
;;;   => (string-append "***Hola" "Adios")
;;;   => "***HolaAdios"
;;;
;;; (bar doble number? 10 15)
;;;   => (and (number? 10) (number? 15)) = #t => (doble 10 15)
;;;   => ERROR: doble solo acepta 1 argumento
;;;
;;; (bar string-append string? "Hola" "Adios")
;;;   => (and (string? "Hola") (string? "Adios")) = #t
;;;   => (string-append "Hola" "Adios") = "HolaAdios"
;;;
;;; (bar + number? "Hola" 5)
;;;   => (and (number? "Hola") (number? 5)) = (and #f #t) = #f => 'error
;;; ------------------------------------------------------------

(define (doble x) (* 2 x))
(define (foo f g x y) (f (g x) y))
(define (bar f p x y)
  (if (and (p x) (p y))
      (f x y)
      'error))

(check-equal? (foo + doble 10 15) 35)
(check-equal? (foo string-append (lambda (x) (string-append "***" x)) "Hola" "Adios")
              "***HolaAdios")
(check-equal? (bar string-append string? "Hola" "Adios") "HolaAdios")
(check-equal? (bar + number? "Hola" 5) 'error)


;;; ============================================================
;;; EJERCICIO 6 - Truco de cartas
;;; ============================================================

;;; ------------------------------------------------------------
;;; a) coloca: añade tres elementos a la cabeza de tres sublistas
;;; ------------------------------------------------------------

(define (coloca tres-listas un dos tres)
  (list (cons un  (first  tres-listas))
        (cons dos (second tres-listas))
        (cons tres (third tres-listas))))

(check-equal? (coloca '(() () ()) 'a 'b 'c)
              '((a) (b) (c)))
(check-equal? (coloca '((a) (a) (a)) 'b 'b 'b)
              '((b a) (b a) (b a)))
(check-equal? (coloca '((a) (b c) (d e f)) 'g 'h 'i)
              '((g a) (h b c) (i d e f)))

;;; ------------------------------------------------------------
;;; b) reparte-tres: reparte la lista en tres montones
;;;    Cartas en posiciones 0,3,6... => montón 1
;;;    Cartas en posiciones 1,4,7... => montón 2
;;;    Cartas en posiciones 2,5,8... => montón 3
;;; ------------------------------------------------------------

(define (reparte-tres lista-cartas)
  (if (null? lista-cartas)
      '(() () ())
      (coloca (reparte-tres (rest (rest (rest lista-cartas))))
              (first lista-cartas)
              (second lista-cartas)
              (third lista-cartas))))

(define doce-cartas '(A♣ 2♣ 3♣ 4♣ 5♣ 6♣ 7♣ 8♣ 9♣ J♣ Q♣ K♣))

(check-equal? (reparte-tres doce-cartas)
              '((A♣ 4♣ 7♣ J♣) (2♣ 5♣ 8♣ Q♣) (3♣ 6♣ 9♣ K♣)))
(check-equal? (reparte-tres '(a b c)) '((a) (b) (c)))

;;; ------------------------------------------------------------
;;; c) elemento-central: elemento central de una lista impar
;;; ------------------------------------------------------------

;;; Función auxiliar: elimina el último elemento de una lista
(define (quita-ultimo lista)
  (if (null? (rest lista))
      '()
      (cons (first lista) (quita-ultimo (rest lista)))))

;;; El elemento central de una lista impar: quitamos el primero y
;;; el último hasta que queda un solo elemento.
(define (elemento-central lista)
  (if (null? (rest lista))
      (first lista)
      (elemento-central (quita-ultimo (rest lista)))))

(check-equal? (elemento-central '(a b c d e f g)) 'd)
(check-equal? (elemento-central '(1))              1)
(check-equal? (elemento-central '(1 2 3))          2)
(check-equal? (elemento-central '(a b c d e))     'c)

;;; ------------------------------------------------------------
;;; Funciones del truco de cartas (proporcionadas por el enunciado)
;;; ------------------------------------------------------------

(define (izquierda tres-listas)
  (append (third tres-listas)
          (first tres-listas)
          (second tres-listas)))

(define (centro tres-listas)
  (append (third tres-listas)
          (second tres-listas)
          (first tres-listas)))

(define (derecha tres-listas)
  (append (second tres-listas)
          (third tres-listas)
          (first tres-listas)))

(define (adivina lista)
  (elemento-central lista))

;;; ------------------------------------------------------------
;;; Truco de cartas completo (secuencia determinista con random-seed)
;;; ------------------------------------------------------------

(random-seed 90)

(define t1 (reparte-tres (cartas 27)))
;;; El as de tréboles está en el montón derecho
(define t2 (reparte-tres (derecha t1)))
;;; El as de tréboles está en el montón del centro
(define t3 (reparte-tres (centro t2)))
;;; El as de tréboles está en el montón derecho
(check-equal? (adivina (derecha t3)) 'A♣)
