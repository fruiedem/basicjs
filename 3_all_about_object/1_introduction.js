// {} 를 이용한 객체 생성
const yuJin = {
    name : '안유진',
    year : 2003
}
console.log(yuJin);
console.log(typeof yuJin);

// 클래스의 인스턴스화
class IdolModel {
    constructor (name, year){
        this.name = name;
        this.year = year;
    }
}
const yuJin2 = new IdolModel('안유진', 2003);
console.log(yuJin2);
console.log(typeof yuJin2);

// 생성자 함수

function IdolFunction(name, year){
    this.name = name;
    this.year = year;
}
const yuJin3 = new IdolFunction('안유진', 2003);
console.log(yuJin);
console.log(typeof yuJin3);