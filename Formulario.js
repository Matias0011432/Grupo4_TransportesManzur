const modal = document.getElementById("formModal");
const btn = document.getElementById("openFormBtn");
const span = document.getElementById("closeModal");
const iframe = document.getElementById("formFrame");

// Abrir modal
btn.onclick = () => { modal.style.display = "block"; }

// Cerrar modal con la X
span.onclick = () => { modal.style.display = "none"; }

// Cerrar modal al hacer clic fuera del contenido
window.onclick = (e) => {
  if (e.target == modal) modal.style.display = "none";
}

// Detectar envío del formulario
iframe.onload = () => {
  // Google Forms redirige a una página de "Gracias"
  // Cuando el iframe carga esa página, cerramos el modal
  if (iframe.contentWindow.location.href.includes("formResponse")) {
    modal.style.display = "none";
  }
}