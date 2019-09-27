function radiocirculo(radioC) {
  var area = 0;
  area = Math.PI * (radioC * radioC);

  if (radioC < 0 || radioC == 0) {
    console.log(-1);
  } else {
    console.log(area);
  }
}
radiocirculo(8);
