/* 명시적 */
let age = 34;
let stringAge = age.toString()
console.log(typeof stringAge, stringAge)

/* 암묵적 */
let test = age + ''
console.log(typeof age, age)    // string 34
console.log('98' + 2)   // 982 : string 으로 타입 변환
console.log('98' * 2)   // 196 : string에는 곱셈 개념이 없으므로 숫자로 계산
console.log('98' - 2)   // 96 : string에는 뺄셈 개념이 없으므로 숫자로 계산
console.log('98' / 2)   // 49 : string에는 나눗셈 개념이 없으므로 숫자로 계산


/* number, string, null, undefined, boolean, symbol, object */
/* 명시적으로 문자열로 변환 */
let number = 5;
console.log(typeof number)
console.log(typeof (5).toString(), (5).toString())  // string 5
// console.log(typeof (null).toString(), (null).toString())    // TypeError: Cannot read properties of null (reading 'toString')
// console.log(typeof (undefined).toString(), (undefined).toString())  // TypeError: Cannot read properties of undefined (reading 'toString')
console.log(typeof (true).toString(), (true).toString())    // string true
console.log(typeof (Infinity).toString(), (Infinity).toString()) // string Infinity

/* 명시적으로 숫자 타입으로 변환 */
console.log(typeof parseInt(''), parseInt(''))          // number Nan
console.log(typeof parseInt('0'), parseInt('0'))        // number 0
console.log(typeof parseInt('0.99'), parseInt('0.99'))  // number 0
console.log(typeof parseFloat('0.99'), parseFloat('0.99'))  // number 0.99
console.log(typeof parseInt(false), parseInt(false))    // number Nan
console.log(typeof parseInt(true), parseInt(true))      // number Nan
console.log(typeof +'1', +'1')  // number 1

/* Boolean 타입으로의 변환 (실무에서 굉장히 많이 쓰임) 
값이 있는 문자열은 true, 값이 없는 문자열은 false
값이 없을 땐 false, 값이 있을 땐 true 로 이해하면 일반적으로 맞음
객체 타입은 값이 있든 없든 항상 boolean 형변환 시 항상 true

*/
console.log(!'x')   // false
console.log(!!'x')  // true
console.log(!!'')   // false
console.log(!!0)    // false
console.log(!!1)    // true
console.log(!!100)  // true
console.log(!!'0')  // true
console.log(!!null) // false
console.log(!!undefined)    // false
console.log(!!false)// false
console.log(!!{})   // true
console.log(!!{a : 1})  // true
console.log(!![])       //true
console.log(!![1, 2, 3])   // true

