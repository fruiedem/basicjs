const yuJin = {
    name : '안유진',
    year : 2003,
    get age() {
        return new Date().getFullYear() - this.year;
    },
    set age(age) {
        this.year = new Date().getFullYear() - age;
    }
}

/* isExtensible/preventExtensions, isSealed/seal, isFreezed/freeze */

// isExtensible/preventExtensions
console.log('----- isExtensible/preventExtensions -----');
console.log(Object.isExtensible(yuJin));    // true
yuJin['groupName'] = 'ive';
console.log(yuJin);
Object.preventExtensions(yuJin);    
console.log(Object.isExtensible(yuJin));    // false
yuJin['height'] = 170;      // 속성 추가 x
delete yuJin['groupName'];  // 속성 삭제 가능
console.log(yuJin); // { name: '안유진', year: 2003, age: [Getter/Setter] }

// isSealed/seal
console.log('----- isSealed/seal -----');
const yuJin2 = {
    name : '안유진',
    year : 2003,
    get age() {
        return new Date().getFullYear() - this.year;
    },
    set age(age) {
        this.year = new Date().getFullYear() - age;
    }
}

console.log(Object.isSealed(yuJin2));   // false
Object.seal(yuJin2);
console.log(Object.isSealed(yuJin2));   // true
console.log(Object.getOwnPropertyDescriptor(yuJin2, 'name'));    // configurable : false

// 에러 발생 => TypeError: Cannot redefine property: name
// Object.defineProperty(yuJin2, 'name',{
//     enumerable: false,
// });

yuJin2['height'] = 170; // 속성 추가 불가
delete yuJin2['name'];  // 속성 삭제 불가
console.log(yuJin2);

console.log('----- isFrozen/freeze -----');
const yuJin3 = {
    name : '안유진',
    year : 2003,
    get age() {
        return new Date().getFullYear() - this.year;
    },
    set age(age) {
        this.year = new Date().getFullYear() - age;
    }
}
console.log(Object.isFrozen(yuJin3));   // false
console.log(Object.getOwnPropertyDescriptor(yuJin3,'name')); 
console.log(Object.freeze(yuJin3));     
console.log(Object.getOwnPropertyDescriptor(yuJin3,'name')); // writable: false, configurable: false 확인

yuJin3['name'] = '김창준';
console.log(yuJin3) // name 값 변경 불가 확인

/* nested object 에는 적용 안됨 확인 */
console.log('----- nested object 에는 적용 안됨 확인 -----')
const yuJin4 = {
    name : '안유진',
    year : 2003,
    relatedBusiness:{
        name: '인기가요',
        date: 2025
    },
    get age() {
        return new Date().getFullYear() - this.year;
    },
    set age(age) {
        this.year = new Date().getFullYear() - age;
    }
}

console.log(Object.isSealed(yuJin4));   // false
console.log(Object.isSealed(yuJin4.relatedBusiness));   // false
Object.seal(yuJin4);
console.log(Object.isSealed(yuJin4));   // true
console.log(Object.isSealed(yuJin4.relatedBusiness));   // 여전히 false