const cv = document.getElementById('c');
const ctx = cv.getContext('2d');





const nuevo = document.getElementById("nuevo");

if(nuevo){

    nuevo.onclick = cargarEjercicioAleatorio;

}

cargarEjercicioAleatorio();

document.getElementById("ejercicioId").textContent = ejercicio.id;
document.getElementById("ejercicioTitulo").textContent = ejercicio.titulo;
document.getElementById("respuesta").textContent = ejercicio.resultadoEsperado;