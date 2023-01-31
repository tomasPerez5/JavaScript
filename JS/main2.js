

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
    
    let timerInterval
    Swal.fire({
      title: 'se esta procesando la solicitud',
      html: 'se cerrara en <b></b>',
      timer: 1000,
      timerProgressBar: true,
      didOpen: () => {
        Swal.showLoading()
        const b = Swal.getHtmlContainer().querySelector('b')
        timerInterval = setInterval(() => {
          b.textContent = Swal.getTimerLeft()
        }, 100)
      },
      willClose: () => {
        clearInterval(timerInterval)
      }
    }).then((result) => {
      if (result.dismiss === Swal.DismissReason.timer) {
        console.log('I was closed by the timer')
      }
    })

    let salida = ` <p> <b>RESULTADOS :</b> </p> <br>
    <p><p> Nombre : <b>${datosusuario.nombrepersona}</b> <br>
    <p> Sueldo : <b>${datosusuario.sueldopersona}</b> <br>
    <p> Dias : <b>${datosusuario.diaspersona}</b> <br>
    <p> Dias extra : <b>${datosusuario.diasextrapersona}</b> <br>
    <p> Cobro por dia : <b>${cobropordia.toFixed(2)}</b> <br>
    <p> Cobro por dia extra : <b>${cobropordiaextra.toFixed(2)}</b> <br>
    <p> Sueldo total: <b>${totalsueldo.toFixed(2)}</b></p>`; 
    document.getElementById("resultado").innerHTML = salida;


    constdatosusuario= JSON.parse(localStorage.getItem("datosusuario")) || {nombrepersona:nombre,sueldopersona:sueldo,diaspersona:dias,diasextrapersona:diasextra};

    (nombre == "") ? nombreerror.innerHTML = "Ingrese un valor al campo!" : mensaje = document.createElement("div");
    mensaje.innerHTML = `<h3>${nombre}</h3>`;
    nombreerror.innerHTML = "";

    (sueldo == "") ? sueldoerror.innerHTML = "Ingrese un valor al campo!" : mensaje2 = document.createElement("div");
    mensaje2.innerHTML = `<h3>${sueldo}</h3>`;
    sueldoerror.innerHTML = "";

    (dias == "") ? diaserror.innerHTML = "Ingrese un valor al campo!" : mensaje3 = document.createElement("div");
    mensaje3.innerHTML = `<h3>${dias}</h3>`;
    diaserror.innerHTML = "";

    (diasextra == "") ? diasxerror.innerHTML = "Ingrese un valor al campo!" : mensaje4 = document.createElement("div");
    mensaje4.innerHTML = `<h3>${diasextra}</h3>`;
    diasxerror.innerHTML = "";

}

fetch('JS/asdasd.json')
.then((respuesta) => respuesta.json())
.then ((datas) => {
    let salidas = "";
    datas.forEach(valores => {
        salidas += `${valores.moneda} valor: ${valores.valor} <br>`; 
    });
    document.getElementById("resultado2").innerHTML = salidas;
});



document.getElementById("boton1").addEventListener("click", calculo);


