function draw() {

    ctx.clearRect(0, 0, cv.width, cv.height);

    const v = ejercicio.velas.slice(0, visible);

    if (v.length === 0) return;

    const padding = 20;

    const hi = Math.max(...v.map(x => x.h)) + 1;
    const lo = Math.min(...v.map(x => x.l)) - 1;

    const py = p =>
        padding + ((hi - p) / (hi - lo)) * (cv.height - padding * 2);

    // Dibujar soportes
    ejercicio.soportes.forEach(s => {

        ctx.strokeStyle = "#00ff00";

        ctx.beginPath();

        ctx.moveTo(0, py(s));

        ctx.lineTo(cv.width, py(s));

        ctx.stroke();

    });

    // Dibujar resistencias
    ejercicio.resistencias.forEach(r => {

        ctx.strokeStyle = "#ff4444";

        ctx.beginPath();

        ctx.moveTo(0, py(r));

        ctx.lineTo(cv.width, py(r));

        ctx.stroke();

    });

    //-----------------------------------
    // Cálculo automático del ancho
    //-----------------------------------

    const espacio = cv.width / v.length;

    const cuerpo = Math.min(24, espacio * 0.55);

    //-----------------------------------

    v.forEach((e, i) => {

        const x = espacio * i + espacio / 2;

        const color = e.c >= e.o
            ? "#00d26a"
            : "#ff5252";

        ctx.strokeStyle = color;
        ctx.fillStyle = color;

        // Mecha

        ctx.beginPath();

        ctx.moveTo(x, py(e.h));

        ctx.lineTo(x, py(e.l));

        ctx.stroke();

        // Cuerpo

        const yOpen = py(e.o);
        const yClose = py(e.c);

        ctx.fillRect(

            x - cuerpo / 2,

            Math.min(yOpen, yClose),

            cuerpo,

            Math.max(3, Math.abs(yClose - yOpen))

        );

    });

}