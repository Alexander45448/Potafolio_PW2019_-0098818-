function fibonacci(num) {
  {
    if (num === 1) {
      return [0, 1];
    } else {
      var p = fibonacci(num - 1);
      p.push(p[p.length - 1] + p[p.length - 2]);
      return p;
    }
  }
}

console.log(fibonacci(4));
