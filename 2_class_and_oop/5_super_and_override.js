/**
 * super and override
 */
// 부모클래스(변수, 메소드) 정의
class IdolModel {
    name;
    year;
    
    constructor (name, year) {
        this.name = name;
        this.year = year;
    }
    sayHello () {
        return `안녕하세요. ${this.name} 입니다.`;
    }
}


// 자식클래스에서 추가 변수 선언
// 자식클래스에서 생성자 override
// 자식클래스에서 함수 override

class FemaleIdolModel extends IdolModel{
    part;
    constructor(name, year, part){
        // this.name = name;
        // this.year = year;
        super(name, year);
        this.part = part;
    }
    sayHello(){
        // return `안녕하세요. ${this.name} 입니다. ${this.part}을(를) 맡고 있습니다.`; // super 키워드 사용 주의사항
        return `${super.sayHello()} ${this.part}을(를) 맡고 있습니다.`;
    }
}

const yuJin = new FemaleIdolModel('안유진', 2003, '보컬');
console.log(yuJin); // FemaleIdolModel { name: '안유진', year: 2003, part: '보컬' }
console.log(yuJin.sayHello());  // 안녕하세요. 안유진 입니다. 보컬을(를) 맡고 있습니다.
