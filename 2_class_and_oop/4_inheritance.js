/**
 * Inheritance (상속)
 */

// 부모클래스 정의
class IdolModel {
    name;
    year;
    constructor(name, year){
        this.name = name;
        this.year = year;
    }
    get name(){
        return this.name;
    }
    get year(){
        return this.year;
    }
}

// 자식클래스(1) 정의
class FemaleIdolModel extends IdolModel {
    dance(){
        return `여자 아이돌 ${this.name} 이 춤을 춥니다.`
    }
}
// 자식클래스(2) 정의
class MaleIdolModel extends IdolModel {
    sing(){
        return `남자 아이돌 ${this.name} 이 노래를 부릅니다.`
    }
}
// 상속 대상에 생성자 확인
const yuJin = new FemaleIdolModel('안유진', 2003);
console.log(yuJin.dance());
const jiMin = new MaleIdolModel('지민', 2000);
console.log(jiMin.sing());

// 상속 대상에 getter 와 setter 확인
console.log(yuJin.name);
console.log(yuJin.year);

console.log(jiMin.name);
console.log(jiMin.year);

console.log(yuJin.category);
// instanceof 를 이용한 상속 chain 확인
const idol = new IdolModel('아이돌', 1992);
console.log(yuJin instanceof IdolModel);        // true
console.log(yuJin instanceof FemaleIdolModel);  // true
console.log(yuJin instanceof MaleIdolModel);    // false

console.log(idol instanceof IdolModel);         // true
console.log(idol instanceof FemaleIdolModel);   // false
console.log(idol instanceof MaleIdolModel);     // false

