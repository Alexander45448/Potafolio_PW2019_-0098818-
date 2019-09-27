function suma(arreglo) {
  var sum = 0;
  var promedio = 0;

  for (var i = 0; i < arreglo.length; i++) {
    sum = sum + arreglo[i];
  }
  promedio = sum / arreglo.length;
  console.log(sum);
  console.log(promedio);
}

suma([6, 8, 7, 5, 1]);
