#lang racket
(require rackunit)
(require "lpp.rkt")

;;; ============================================================
;;; PRÁCTICA 5: Funciones como datos de primera clase y FOS
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

(define (valor-carta simbolo)
  (obten-valor (string-ref (symbol->string simbolo) 0)))

;;; expande-pareja de práctica 4
(define (expande-pareja pareja)
  (if (= (cdr pareja) 0)
      '()
      (cons (car pareja)
            (expande-pareja (cons (car pareja) (- (cdr pareja) 1))))))

;;; suma-izq de práctica 3
(define (suma-izq pareja n)
  (cons (+ (car pareja) n) (cdr pareja)))


;;; ============================================================
;;; EJERCICIO 1
;;; ============================================================

;;; ------------------------------------------------------------
;;; a) aplica-veces: aplica n veces f2 luego f1 sobre x
;;;    Cada iteración: primero aplica f2, luego f1.
;;;    n=0 => devuelve x sin cambios
;;; ------------------------------------------------------------

(define (aplica-veces f1 f2 n x)
  (if (= n 0)
      x
      (aplica-veces f1 f2 (- n 1) (f1 (f2 x)))))

;;; Verificación manual del primer ejemplo:
;;; n=1, x=5: f2(5)=7 -> recursión base -> f1(7)=14... espera,
;;; el enunciado dice: f2(5)=7, f1(7)=14, f2(14)=16, f1(16)=32, f2(32)=34, f1(34)=68
;;; Eso son 3 iteraciones de (f2 luego f1). Orden: f1(f2(x)) repetido n veces.

(check-equal? (aplica-veces (lambda (x) (+ x 1)) (lambda (x) (+ x 2)) 2 10) 16)
(check-equal? (aplica-veces (lambda (x) (* x x)) (lambda (x) (+ x 1)) 4 3)  7072978201)

;;; Comprobación manual del ejemplo del enunciado:
;;; (aplica-veces doble suma-2 3 5):
;;; iter1: f2(5)=7,  f1(7)=14
;;; iter2: f2(14)=16, f1(16)=32
;;; iter3: f2(32)=34, f1(34)=68
(define doble (lambda (x) (* 2 x)))
(define suma-2 (lambda (x) (+ x 2)))
(check-equal? (aplica-veces doble suma-2 3 5) 68)

;;; ------------------------------------------------------------
;;; b) mueve-al-principio-condicion: mueve el primer elemento que
;;;    cumple pred al inicio; si ninguno lo cumple, devuelve lista original
;;; ------------------------------------------------------------

;;; Auxiliar: elimina la primera aparición que cumple pred
(define (elimina-primera-cond pred lista)
  (cond
    ((null? lista) '())
    ((pred (first lista)) (rest lista))
    (else (cons (first lista)
                (elimina-primera-cond pred (rest lista))))))

;;; Auxiliar: busca el primer elemento que cumple pred (#f si no hay)
(define (encuentra-primero pred lista)
  (cond
    ((null? lista) #f)
    ((pred (first lista)) (first lista))
    (else (encuentra-primero pred (rest lista)))))

(define (mueve-al-principio-condicion pred lista)
  (if (equal? (encuentra-primero pred lista) #f)
      lista
      (cons (encuentra-primero pred lista)
            (elimina-primera-cond pred lista))))

(check-equal? (mueve-al-principio-condicion number? '(a b c 1 d 1 e)) '(1 a b c d 1 e))
(check-equal? (mueve-al-principio-condicion number? '(1 a b 1 c))     '(1 a b 1 c))
(check-equal? (mueve-al-principio-condicion number? '(a b c d))        '(a b c d))
(check-equal? (mueve-al-principio-condicion string? '(a "hola" b "adios")) '("hola" a b "adios"))

;;; ------------------------------------------------------------
;;; c) comprueba generalizada: filtra parejas donde (pred x y) es #t
;;; ------------------------------------------------------------

(define (comprueba pred lista1 lista2)
  (cond
    ((or (null? lista1) (null? lista2)) '())
    ((pred (first lista1) (first lista2))
     (cons (cons (first lista1) (first lista2))
           (comprueba pred (rest lista1) (rest lista2))))
    (else (comprueba pred (rest lista1) (rest lista2)))))

(check-equal?
 (comprueba (lambda (x y) (= (string-length (symbol->string x)) y))
            '(este es un ejercicio de examen)
            '(2 1 2 9 1 6))
 '((un . 2) (ejercicio . 9) (examen . 6)))

(check-equal?
 (comprueba (lambda (x y) (= (string-length x) (string-length y)))
            '("aui" "a" "ae" "c" "aeiou")
            '("hola" "b" "es" "que" "cinco"))
 '(("a" . "b") ("ae" . "es") ("aeiou" . "cinco")))


;;; ============================================================
;;; EJERCICIO 2
;;; ============================================================

;;; ------------------------------------------------------------
;;; a) inserta-ordenada-genérica y ordena-genérica
;;; ------------------------------------------------------------

(define (inserta-ordenada-generica n lista menor-igual?)
  (cond
    ((null? lista) (list n))
    ((menor-igual? n (first lista)) (cons n lista))
    (else (cons (first lista)
                (inserta-ordenada-generica n (rest lista) menor-igual?)))))

(define (ordena-generica lista menor-igual?)
  (if (null? lista)
      '()
      (inserta-ordenada-generica (first lista)
                                 (ordena-generica (rest lista) menor-igual?)
                                 menor-igual?)))

(check-equal? (ordena-generica '(3 5 1) <=) '(1 3 5))

;;; ------------------------------------------------------------
;;; b) Tres casos de ordenación con predicados distintos
;;; ------------------------------------------------------------

;;; Orden por longitud de cadena
(check-equal? (ordena-generica '("Hola" "me" "llamo" "Iñigo" "Montoya")
                               (lambda (x y) (<= (string-length x) (string-length y))))
              '("me" "Hola" "llamo" "Iñigo" "Montoya"))

;;; Orden lexicográfico
(check-equal? (ordena-generica '("Hola" "me" "llamo" "Iñigo" "Montoya")
                               string<=?)
              '("Hola" "Iñigo" "Montoya" "llamo" "me"))

;;; Orden por suma de pareja
(check-equal? (ordena-generica '((2 . 2) (1 . 1) (3 . 0) (5 . 1))
                               (lambda (x y) (<= (+ (car x) (cdr x))
                                                 (+ (car y) (cdr y)))))
              '((1 . 1) (3 . 0) (2 . 2) (5 . 1)))

;;; ------------------------------------------------------------
;;; c) ordena-cartas
;;; ------------------------------------------------------------

(define (ordena-cartas lista-cartas)
  (ordena-generica lista-cartas
                   (lambda (c1 c2) (<= (valor-carta c1) (valor-carta c2)))))

(check-equal? (ordena-cartas '(Q♠ J♣ 5♣ Q♥ J♦)) '(5♣ J♣ J♦ Q♠ Q♥))
(check-equal? (ordena-cartas '(A♦ K♠ 3♣))        '(A♦ 3♣ K♠))


;;; ============================================================
;;; EJERCICIO 3
;;; ============================================================

;;; ------------------------------------------------------------
;;; a) Resultados de expresiones con map, filter, foldr, foldl, apply
;;;
;;; 1) (map (lambda (x) (cond ...)) '(1 #t hola #f (1 . 2)))
;;;    1      => "1"
;;;    #t     => "#t"
;;;    hola   => "hola"
;;;    #f     => "#f"
;;;    (1 . 2) => ninguna rama => "desconocido"
;;;    => '("1" "#t" "hola" "#f" "desconocido")
;;;
;;; 2) (filter (lambda (x) (equal? (string-ref (symbol->string x) 1) #\a))
;;;            '(alicante barcelona madrid almería))
;;;    alicante: char 1 = #\l  => #f
;;;    barcelona: char 1 = #\a => #t
;;;    madrid: char 1 = #\a    => #t
;;;    almería: char 1 = #\l   => #f
;;;    => '(barcelona madrid)
;;;
;;; 3) (foldr (lambda (dato resultado) (string-append dato "*" resultado))
;;;           "" '("Hola" "que" "tal"))
;;;    foldr va de derecha a izquierda:
;;;    "tal"  con "" => "tal*"
;;;    "que"  con "tal*" => "que*tal*"
;;;    "Hola" con "que*tal*" => "Hola*que*tal*"
;;;    => "Hola*que*tal*"
;;;
;;; 4) (foldr append '() '((1 2) (3 4 5) (6 7) (8)))
;;;    => (1 2 3 4 5 6 7 8)
;;;
;;; 5) (foldl (lambda (dato resultado)
;;;             (string-append (symbol->string (car dato))
;;;                            (symbol->string (cdr dato)) resultado))
;;;           "" '((a . b) (hola . adios) (una . pareja)))
;;;    foldl va de izquierda a derecha acumulando:
;;;    (a.b) con "" => "ab"
;;;    (hola.adios) con "ab" => "holaadiosab"
;;;    (una.pareja) con "holaadiosab" => "unaparejaholaadiosab"
;;;    => "unaparejaholaadiosab"
;;;
;;; 6) (foldr (lambda (dato resultado)
;;;             (cons (+ (car resultado) dato)
;;;                   (+ (cdr resultado) 1)))
;;;           '(0 . 0) '(1 1 2 2 3 3))
;;;    Acumula suma en car y cuenta en cdr:
;;;    resultado final: (car = 1+1+2+2+3+3=12, cdr = 6)
;;;    => '(12 . 6)
;;;
;;; 7) (apply + (map cdr '((1 . 3) (2 . 8) (2 . 4))))
;;;    map cdr => '(3 8 4)
;;;    apply + => 15
;;;
;;; 8) (apply min (map car (filter (lambda (p) (> (car p) (cdr p)))
;;;                                '((3 . 1) (1 . 20) (5 . 2)))))
;;;    filter: (3.1) => 3>1 #t; (1.20) => 1>20 #f; (5.2) => 5>2 #t
;;;    => '((3 . 1) (5 . 2))
;;;    map car => '(3 5)
;;;    apply min => 3
;;; ------------------------------------------------------------

(check-equal?
 (map (lambda (x)
        (cond
          ((symbol? x)  (symbol->string x))
          ((number? x)  (number->string x))
          ((boolean? x) (if x "#t" "#f"))
          (else "desconocido")))
      '(1 #t hola #f (1 . 2)))
 '("1" "#t" "hola" "#f" "desconocido"))

(check-equal?
 (filter (lambda (x)
           (equal? (string-ref (symbol->string x) 1) #\a))
         '(alicante barcelona madrid almería))
 '(barcelona madrid))

(check-equal?
 (foldr (lambda (dato resultado)
          (string-append dato "*" resultado))
        "" '("Hola" "que" "tal"))
 "Hola*que*tal*")

(check-equal?
 (foldr append '() '((1 2) (3 4 5) (6 7) (8)))
 '(1 2 3 4 5 6 7 8))

(check-equal?
 (foldl (lambda (dato resultado)
          (string-append
           (symbol->string (car dato))
           (symbol->string (cdr dato))
           resultado))
        "" '((a . b) (hola . adios) (una . pareja)))
 "unaparejaholaadiosab")

(check-equal?
 (foldr (lambda (dato resultado)
          (cons (+ (car resultado) dato)
                (+ (cdr resultado) 1)))
        '(0 . 0) '(1 1 2 2 3 3))
 '(12 . 6))

(check-equal? (apply + (map cdr '((1 . 3) (2 . 8) (2 . 4)))) 15)

(check-equal?
 (apply min (map car (filter (lambda (p) (> (car p) (cdr p)))
                             '((3 . 1) (1 . 20) (5 . 2)))))
 3)

;;; ------------------------------------------------------------
;;; b) Rellenar huecos
;;; ------------------------------------------------------------

(define lista '((2 . 7) (3 . 5) (10 . 4) (5 . 5)))

;;; Sumas de parejas pares
(check-equal?
 (filter even?
         (map (lambda (x) (+ (car x) (cdr x))) lista))
 '(8 14 10))

;;; Parejas invertidas donde nueva parte izq > parte der
(check-equal?
 (filter (lambda (p) (> (car p) (cdr p)))
         (map (lambda (x) (cons (cdr x) (car x))) lista))
 '((7 . 2) (5 . 3)))

;;; Partes izquierdas de parejas cuya suma sea par
(check-equal?
 (foldr (lambda (x resultado) (cons (car x) resultado))
        '()
        (filter (lambda (x) (even? (+ (car x) (cdr x)))) lista))
 '(3 10 5))

;;; ------------------------------------------------------------
;;; c) Rellenar huecos con f y g
;;; ------------------------------------------------------------

(define (f1 x) (lambda (y z) (string-append y z x)))
(define g1 (f1 "a"))
(check-equal? (g1 "clase" "lpp") "claselppa")

(define (f2 x) (lambda (y z) (list y x z)))
(define g2 (f2 "lpp"))
(check-equal? (g2 "hola" "clase") (list "hola" "lpp" "clase"))

(define (f3 g3) (lambda (z x) (g3 z x)))
(check-equal? ((f3 cons) 3 4) '(3 . 4))


;;; ============================================================
;;; EJERCICIO 4 - Versiones con FOS de funciones previas
;;; ============================================================

;;; ------------------------------------------------------------
;;; a) contar-datos-iguales-fos
;;; ------------------------------------------------------------

(define (contar-datos-iguales-fos lista-parejas)
  (length (filter (lambda (p) (equal? (car p) (cdr p))) lista-parejas)))

(check-equal? (contar-datos-iguales-fos
               (list (cons 2 3) (cons "hola" "hola") (cons #\a #\a) (cons 'true 'false))) 2)
(check-equal? (contar-datos-iguales-fos
               (list (cons 2 "hola") (cons "hola" 3) (cons #\a 'true) (cons #\b 'false))) 0)

;;; ------------------------------------------------------------
;;; b) expande-lista-fos
;;; ------------------------------------------------------------

(define (expande-lista-fos lista-parejas)
  (foldr (lambda (p resultado) (append (expande-pareja p) resultado))
         '()
         lista-parejas))

(check-equal? (expande-lista-fos '((#t . 3) ("LPP" . 2) (b . 4)))
              '(#t #t #t "LPP" "LPP" b b b b))
(check-equal? (expande-lista-fos '()) '())

;;; ------------------------------------------------------------
;;; c) comprueba-simbolos-fos
;;; ------------------------------------------------------------

(define (comprueba-simbolos-fos lista-simbolos lista-num)
  (map (lambda (p) (cons (car p) (cdr p)))
       (filter (lambda (p)
                 (= (string-length (symbol->string (car p))) (cdr p)))
               (map cons lista-simbolos lista-num))))

(check-equal? (comprueba-simbolos-fos '(este es un ejercicio de examen) '(2 1 2 9 1 6))
              '((un . 2) (ejercicio . 9) (examen . 6)))
(check-equal? (comprueba-simbolos-fos '(hola que tal) '(4 3 3))
              '((hola . 4) (que . 3) (tal . 3)))


;;; ============================================================
;;; EJERCICIO 5
;;; ============================================================

;;; ------------------------------------------------------------
;;; a) suma-n-izq: suma n a todas las partes izquierdas
;;; ------------------------------------------------------------

(define (suma-n-izq n lista-parejas)
  (map (lambda (p) (suma-izq p n)) lista-parejas))

(check-equal? (suma-n-izq 10 '((1 . 3) (0 . 9) (5 . 8) (4 . 1)))
              '((11 . 3) (10 . 9) (15 . 8) (14 . 1)))
(check-equal? (suma-n-izq 0 '((1 . 2) (3 . 4))) '((1 . 2) (3 . 4)))

;;; ------------------------------------------------------------
;;; b) busca-mayor: elemento mayor de una lista usando predicado
;;; ------------------------------------------------------------

(define (busca-mayor mayor? lista)
  (foldl (lambda (dato resultado)
           (if (mayor? dato resultado) dato resultado))
         (first lista)
         (rest lista)))

(check-equal? (busca-mayor > '(3 1 4 1 5 9 2 6))   9)
(check-equal? (busca-mayor > '(7))                  7)
(check-equal? (busca-mayor string>? '("hola" "adios" "mundo")) "mundo")
(check-equal? (busca-mayor (lambda (x y) (> (string-length x) (string-length y)))
                           '("hi" "adios" "hola")) "adios")

;;; ------------------------------------------------------------
;;; c) todos-menores? en dos versiones
;;; ------------------------------------------------------------

;;; Versión 1: usando busca-mayor
(define (todos-menores? lista n)
  (for-all? (lambda (sublista) (< (busca-mayor > sublista) n)) lista))

;;; Versión 2: usando exists? (ningún elemento de ninguna sublista es >= n)
(define (todos-menores?-v2 lista n)
  (for-all? (lambda (sublista)
              (not (exists? (lambda (x) (>= x n)) sublista)))
            lista))

(check-equal? (todos-menores? '((10 30 20) (1 50 30) (30 40 90)) 100) #t)
(check-equal? (todos-menores? '((10 30 20) (1 50 30) (30 40 90)) 90)  #f)
(check-equal? (todos-menores? '((10 30 20) (1 50 30) (30 40 90)) 55)  #f)

(check-equal? (todos-menores?-v2 '((10 30 20) (1 50 30) (30 40 90)) 100) #t)
(check-equal? (todos-menores?-v2 '((10 30 20) (1 50 30) (30 40 90)) 90)  #f)
(check-equal? (todos-menores?-v2 '((10 30 20) (1 50 30) (30 40 90)) 55)  #f)


;;; ============================================================
;;; EJERCICIO 6 - Truco de cartas mejorado
;;; ============================================================

;;; ------------------------------------------------------------
;;; a) coloca con número variable de argumentos y reparte-cuatro
;;; ------------------------------------------------------------

(define (coloca tres-listas . args)
  (if (null? args)
      tres-listas
      (map (lambda (lista elem) (cons elem lista))
           tres-listas
           args)))

(check-equal? (coloca '(() () ()) 'a 'b 'c)              '((a) (b) (c)))
(check-equal? (coloca '((a) (a)) 'b 'b)                  '((b a) (b a)))
(check-equal? (coloca '((a b c d)) 'e)                   '((e a b c d)))
(check-equal? (coloca '())                               '())
(check-equal? (coloca '((a) (b c) (d e f) (g h i j)) 'k 'l 'm 'n)
              '((k a) (l b c) (m d e f) (n g h i j)))

(define (reparte-cuatro lista-cartas)
  (if (null? lista-cartas)
      '(() () () ())
      (apply coloca
             (reparte-cuatro (list-tail lista-cartas 4))
             (list (first lista-cartas)
                   (second lista-cartas)
                   (third lista-cartas)
                   (fourth lista-cartas)))))

(check-equal? (reparte-cuatro '(A♣ 2♣ 3♣ 4♣ 5♣ 6♣ 7♣ 8♣ 9♣ J♣ Q♣ K♣))
              '((A♣ 5♣ 9♣) (2♣ 6♣ J♣) (3♣ 7♣ Q♣) (4♣ 8♣ K♣)))

;;; reparte-tres usando la nueva coloca
(define (reparte-tres lista-cartas)
  (if (null? lista-cartas)
      '(() () ())
      (apply coloca
             (reparte-tres (list-tail lista-cartas 3))
             (list (first lista-cartas)
                   (second lista-cartas)
                   (third lista-cartas)))))

;;; ------------------------------------------------------------
;;; b) escoge-en-orden, reordena-tres-montones, reordena-cuatro-montones
;;; ------------------------------------------------------------

(define (escoge-en-orden lista . funciones-ordinales)
  (map (lambda (f) (f lista)) funciones-ordinales))

(check-equal? (escoge-en-orden '(1 2 3 4 5))                          '())
(check-equal? (escoge-en-orden '(1 2 3 4 5) fourth second)            '(4 2))
(check-equal? (escoge-en-orden '(a b c d) third second fourth first)  '(c b d a))
(check-equal? (escoge-en-orden '(dos tres un) third first second)     '(un dos tres))

(define (reordena-tres-montones baraja f1 f2 f3)
  (escoge-en-orden (reparte-tres baraja) f1 f2 f3))

(define (reordena-cuatro-montones baraja f1 f2 f3 f4)
  (escoge-en-orden (reparte-cuatro baraja) f1 f2 f3 f4))

(check-equal?
 (reordena-tres-montones '(A♣ 2♣ 3♣ 4♣ 5♣ 6♣ 7♣ 8♣ 9♣ J♣ Q♣ K♣) second first third)
 '((2♣ 5♣ 8♣ Q♣) (A♣ 4♣ 7♣ J♣) (3♣ 6♣ 9♣ K♣)))

(check-equal?
 (reordena-cuatro-montones '(A♣ 2♣ 3♣ 4♣ 5♣ 6♣ 7♣ 8♣ 9♣ J♣ Q♣ K♣) fourth second first third)
 '((4♣ 8♣ K♣) (2♣ 6♣ J♣) (A♣ 5♣ 9♣) (3♣ 7♣ Q♣)))

;;; ------------------------------------------------------------
;;; c) junta-montones
;;; ------------------------------------------------------------

(define (junta-montones montones)
  (foldr append '() montones))

(check-equal? (junta-montones '((4♣ 8♣ K♣) (2♣ 6♣ J♣) (A♣ 5♣ 9♣) (3♣ 7♣ Q♣)))
              '(4♣ 8♣ K♣ 2♣ 6♣ J♣ A♣ 5♣ 9♣ 3♣ 7♣ Q♣))
(check-equal? (junta-montones '(() () ())) '())

;;; ------------------------------------------------------------
;;; d) Truco de cartas con adivina mejorada
;;; ------------------------------------------------------------

(define (adivina baraja par1 par2 par3)
  (list-ref baraja
            (+ (* (- (car par3) 1) (cdr par2) (cdr par1))
               (* (- (car par2) 1) (cdr par1))
               (- (car par1) 1))))

(random-seed 90)

(define t1 (reordena-cuatro-montones (cartas 48) first fourth second third))
;;; La carta elegida (A♣) está en el montón 1 de 4
(define p1 '(1 . 4))

(define t2 (reordena-tres-montones (junta-montones t1) second third first))
;;; La carta elegida (A♣) está en el montón 2 de 3
(define p2 '(2 . 3))

(define t3 (reordena-cuatro-montones (junta-montones t2) fourth second first third))
;;; La carta elegida (A♣) está en el montón 1 de 4
(define p3 '(1 . 4))

(check-equal? (adivina (junta-montones t3) p1 p2 p3) 'A♣)
