let ogaros = {
    name : '오가로스',
    group : '오가로스류',
    attack : function() {
        return `${this.name}가 공격합니다.`;    // 같은 객체의 변수를 접근할 때 this 키워드를 사용한다.
    }
}

console.log(ogaros);
console.log(ogaros.name);
console.log(ogaros['name']);
console.log(ogaros.attack());   // 실행을 해야 하므로 ()를 붙여줘야 한다.


// 변수를 이용하여 객체를 정의하는 방법

const nameKey = 'name';
const nameValue = '오가로스';

const groupKey = 'group';
const groupValue = '오가로스류'

let ogaros2 = {
    [nameKey] : nameValue,
    [groupKey] : groupValue,
    attack : function() {
        `${this.nameKey} 가 공격합니다.`;
    }
}
console.log(ogaros2);
ogaros2['name'] = '모가로스';
console.log(ogaros2);

// 존재하지 않는 키값을 넣는 경우, 새롭게 추가된다.
ogaros2['skill1'] = '일격 필살';
console.log(ogaros2);

// 삭제
delete ogaros2['skill1'];
console.log(ogaros2);

// 모든 키 가져오기
console.log(Object.keys(ogaros2));

// 모든 밸류 가져오기
console.log(Object.values(ogaros2));

// 간단하게 객체 정의 => 키 이름 : 변수 이름 (같아도 무관하다.)
const name = '베르가';
const berga = {
    name : name,
}
console.log(berga);
// 간단하게 객체 정의 : 키값과 변수의 이름이 같을 땐 하나만 명시해도 된다.
const berga2 = {
    name,
}
console.log(berga2);