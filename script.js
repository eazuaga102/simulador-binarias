const cv = document.getElementById('c');
const ctx = cv.getContext('2d');

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

function draw(){

    ctx.clearRect(0,0,cv.width,cv.height);

    const v = ejercicio.velas.slice(0,visible);

    const hi = Math.max(...v.map(x=>x.h))+1;
    const lo = Math.min(...v.map(x=>x.l))-1;

    const py = p => 20 + (hi-p)/(hi-lo)*(cv.height-40);

    ejercicio.soportes.forEach(s=>{
        ctx.strokeStyle='lime';
        ctx.beginPath();
        ctx.moveTo(0,py(s));
        ctx.lineTo(cv.width,py(s));
        ctx.stroke();
    });

    ejercicio.resistencias.forEach(r=>{
        ctx.strokeStyle='red';
        ctx.beginPath();
        ctx.moveTo(0,py(r));
        ctx.lineTo(cv.width,py(r));
        ctx.stroke();
    });

    v.forEach((e,i)=>{

        const x = 40 + i*70;

        ctx.strokeStyle = e.c>=e.o ? '#00ff66' : '#ff4444';

        ctx.beginPath();
        ctx.moveTo(x,py(e.h));
        ctx.lineTo(x,py(e.l));
        ctx.stroke();

        ctx.fillStyle = ctx.strokeStyle;

        const y1 = py(e.o);
        const y2 = py(e.c);

        ctx.fillRect(
            x-10,
            Math.min(y1,y2),
            20,
            Math.max(2,Math.abs(y2-y1))
        );

    });

}

call.onclick = ()=>{

    choice='CALL';

    msg.textContent='Elegiste CALL';

};

put.onclick = ()=>{

    choice='PUT';

    msg.textContent='Elegiste PUT';

};

next.onclick = ()=>{

    if(visible < ejercicio.velas.length){

        visible++;

        draw();

        return;

    }

    if(choice===null){

        msg.textContent="Primero debes elegir CALL o PUT";

        return;

    }

    if(choice===ejercicio.resultadoEsperado){

        msg.textContent="✅ Correcto";

    }else{

        msg.textContent="❌ Incorrecto";

    }

};

const nuevo = document.getElementById("nuevo");

if(nuevo){

    nuevo.onclick = cargarEjercicioAleatorio;

}

cargarEjercicioAleatorio();