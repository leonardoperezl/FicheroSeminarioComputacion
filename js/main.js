document.addEventListener("DOMContentLoaded", () => {
  renderPresentaciones();
  renderProblemas();
});

function renderPresentaciones() {
  const contenedor = document.getElementById("lista-presentaciones");

  if (!presentaciones.length) {
    contenedor.innerHTML = '<p class="vacio">No hay presentaciones disponibles aún.</p>';
    return;
  }

  contenedor.innerHTML = presentaciones.map(p => `
    <article class="card">
      <h3 class="card-titulo">${esc(p.titulo)}</h3>
      ${p.descripcion ? `<p class="card-desc">${esc(p.descripcion)}</p>` : ""}
      <a class="card-enlace" href="${esc(p.enlace)}" target="_blank" rel="noopener noreferrer">
        Ver en Drive
      </a>
    </article>
  `).join("");
}

function renderProblemas() {
  const contenedor = document.getElementById("lista-problemas");

  if (!problemas.length) {
    contenedor.innerHTML = '<p class="vacio">No hay problemas disponibles aún.</p>';
    return;
  }

  contenedor.innerHTML = problemas.map((p, i) => `
    <article class="problema">
      <div class="problema-header">
        <span class="problema-numero">Problema ${i + 1}</span>
        <h3 class="problema-titulo">${esc(p.titulo)}</h3>
        <p class="problema-enunciado">${esc(p.enunciado)}</p>
      </div>
      <details class="solucion">
        <summary>Ver solución</summary>
        <pre><code>${esc(p.solucion)}</code></pre>
      </details>
    </article>
  `).join("");
}

function esc(texto) {
  return String(texto)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}
