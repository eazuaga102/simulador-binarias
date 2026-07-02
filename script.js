const cv = document.getElementById('c');
const ctx = cv.getContext('2d');





const nuevo = document.getElementById("nuevo");



if(nuevo){

    nuevo.onclick = cargarEjercicioAleatorio;

}

cargarEjercicioAleatorio();

