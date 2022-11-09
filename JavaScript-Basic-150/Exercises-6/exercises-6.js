/**
 * Yil kabisa yili ekanligini aniqlash uchun quyidagi amallarni bajaring:
 *
 * 1-qadam: Agar yil 4 ga teng bo'linadigan bo'lsa, 2-bosqichga o'ting. Aks holda, 5-bosqichga o'ting.
 * 2-qadam: Agar yil 100 ga teng bo'linadigan bo'lsa, 3-bosqichga o'ting. Aks holda, 4-bosqichga o'ting.
 * 3-qadam: Agar yil 400 ga teng bo'linadigan bo'lsa, 4-bosqichga o'ting. Aks holda, 5-bosqichga o'ting.
 * 4-qadam: Yil kabisa yili (u 366 kundan iborat).
 * 5-qadam: Yil kabisa yil emas (uning 365 kuni bor).
 *
 */

// -------------------------------------------------

// Sample Solution-1 :

function leapyear(year) {
  return year % 100 === 0 ? year % 400 === 0 : year % 4 === 0;
}
console.log(leapyear(2016));
console.log(leapyear(2022));
console.log(leapyear(2002));
console.log(leapyear(1800));

// -------------------------------------------------

// Sample Solutions-2:

const is_leapyear = (year) => new Date(year, 1, 29).getMonth() === 1;
console.log(is_leapyear(2016));
console.log(leapyear(2022));
console.log(leapyear(2002));
console.log(leapyear(1800));