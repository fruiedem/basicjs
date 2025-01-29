/* copy by value */
let original = '안녕하세요';
let clone = original;
console.log(original);
console.log(clone);

clone += ' 안유진입니다.';
console.log('-----------------');
console.log(original);
console.log(clone);

/* copy by reference */
console.log('---------copy by reference--------');
let originalObj = {
    name : '안유진',
    group : '아이브',
}

let cloneObj = originalObj;
console.log(originalObj);
console.log(cloneObj);
console.log('-----------------');
originalObj['group'] = '코드팩토리';
console.log(originalObj);
console.log(cloneObj);

console.log(original === clone);        // false : 값이 다르므로
console.log(originalObj === cloneObj)   // true : 주소가 같으므로

console.log('-----------------');

const yuJin = {
    name : '안유진',
    group : '아이브',
}

const yuJin2 = {
    ...yuJin
}
console.log(yuJin2);            // { name: '안유진', group: '아이브' }
console.log(yuJin === yuJin2);  // false

const yuJin3 = {
    name : '코드팩토리',
    ...yuJin
}
console.log(yuJin3);
const yuJin4 = {
    ...yuJin,
    name : '코드팩토리',
}

console.log(yuJin4);

const numbers = [1, 3, 5];
const numbers2 = [
    10,
    ...numbers
]
console.log(numbers2)   // [ 10, 1, 3, 5 ]
const numbers3 = [
    ...numbers,
    10
]
console.log(numbers3)   // [ 1, 3, 5, 10 ]