function datos(ocurrencia) {
  var contador = 0;
  for (var i = 0; i < ocurrencia[0].length; i++) {
    if (ocurrencia[0][i] == ocurrencia[1]) {
      contador++;
    }
  }
  console.log(contador);
}
datos([[1, 5, 5, 4, 6, 7, 8, 9, 4, 6, 7, 1, 2, 3, 4, 5, 6, 7, 8, 9], 8]);
