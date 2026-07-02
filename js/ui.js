call.onclick = ()=>{

    choice='CALL';

    msg.textContent='Elegiste CALL';
    show_result();
};

put.onclick = ()=>{

    choice='PUT';

    msg.textContent='Elegiste PUT';
    show_result();

};

next.onclick = ()=>{

    if(visible < ejercicio.velas.length){

        visible++;

        draw();

        return;

    }

   

};


function show_result()
{
     if(choice===null){

        msg.textContent="Primero debes elegir CALL o PUT";

        return;

    }
    console.log("choice", choice, "resultadoEsperado", ejercicio.resultadoEsperado);
    if(choice===ejercicio.resultadoEsperado){

        msg.textContent="✅ Correcto";

    }else{

        msg.textContent="❌ Incorrecto";

    }
    show_next_buton()
}

function show_next_buton(){
    call.style.display = "none";
    put.style.display = "none";
    nuevo.style.display = "inline-block";    
}