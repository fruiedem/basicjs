const yuJin = {
    name : '안유진',
    year : 2003,
    get name() {
        return this.name;
    },
    get age() {
        return new Date().getFullYear() - this.year;
    },
    set age(age){
        this.year = new Date().getFullYear() - age;
    }
}

// 프로퍼티 확인
console.log(yuJin);
console.log(yuJin.age);
yuJin.age = 32;
console.log(yuJin.age);
console.log(yuJin.year);


// 속성 설명자 확인
console.log('-----Object.getOwnPropertyDescriptors-----');
console.log(Object.getOwnPropertyDescriptors(yuJin));
console.log('-----Object.getOwnPropertyDescriptor-----');
console.log(Object.getOwnPropertyDescriptor(yuJin, 'name'));
/** Console Output
{
  get: [Function: get name],
  set: [Function: set name],
  enumerable: true,
  configurable: true
}
 */


console.log(Object.getOwnPropertyDescriptor(yuJin, 'age'));

// property와 property attribute 재정의
Object.defineProperty(yuJin, 'height', {
    value: 172,
    writable: true,
    enumerable: true,
    configurable: true,
})

console.log(Object.getOwnPropertyDescriptor(yuJin, 'height'));  // { value: 172, writable: true, enumerable: true, configurable: true }

// writable 프랙티스
console.log(yuJin.age); // 32
Object.defineProperty(yuJin, 'age', {
    value : 20,
    writable: false,
    enumerable : true,
    configurable : true
}); 
console.log(yuJin.age); // 20

console.log(typeof Object.getOwnPropertyDescriptor(yuJin, 'age'));  // object

// Spread operator 를 이용한 재정의
const descriptor = Object.getOwnPropertyDescriptor(yuJin, 'age');
Object.defineProperty(yuJin, 'age', {
    ... descriptor,
    value : 50,
    writable: false
});

console.log(Object.getOwnPropertyDescriptor(yuJin, 'age')); // { value: 50, writable: false, enumerable: true, configurable: true }
yuJin.age = 25;
console.log(Object.getOwnPropertyDescriptor(yuJin, 'age')); // { value: 50, writable: false, enumerable: true, configurable: true }

// enumerable 프랙티스
console.log(yuJin); // { name: [Getter], year: 1993, age: 50, height: 172 }
for(let key in yuJin){
    console.log(key);   // name year age height
}
console.log(Object.keys(yuJin));    // [ 'name', 'year', 'age', 'height' ]
Object.defineProperty(yuJin, 'height', {
    ...Object.getOwnPropertyDescriptor(yuJin, 'height'),
    enumerable: false
})
console.log(Object.keys(yuJin));    // [ 'name', 'year', 'age' ]
console.log(yuJin.height);  // 172


// configurable 프랙티스
Object.defineProperty(yuJin, 'height', {
    ...Object.getOwnPropertyDescriptor(yuJin, 'height'),
    configurable: false
});
console.log(Object.getOwnPropertyDescriptor(yuJin, 'height')); //{ value: 172, writable: true, enumerable: false, configurable: false }

// TypeError: Cannot redefine property: height
// Object.defineProperty(yuJin, 'height', {
//     ...Object.getOwnPropertyDescriptor(yuJin, 'height'),
//     enumerable: true
// });

Object.defineProperty(yuJin, 'height', {
    ...Object.getOwnPropertyDescriptor(yuJin, 'height'),
    value: 1
});
console.log(Object.getOwnPropertyDescriptor(yuJin, 'height')); // configurable: false 이지만, writable: true 이므로 value 변경 가능 확인 => { value: 1, writable: true, enumerable: false, configurable: false }
Object.defineProperty(yuJin, 'height', {
    ...Object.getOwnPropertyDescriptor(yuJin, 'height'),
    writable: false
});
console.log(Object.getOwnPropertyDescriptor(yuJin, 'height')); // configurable: false 이지만, writable: true -> false 변경 가능 확인

// configurable: false 일 때 writable:false -> true 는 변경 불가
// Object.defineProperty(yuJin, 'height', {
//     ...Object.getOwnPropertyDescriptor(yuJin, 'height'),
//     writable: true
// });
