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
A = √s(sa) (sb) (s—c),
where s is the semiperimeter of the triangle; that is,
a+b+c 2 S =
A (a+b+c)(-a+b+c) (a−b+c) (a+b-c)
A = 4 /2(a2b2+ a2c2+ b²c²) (a4+ b² + c²) -
Heron's formula can also be written as 1 1 A A = (a² + b² + c²)2-2(a² + b² + c²) √(a². 4V 4a2b2 (a²+b²- c²)2. 
 */

const side1 = 5;
const side2 = 6;
const side3 = 7;

const perimeter = (side1 + side2 + side3) / 2;
const area = Math.sqrt(
  perimeter * ((perimeter - side1) * (perimeter - side2) * (perimeter - side3))
);

console.log(area);
