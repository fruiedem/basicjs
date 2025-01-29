/**
 * Class Keyword
 * 
 */

/* 기본값을 정의한 클래스 정의 */
class IdolModel {
    name = '안유진';
    group = 2003;
}
console.log(IdolModel); // [class IdolModel]
const yuJin = new IdolModel();
console.log(yuJin); // IdolModel { name: '안유진', group: 2003 }

/* 입력에 따른 인스턴스화를 위한 클래스 정의 */
class IdolModel2 {
    name;
    year;

    constructor(name, year){
        this.name = name;
        this.year = year;
    }
}

const gaeul = new IdolModel2();
console.log(gaeul); // IdolModel2 { name: undefined, year: undefined }

const rei = new IdolModel2('레이', 2004);   // IdolModel2 { name: '레이', year: 2004 }
console.log(rei);

console.log(`rei : ${rei.name}, ${rei.year}`);

/* 메소드 정의 */
class IdolModel3 {
    name;
    year;
    constructor (name, year){
        this.name = name;
        this.year = year;
    }
    sayName(){
        return `안녕하세요, 저는 ${this.name} 입니다.`;
    }
}

const wonYoung = new IdolModel3('장원영', 2004);
console.log(wonYoung.sayName()); // 안녕하세요, 저는 장원영 입니다.

console.log(typeof IdolModel);  // function

console.log(typeof wonYoung);   // object