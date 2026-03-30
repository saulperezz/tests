// Inyecta badges de progreso en las tarjetas de asignatura del índice

document.addEventListener("DOMContentLoaded", function() {
  // Mapa de asignatura → { elemento, totalTopicos }
  const SUBJECTS = {
    "ADA": {
      el: document.querySelector('a[href="ADA/cuestionario_ada.html"]'),
      totalTopics: 5,
    },
    // "PARADIGMAS": { el: document.querySelector(...), totalTopics: ... },
  };

  for (const [subject, config] of Object.entries(SUBJECTS)) {
    if (!config.el) continue;

    const resumen = window.Historial?.obtenerResumen(subject);
    if (!resumen || resumen.totalAttempts === 0) continue;

    // Determinar color según la nota del último intento
    let gradeColor;
    if (resumen.lastPct >= 90) gradeColor = "#4ade80";
    else if (resumen.lastPct >= 70) gradeColor = "#60a5fa";
    else if (resumen.lastPct >= 50) gradeColor = "#fbbf24";
    else gradeColor = "#f87171";

    // Crear elemento del badge
    const badge = document.createElement("div");
    badge.className = "subject-progress";
    badge.innerHTML = `<span style="color: ${gradeColor}">●</span><span>${resumen.lastPct}% · ${resumen.topicsPassed}/${config.totalTopics} temas</span>`;

    // Encontrar .subject-info y añadir el badge
    const subjectInfo = config.el.querySelector(".subject-info");
    if (subjectInfo) {
      subjectInfo.appendChild(badge);
    }
  }
});
