// Get a random integer from 1 to 10 inclusive
const num = Math.ceil(Math.random() * 10);
console.log(num);

const text = prompt("1 dan 10 gacha bo'lgan sonni taxmin kiriting: ");
if (text == num) {
    console.log('Matched');
} else {
    console.log('Not matched, the number was ' + text)
}
