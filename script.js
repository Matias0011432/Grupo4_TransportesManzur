// let carrito = [];
let posicionCarrusel = 0;
//HOLA
function toggleMenu() {
    document.getElementById('navLinks').classList.toggle('active');
}

function mostrarInfo(nombre, descripcion, precio, imagen) {
  // Asignar los valores al modal WINONA
  document.getElementById("infoTitulo").textContent = nombre;
  document.getElementById("infoDescripcion").textContent = descripcion;
  document.getElementById("infoPrecio").textContent = `$${precio.toFixed(2)}`;
  document.getElementById("infoImagen").src = imagen;

  // Mostrar el modal HOLA
  const modal = document.getElementById("infoModal");
  modal.style.display = "flex";

}

// =============================
// CERRAR MODAL
// =============================
function cerrarInfo() {
  const modal = document.getElementById("infoModal");
  modal.style.display = "none";
}

// Cerrar al hacer clic fuera del modal
window.onclick = function (event) {
  const modal = document.getElementById("infoModal");
  if (event.target === modal) {
    modal.style.display = "none";
  }
};

// Carrusel
function moverCarrusel(direccion){
    const carrusel = document.getElementById('carrusel');
    const items = carrusel.getElementsByClassName('carrusel-item');
    const itemWidth = items[0].offsetWidth + 24;
    const visibleItems = Math.floor(carrusel.parentElement.offsetWidth / itemWidth);
    const maxPosition = items.length - visibleItems;
    posicionCarrusel += direccion;
    if(posicionCarrusel<0)posicionCarrusel=0;
    if(posicionCarrusel>maxPosition)posicionCarrusel=maxPosition;
    carrusel.style.transform=`translateX(-${posicionCarrusel*itemWidth}px)`;
}

setInterval(()=>{
    const carrusel=document.getElementById('carrusel');
    const items=carrusel.getElementsByClassName('carrusel-item');
    const itemWidth=items[0].offsetWidth+24;
    const visibleItems=Math.floor(carrusel.parentElement.offsetWidth/itemWidth);
    const maxPosition=items.length-visibleItems;
    posicionCarrusel++;
    if(posicionCarrusel>maxPosition)posicionCarrusel=0;
    carrusel.style.transform=`translateX(-${posicionCarrusel*itemWidth}px)`;
},3000);


// Smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor=>{
    anchor.addEventListener('click',function(e){
        e.preventDefault();
        const target=document.querySelector(this.getAttribute('href'));
        if(target){ target.scrollIntoView({behavior:'smooth'});}
    });
});

actualizarCarrito();
