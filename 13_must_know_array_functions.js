
petMembers = [
    '베르가',
    '오가로스',
    '모가로스',
    '테이노스',
    '청룡',
    '얀기로'
]
console.log(petMembers);                // [ '베르가', '오가로스', '모가로스', '테이노스', '청룡', '얀기로' ]

let petMembers2 = petMembers;
console.log(petMembers2);               // [ '베르가', '오가로스', '모가로스', '테이노스', '청룡', '얀기로' ]
console.log(petMembers2 === petMembers) // true : 동일한 메모리 공간을 참조한다.

let petMembers3 = [
    ...petMembers,
]
console.log(petMembers3);               // [ '베르가', '오가로스', '모가로스', '테이노스', '청룡', '얀기로' ]
console.log(petMembers3 === petMembers); // false : 다른 메모리 공간을 참조한다. immutable programming 을 할 때 spread operator를 많이 사용함

let petMembers4 = [
    petMembers
]
console.log(petMembers4);               // [ [ '베르가', '오가로스', '모가로스', '테이노스', '청룡', '얀기로' ] ]

/* join() : 배열 원소를 string 으로 연결할 때 사용 */
console.log(petMembers.join())          // 베르가,오가로스,모가로스,테이노스,청룡,얀기로
console.log(typeof petMembers.join())
console.log(petMembers.join('/'))       // 베르가/오가로스/모가로스/테이노스/청룡/얀기로

/* sort() */
let arr = [ 5, 7, 2, 9];
console.log(arr.sort());
arr = [ 5, 7, 2, 9];
console.log(arr.sort((a, b) => {return a > b ? -1 : 0}));

/* map() */

console.log(petMembers.map((x)=>x));    // [ '베르가', '오가로스', '모가로스', '테이노스', '청룡', '얀기로' ]
console.log(petMembers.map((x) => `페트 : ${x}`));
/*
[
  '페트 : 베르가',
  '페트 : 오가로스',
  '페트 : 모가로스',
  '페트 : 테이노스',
  '페트 : 청룡',
  '페트 : 얀기로'
]
*/
console.log(petMembers.map((x)=>x)) // map() : immutable function 확인

// 조건별 대체
console.log(petMembers.map((x) => {
    if(x === '오가로스')
        return '오가로스(진)';
    else
        return x;
}))
// [ '베르가', '오가로스(진)', '모가로스', '테이노스', '청룡', '얀기로' ]


/* filter() */
console.log(petMembers.filter((x) => x.includes('로스')))   // [ '오가로스', '모가로스' ]

/* find() */
console.log(petMembers.find((x) => x.includes('로스')))     // 오가로스
console.log(petMembers.findIndex((x) => x.includes('로스')))    // 1 (number type)

/* reduce() */
let numbers = [6, 8, 5, 2, 5, 7, 2, 9]
console.log(numbers.reduce((p, n ) => p + n, 0))
