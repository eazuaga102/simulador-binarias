let ejercicio;
let visible;
let choice = null;

function cargarEjercicioAleatorio() {

    ejercicio = ejercicios[Math.floor(Math.random() * ejercicios.length)];

    // visible = Math.min(10, ejercicio.velas.length);
    visible =  ejercicio.velas.length;

    choice = null;

    msg.textContent = "";
    
    call.style.display = "inline-block";
    put.style.display = "inline-block";

    nuevo.style.display = "none";
    next.style.display = "none";

    draw();
    console.log("ejercicio", ejercicio);
    document.getElementById("ejercicioId").textContent = ejercicio.id;
    document.getElementById("ejercicioTitulo").textContent = ejercicio.titulo;
    document.getElementById("respuesta").textContent = ejercicio.resultadoEsperado;
}
