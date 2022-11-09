/**
 * Tushuntirish:
 *
 * Berilgan uch tomonli uchburchakning maydonini hisoblang:
 * Geometriyada Iskandariya Qahramoni nomi bilan atalgan Heron formulasi asos sifatida
 * tomonni yoki boshlanish cho‘qqisini ixtiyoriy tanlashni talab qilmasdan, uchburchakning maydonini beradi,
 * uchburchakning maydoni uchun boshqa formulalardan farqli o'laroq, masalan, poydevorning yarmi
 * balandligi yoki ikki tomonning o'zaro faoliyati mahsulotining yarmi normasi.
 * 
 * 
 * 
 * Heron's formula states that the area of a triangle whose sides have lengths a, b, and c is
Area = Square root of√s(s - a)(s - b)(s - c)

where s is half the perimeter, or (a + b + c)/2.

 */

const side1 = 5;
const side2 = 6;
const side3 = 7;

const perimeter = (side1 + side2 + side3) / 2;

const area = Math.sqrt(
  perimeter * ((perimeter - side1) * (perimeter - side2) * (perimeter - side3))
);

console.log(area);


