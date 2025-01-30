/**
 * static keyword
 */

// static 키워드를 이용한 변수 정의
// static 키워드를 이용한 함수 정의

class IdolModel {
    name;
    year;
    static groupName = '아이브';

    constructor (name, year) {
        this.name = name;
        this.year = year;
    }
    // factory constructor 로 쓰이는 static 함수 (1)
    static fromObject (object) {
        return new IdolModel (
            object.name,
            object.year
        );
    }
    // factory constructor 로 쓰이는 static 함수 (2)
    static fromList (list){
        return new IdolModel(
            list[0],
            list[1]
        )
    }
}

console.log(IdolModel); // [class IdolModel] { groupName: '아이브' }
const yuJin = new IdolModel();
console.log(yuJin); // IdolModel { name: undefined, year: undefined }
const rei = new IdolModel('레이', 2004);
console.log(rei);   // IdolModel { name: '레이', year: 2004 }

const yuJin2 = IdolModel.fromObject({
    name : '안유진',
    year : 2003
})
console.log(yuJin2);   // IdolModel { name: '안유진', year: 2003 }

const yuJin3 = IdolModel.fromList([
    '안유진',
    2003
])
console.log(yuJin3) // IdolModel { name: '안유진', year: 2003 }