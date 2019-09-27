function num(llenar) {
  var arreglo = Array();
  var ganador = false;
   
  for (var i = 0; i < 20; i++) {
    arreglo[i] = Math.floor(Math.random() * 100) + 1;
    console.log(arreglo[i]);
  }
  for (var j = 0; j < arreglo.length; j++) {
    if (arreglo[j] == llenar) {
      console.log("Ganaste");
      ganador = true;
      break;
    }
  }
  if (ganador == false) {
    console.log("Perdiste");
  }
}
num(20);
