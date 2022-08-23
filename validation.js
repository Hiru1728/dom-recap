const number = '23';
// String number boolean
if (typeof number === 'number') {
    console.log('value is a number');
}
else {
    console.log('value is not a number');
}

const numbers = [2, 12, 56, 90];
const student = { name: 'hiru', job: 'programming' }
console.log(Array.isArray(student));
console.log(Array.isArray(numbers));
