//usage of array methods flat(), isArray(), from()

const name=['sandhya', 'shivani', 'sneha', 'snehal', 'snehalatha'];
const age=[20, 21, 22,[ 23, 24], [4,8,9,[10,11,12]]];
const result=age.flat(Infinity); 
console.log(result);

console.log(Array.isArray(result));
console.log(Array.from('sandhya'));
let score1=10
let score2=20
let score3=30
console.log(Array.of(score1,score2,score3));
