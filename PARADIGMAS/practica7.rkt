#lang racket
(require rackunit)
(require "lpp.rkt")

;;; ============================================================
;;; PRÁCTICA 7: Listas estructuradas
;;; Lenguajes y Paradigmas de Programación, curso 2025-26
;;; ============================================================


;;; ============================================================
;;; EJERCICIO 1
;;; ============================================================

;;; ------------------------------------------------------------
;;; a) Lista estructurada a partir del diagrama de niveles
;;;
;;;        *
;;;      / |  \
;;;     |  |    \
;;;     *  d      *
;;;    / \    / /  | \
;;;   a  b   c *   *  h
;;;            |  / \
;;;            e f  g
;;;
;;; Raíz con 3 hijos: (a b), d, (c (e) (f g) h)
;;; ------------------------------------------------------------

(define lista-a '((a b) d (c (e) (f g) h)))
(check-equal? (fourth (third lista-a)) 'h)

;;; ------------------------------------------------------------
;;; b) Representación en niveles
;;;
;;; lista-b1 = '((2 (3)) (4 2) ((2) 3))
;;;
;;;              *
;;;          /   |     \
;;;         *    *      *
;;;        / \  / \    / \
;;;       2  * 4   2  *   3
;;;          |         |
;;;          3         2
;;;
;;; lista-b2 = '((b) (c (a)) d (a))
;;;
;;;           *
;;;        /  |   |  \
;;;       *   *   d   *
;;;       |  / \      |
;;;       b  c  *     a
;;;             |
;;;             a
;;; ------------------------------------------------------------

(define lista-b1 '((2 (3)) (4 2) ((2) 3)))
(define lista-b2 '((b) (c (a)) d (a)))

;;; ------------------------------------------------------------
;;; c) Análisis de (cuadrado-estruct lista-b1)
;;;
;;; Resultado de (cuadrado-estruct lista-b1): '((4 (9)) (16 4) ((4) 9))
;;;
;;; En la primera llamada con lista-b1 = '((2 (3)) (4 2) ((2) 3)):
;;;   ① (cuadrado-estruct (first lista-b1)) = (cuadrado-estruct '(2 (3)))
;;;      Devuelve: '(4 (9))
;;;   ② (cuadrado-estruct (rest lista-b1)) = (cuadrado-estruct '((4 2) ((2) 3)))
;;;      Devuelve: '((16 4) ((4) 9))
;;; ------------------------------------------------------------

(define (cuadrado-estruct lista)
  (cond ((null? lista) '())
        ((hoja? lista) (* lista lista))
        (else (cons (cuadrado-estruct (first lista))
                    (cuadrado-estruct (rest lista))))))

(check-equal? (cuadrado-estruct lista-b1) '((4 (9)) (16 4) ((4) 9)))

;;; ------------------------------------------------------------
;;; d) Análisis de (map (lambda (elem) (nivel-hoja-fos 'a elem)) lista-b2)
;;;
;;; nivel-hoja-fos busca el nivel de 'dato' dentro de una lista
;;; estructurada. Devuelve 1 si es hoja y coincide, suma +1 por
;;; cada nivel de sublista que lo contiene, o 0 si no aparece.
;;;
;;; lista-b2 = '((b) (c (a)) d (a))
;;; Aplicando a cada elemento directamente:
;;;   (b)     => 'a no está => 0
;;;   (c (a)) => 'a en (a) a nivel 1, +1 por subir a (a), +1 por subir a (c (a)) => 3
;;;   d       => hoja ≠ 'a => 0
;;;   (a)     => 'a en nivel 1 dentro de (a), +1 al subir => 2
;;;
;;; Resultado: '(0 3 0 2)
;;; ------------------------------------------------------------

(define (nivel-hoja-fos dato lista)
  (cond
    ((hoja? lista) (if (equal? dato lista) 1 0))
    ((null? lista) 0)
    (else
     (if (> (nivel-hoja-fos dato (first lista)) 0)
         (+ (nivel-hoja-fos dato (first lista)) 1)
         (nivel-hoja-fos dato (rest lista))))))

(check-equal?
 (map (lambda (elem) (nivel-hoja-fos 'a elem)) lista-b2)
 '(0 3 0 2))


;;; ============================================================
;;; EJERCICIO 2
;;; ============================================================

;;; ------------------------------------------------------------
;;; a) concatena: concatena todos los símbolos de lista estructurada
;;; ------------------------------------------------------------

;;; Versión con recursión pura
(define (concatena lista)
  (cond
    ((null? lista) "")
    ((hoja? lista) (symbol->string lista))
    (else (string-append (concatena (first lista))
                         (concatena (rest lista))))))

;;; Versión con funciones de orden superior
(define (concatena-fos lista)
  (cond
    ((null? lista) "")
    ((hoja? lista) (symbol->string lista))
    (else (apply string-append (map concatena-fos lista)))))

(check-equal? (concatena '(a b (c) d))                           "abcd")
(check-equal? (concatena '(a (((b)) (c (d (e f (g))) h)) i))     "abcdefghi")
(check-equal? (concatena-fos '(a b (c) d))                       "abcd")
(check-equal? (concatena-fos '(a (((b)) (c (d (e f (g))) h)) i)) "abcdefghi")

;;; ------------------------------------------------------------
;;; b) todos-positivos?: todos los números de la lista son > 0
;;; ------------------------------------------------------------

;;; Versión con recursión pura
(define (todos-positivos? lista)
  (cond
    ((null? lista) #t)
    ((hoja? lista) (> lista 0))
    (else (and (todos-positivos? (first lista))
               (todos-positivos? (rest lista))))))

;;; Versión con funciones de orden superior
(define (todos-positivos-fos? lista)
  (cond
    ((null? lista) #t)
    ((hoja? lista) (> lista 0))
    (else (for-all? todos-positivos-fos? lista))))

(check-equal? (todos-positivos?     '(1 (2 (3 (-3))) 4)) #f)
(check-equal? (todos-positivos?     '(1 (2 (3  (3))) 4)) #t)
(check-equal? (todos-positivos-fos? '(1 (2 (3 (-3))) 4)) #f)
(check-equal? (todos-positivos-fos? '(1 (2 (3  (3))) 4)) #t)


;;; ============================================================
;;; EJERCICIO 3
;;; ============================================================

;;; ------------------------------------------------------------
;;; cumplen-predicado: hojas que cumplen pred en lista estructurada
;;; ------------------------------------------------------------

;;; Versión con recursión pura
(define (cumplen-predicado pred lista)
  (cond
    ((null? lista) '())
    ((hoja? lista) (if (pred lista) (list lista) '()))
    (else (append (cumplen-predicado pred (first lista))
                  (cumplen-predicado pred (rest lista))))))

;;; Versión con funciones de orden superior
(define (cumplen-predicado-fos pred lista)
  (cond
    ((null? lista) '())
    ((hoja? lista) (if (pred lista) (list lista) '()))
    (else (foldr append '()
                 (map (lambda (elem) (cumplen-predicado-fos pred elem))
                      lista)))))

(check-equal? (cumplen-predicado even? '(1 (2 (3 (4))) (5 6)))
              '(2 4 6))
(check-equal? (cumplen-predicado pair? '(((1 . 2) 3 (4 . 3) 5) 6))
              '((1 . 2) (4 . 3)))
(check-equal? (cumplen-predicado-fos even? '(1 (2 (3 (4))) (5 6)))
              '(2 4 6))

;;; busca-mayores: números mayores que n en lista estructurada
(define (busca-mayores n lista-num)
  (cumplen-predicado (lambda (x) (> x n)) lista-num))

(check-equal? (busca-mayores 10 '(-1 (20 (10 12) (30 (25 (15))))))
              '(20 12 30 25 15))

;;; empieza-por: símbolos que empiezan por char en lista estructurada
(define (empieza-por char lista-pal)
  (cumplen-predicado
   (lambda (s) (equal? (string-ref (symbol->string s) 0) char))
   lista-pal))

(check-equal? (empieza-por #\m '((hace (mucho tiempo)) (en) (una galaxia ((muy muy) lejana))))
              '(mucho muy muy))


;;; ============================================================
;;; EJERCICIO 4
;;; ============================================================

;;; ------------------------------------------------------------
;;; a) sustituye-elem: sustituye elem-old por elem-new
;;; ------------------------------------------------------------

(define (sustituye-elem elem-old elem-new lista)
  (cond
    ((null? lista) '())
    ((hoja? lista) (if (equal? lista elem-old) elem-new lista))
    (else (cons (sustituye-elem elem-old elem-new (first lista))
                (sustituye-elem elem-old elem-new (rest lista))))))

(check-equal? (sustituye-elem 'c 'h '(a b (c d (e c)) c (f (c) g)))
              '(a b (h d (e h)) h (f (h) g)))
(check-equal? (sustituye-elem 1 99 '(1 (2 (1 3)) 1))
              '(99 (2 (99 3)) 99))

;;; ------------------------------------------------------------
;;; b) nivel-mas-profundo: pareja (elem . nivel) con mayor profundidad
;;;
;;; Convenio de nivel:
;;;   - Elementos hoja directos de la lista raíz: nivel 1
;;;   - Dentro de una sublista del nivel 1: nivel 2, etc.
;;;
;;; nivel-mas-profundo-iter: recorre la lista llevando el nivel
;;; del contexto actual (nivel-actual = nivel de las hojas directas
;;; de la lista que estamos procesando).
;;; ------------------------------------------------------------

;;; Devuelve la pareja con mayor nivel (en empate gana la primera)
(define (mayor-nivel p1 p2)
  (if (>= (cdr p1) (cdr p2)) p1 p2))

(define (nivel-mas-profundo-iter lista nivel-actual)
  (cond
    ((null? lista)         (cons '() 0))
    ((hoja? (first lista))
     (mayor-nivel (cons (first lista) nivel-actual)
                  (nivel-mas-profundo-iter (rest lista) nivel-actual)))
    (else
     (mayor-nivel (nivel-mas-profundo-iter (first lista) (+ nivel-actual 1))
                  (nivel-mas-profundo-iter (rest lista)  nivel-actual)))))

(define (nivel-mas-profundo lista)
  (nivel-mas-profundo-iter lista 1))

(check-equal? (nivel-mas-profundo '(2 (3)))                            '(3 . 2))
(check-equal? (nivel-mas-profundo '((2) (3 (4)((((((5))) 6)) 7)) 8)) '(5 . 8))
(check-equal? (nivel-mas-profundo '(a b c))                           '(a . 1))
(check-equal? (nivel-mas-profundo '((a) (b)))                         '(a . 2))


;;; ============================================================
;;; EJERCICIO 5
;;; ============================================================

;;; ------------------------------------------------------------
;;; a) mezclar: hojas con nivel <= n de lista1, nivel > n de lista2
;;;
;;; Ambas listas tienen la misma estructura.
;;; nivel-actual es el nivel de las hojas directas de la lista actual.
;;; ------------------------------------------------------------

(define (mezclar-iter lista1 lista2 n nivel-actual)
  (cond
    ((and (null? lista1) (null? lista2)) '())
    ((hoja? (first lista1))
     (cons (if (<= nivel-actual n) (first lista1) (first lista2))
           (mezclar-iter (rest lista1) (rest lista2) n nivel-actual)))
    (else
     (cons (mezclar-iter (first lista1) (first lista2) n (+ nivel-actual 1))
           (mezclar-iter (rest lista1)  (rest lista2)  n nivel-actual)))))

(define (mezclar lista1 lista2 n)
  (mezclar-iter lista1 lista2 n 1))

(define lista1 '(((a b) ((c))) (d) e))
(define lista2 '(((1 2) ((3))) (4) 5))

(check-equal? (mezclar lista1 lista2 2) '(((1 2) ((3))) (d) e))
(check-equal? (mezclar lista1 lista2 0) '(((1 2) ((3))) (4) 5))
(check-equal? (mezclar lista1 lista2 9) '(((a b) ((c))) (d) e))

;;; ------------------------------------------------------------
;;; b.1) intersecta: pareja (hoja1 . hoja2) cuando ambas listas
;;;      coinciden en una posición hoja simultáneamente.
;;;
;;; Si un elemento es hoja en lista-1 pero sublista en lista-2
;;; (o viceversa), se descarta ese par sin añadirlo al resultado.
;;; Si ambos son sublistas, se recursiona y el resultado de la
;;; recursión (si no es vacío) se añade como un elemento de la
;;; lista resultado.
;;; ------------------------------------------------------------

(define (intersecta lista-1 lista-2)
  (cond
    ((and (null? lista-1) (null? lista-2)) '())
    ((or  (null? lista-1) (null? lista-2)) '())
    ((and (hoja? lista-1) (hoja? lista-2))
     (cons lista-1 lista-2))
    ((or  (hoja? lista-1) (hoja? lista-2)) '())
    (else
     (if (null? (intersecta (first lista-1) (first lista-2)))
         (intersecta (rest lista-1) (rest lista-2))
         (cons (intersecta (first lista-1) (first lista-2))
               (intersecta (rest lista-1)  (rest lista-2)))))))

(define lista-1 '(a (b c) (d)))
(define lista-2 '((e) (f) (g)))

;;; Comprobaciones según el enunciado:
(check-equal? (intersecta lista-1 lista-2)          '(((b . f)) ((d . g))))
(check-equal? (intersecta '(a b) '(c d))            '((a . c) (b . d)))
(check-equal? (intersecta '(a (b) (c)) '(d e (f)))  '((a . d) ((c . f))))

;;; ------------------------------------------------------------
;;; b.2) intersecta-gen: generaliza intersecta con función f
;;;
;;; Cuando ambas posiciones son hojas, aplica f a ambas hojas
;;; en lugar de construir una pareja con cons.
;;; La estructura del resultado es la misma que en intersecta.
;;;
;;; Nota: si f devuelve '() se descarta esa posición igual que
;;; en intersecta con el par hoja-sublista.
;;; ------------------------------------------------------------

(define (intersecta-gen f lista-1 lista-2)
  (cond
    ((and (null? lista-1) (null? lista-2)) '())
    ((or  (null? lista-1) (null? lista-2)) '())
    ((and (hoja? lista-1) (hoja? lista-2))
     (f lista-1 lista-2))
    ((or  (hoja? lista-1) (hoja? lista-2)) '())
    (else
     (if (null? (intersecta-gen f (first lista-1) (first lista-2)))
         (intersecta-gen f (rest lista-1) (rest lista-2))
         (cons (intersecta-gen f (first lista-1) (first lista-2))
               (intersecta-gen f (rest lista-1)  (rest lista-2)))))))

;;; Ejemplo 1: cons — reproduce el comportamiento de intersecta
(check-equal? (intersecta-gen cons '(a b) '(c d))
              '((a . c) (b . d)))

;;; Ejemplo 2: + sobre números en listas de igual estructura
;;; '(1 2) vs '(3 4): 1+3=4, 2+4=6 => '(4 6)
(check-equal? (intersecta-gen + '(1 2) '(3 4))
              '(4 6))

;;; Ejemplo 3: list — crea listas con las dos hojas coincidentes
;;; '(a b) vs '(c d): list(a,c)=(a c), list(b,d)=(b d) => '((a c) (b d))
(check-equal? (intersecta-gen list '(a b) '(c d))
              '((a c) (b d)))
