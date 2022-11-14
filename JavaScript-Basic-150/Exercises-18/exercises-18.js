function test50(x, y) {
  return x === 50 || y === 50 || x + y === 50;
}

console.log(test(50, 50));
console.log(test(20, 50));
console.log(test(20, 20));
console.log(test(20, 30));
 