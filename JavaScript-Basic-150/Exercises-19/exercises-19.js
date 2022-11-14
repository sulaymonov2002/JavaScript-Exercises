function testhundered(x) {
  return Math.abs(100 - x) <= 20 || Math.abs(400 - x) <= 20;
}
console.log(testhundered(10));
console.log(testhundered(90));
console.log(testhundered(99));
console.log(testhundered(199));
console.log(testhundered(200));
console.log(testhundered(400));