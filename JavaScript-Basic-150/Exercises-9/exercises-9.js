today = new Date();
const cams = new Date(today.getFullYear(), 11, 25);

if (today.getMonth() == 11 && today.getDate() > 25) {
  cams.setFullYear(cams.getFullYear() + 1);
}
const oneDay = 1000 * 60 * 60 * 24;
console.log(
  ` Christmasga ${Math.ceil(
    (cams.getTime() - today.getTime()) / oneDay
  )} kun qoldi ! `
);

