// Utilidad global para guardar y leer historial de quizzes
// Disponible como window.Historial en todas las páginas

window.Historial = (function() {
  const MAX_RECORDS = 50;
  const KEY_PREFIX = "quiz_historial_";

  function _getKey(subject) {
    return KEY_PREFIX + subject;
  }

  function _read(subject) {
    try {
      const json = localStorage.getItem(_getKey(subject));
      return json ? JSON.parse(json) : [];
    } catch (e) {
      console.error("Error reading history:", e);
      return [];
    }
  }

  function _write(subject, records) {
    try {
      localStorage.setItem(_getKey(subject), JSON.stringify(records));
    } catch (e) {
      console.error("Error writing history:", e);
    }
  }

  return {
    /**
     * Guardar un intento al terminar un quiz
     * @param {string} subject - Ej: "ADA", "PARADIGMAS"
     * @param {object} record - { temaId, temaNombre, temaNum, score, total }
     */
    guardarResultado: function(subject, record) {
      const arr = _read(subject);
      const finalRecord = {
        ts: Date.now(),
        temaId: record.temaId,
        temaNombre: record.temaNombre,
        temaNum: record.temaNum,
        score: record.score,
        total: record.total,
        pct: Math.round((record.score / record.total) * 100),
      };
      arr.push(finalRecord);
      if (arr.length > MAX_RECORDS) {
        arr.shift();
      }
      _write(subject, arr);
    },

    /**
     * Obtener historial de una asignatura, ordenado por ts descendente
     * @param {string} subject
     * @returns {array} Records ordenados más reciente primero
     */
    obtenerHistorial: function(subject) {
      const arr = _read(subject);
      return arr.sort((a, b) => b.ts - a.ts);
    },

    /**
     * Obtener resumen de progreso para una asignatura (para badge)
     * @param {string} subject
     * @returns {object} { lastPct, topicsPassed, totalAttempts }
     */
    obtenerResumen: function(subject) {
      const arr = _read(subject);
      if (arr.length === 0) {
        return { lastPct: null, topicsPassed: 0, totalAttempts: 0 };
      }

      // Ordenar por timestamp descendente
      const sorted = arr.sort((a, b) => b.ts - a.ts);
      const lastPct = sorted[0].pct;

      // Contar temas aprobados (pct >= 50) sin repetidos
      const temasSeen = new Set();
      let topicsPassed = 0;
      const bestPerTema = {};

      // Iterar en orden inverso (antiguo → nuevo) para encontrar el mejor pct por tema
      for (let i = arr.length - 1; i >= 0; i--) {
        const record = arr[i];
        if (!bestPerTema[record.temaId]) {
          bestPerTema[record.temaId] = record.pct;
        } else {
          bestPerTema[record.temaId] = Math.max(bestPerTema[record.temaId], record.pct);
        }
      }

      // Contar cuántos tienen pct >= 50
      for (const temaId in bestPerTema) {
        if (bestPerTema[temaId] >= 50) {
          topicsPassed++;
        }
      }

      return {
        lastPct: lastPct,
        topicsPassed: topicsPassed,
        totalAttempts: arr.length,
      };
    },
  };
})();
