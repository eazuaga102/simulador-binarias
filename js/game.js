let ejercicio;
let visible;
let choice = null;

function cargarEjercicioAleatorio() {

    ejercicio = ejercicios[Math.floor(Math.random() * ejercicios.length)];

    visible = Math.min(10, ejercicio.velas.length);

    choice = null;

    msg.textContent = "";

    draw();
}
