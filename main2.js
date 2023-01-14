

const calculo = () => {
    let nombre = document.getElementById("nombre").value; 
    let sueldo = document.getElementById("sueldo").value; 
    let dias = document.getElementById("dias").value; 
    let diasextra = document.getElementById("diasextra").value; 
    const datosusuario = {nombrepersona:nombre, sueldopersona:sueldo, diaspersona:dias, diasextrapersona:diasextra};
    localStorage.setItem("datosusuario", JSON.stringify(datosusuario));
    cobropordia = document.getElementById("sueldo").value / document.getElementById("dias").value;
    cobroporhora = cobropordia / 8;
    cobropordiaextra = document.getElementById("diasextra").value * cobropordia * 2;
    totalsueldo = cobropordiaextra + cobropordia * document.getElementById("dias").value;
    
    let salida = ` <p> <b>RESULTADOS :</b> </p> <br>
    <p><p> Nombre : <b>${datosusuario.nombrepersona}</b> <br>
    <p> Sueldo : <b>${datosusuario.sueldopersona}</b> <br>
    <p> Dias : <b>${datosusuario.diaspersona}</b> <br>
    <p> Dias extra : <b>${datosusuario.diasextrapersona}</b> <br>
    <p> Cobro por dia : <b>${cobropordia.toFixed(2)}</b> <br>
    <p> Cobro por dia extra : <b>${cobropordiaextra.toFixed(2)}</b> <br>
    <p> Sueldo total: <b>${totalsueldo.toFixed(2)}</b></p>`; 
    document.getElementById("resultado").innerHTML = salida;

    if (nombre == ""){
        nombreerror.innerHTML = "Ingrese un valor al campo!"
    }else{
        let mensaje = document.createElement("div");
        mensaje.innerHTML = `<h3>${nombre}</h3>`;
        nombreerror.innerHTML = "";
    }

    if (sueldo == ""){
        sueldoerror.innerHTML = "Ingrese un valor al campo!"
    }else{
        let mensaje = document.createElement("div");
        mensaje.innerHTML = `<h3>${sueldo}</h3>`;
        sueldoerror.innerHTML = "";
    }

    if (dias == ""){
        diaserror.innerHTML = "Ingrese un valor al campo!"
    }else{
        let mensaje = document.createElement("div");
        mensaje.innerHTML = `<h3>${dias}</h3>`;
        diaserror.innerHTML = "";
    }

    if (diasextra == ""){
        diasxerror.innerHTML = "Ingrese un valor al campo!"
    }else{
        let mensaje = document.createElement("div");
        mensaje.innerHTML = `<h3>${diasextra}</h3>`;
        diasxerror.innerHTML = "";
    }
}


document.getElementById("boton1").addEventListener("click", calculo);