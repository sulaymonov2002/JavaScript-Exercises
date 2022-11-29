let today = new Date();
let dd = today.getDate();

let mm = today.getMonth() + 1;
let yyyy = today.getFullYear();
if (dd < 10) {
  dd = `0${dd}`;
}
console.log(dd);

if (mm < 10) {
  mm = `0${mm}`;
}
console.log(mm);

today = `${mm}-${dd}-${yyyy}`;
console.log(today);

today = `${mm}/${dd}/${yyyy}`;
console.log(today);

today = `${dd}-${mm}-${yyyy}`;
console.log(today);

today = `${dd}/${mm}/${yyyy}`;
console.log(today);
