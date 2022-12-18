let sueldo;

var usuario = {
  nombre : 'Tomas',
  DNI : 43875942,
}

sueldo = parseFloat(prompt ("ingrese su sueldo"));

const dias = [];
do{
  dias.push(parseFloat(prompt ("ingrese la cantidad de dias trabajados (maximo 21)")));
    if(dias > 21)
      alert ("Ingrese una cantidad de dias valida");    
}
while ((dias < 1) || (dias > 21));
console.log(dias);


let  cobropordia = sueldo / dias;
console.log(cobropordia);
let  cobroporhora = cobropordia / 8;
console.log(cobroporhora);


const diasextra = [];
do{
  diasextra.push(parseFloat(prompt ("ingrese la cantidad de dias extra trabajados")));
    if(diasextra > 9)
    alert ("ingrese una cantidad de dias extra valida");
}
while (diasextra < 0);
console.log (diasextra);

let cobropordiaextra =diasextra * cobropordia * 2;

if (diasextra > 0){ 
  
  alert(usuario.nombre +" "+ "(" + usuario.DNI + ")" +" "+ "tu cobro por dia extra es: " + cobropordiaextra.toFixed(2));
}
console.log(cobropordiaextra);

let  totalsueldo = cobropordiaextra + cobropordia * dias;

alert(usuario.nombre +" "+ "(" + usuario.DNI + ")" +" "+ "Su sueldo de este mes sera de: "+totalsueldo.toFixed(2));
console.log(totalsueldo);