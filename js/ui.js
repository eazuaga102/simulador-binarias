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
