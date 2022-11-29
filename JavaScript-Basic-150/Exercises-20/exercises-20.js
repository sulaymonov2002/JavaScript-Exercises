function positive_negative(x, y) {
  if ((x < 0 && y > 0) || (x > 0 && y < 0)) {
    return true;
  } else return false;
}

console.log(positive_negative(2, 2));
console.log(positive_negative(2, 2));
console.log(positive_negative(2, 2));
console.log(positive_negative(-2, -2));

// massiv va blokni qabul qiladi (JS: funktsiya) va agar blok
// (/funktsiya) massivdagi elementlarning hech biri uchun rost 
// bo'lmasa, true qiymatini qaytaradi. Bo'sh ro'yxat haqiqatni qaytarishi kerak.

