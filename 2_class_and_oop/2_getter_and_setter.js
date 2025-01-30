/**
 * getter and setter
 */
class IdolModel{
    name;
    year;
    constructor(name, year){
        this.name = name;
        this.year = year;
    }
    get name(){
        return `이름은 ${this.name} 입니다.`;
    }
    get year(){
        return `나이는 ${this.year} 입니다.`;
    }
    set name(name){
        this.name = name;
    }
    set year(year){
        this.year = year;
    }
    toString(){
        return `${this.name} - ${this.year}`;
    }
}

const yuJin = new IdolModel('안유진', 2003);
console.log(yuJin);
console.log(yuJin.toString());
console.log(yuJin.name);
console.log(yuJin.year);
yuJin.name = '이름없음';
// yuJin.setName = '이름없음' // setName으로 setter 명을 변경할 경우
console.log(yuJin.toString());
yuJin.name('이름없음');