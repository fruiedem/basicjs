// * 을 이용해서 6 * 6 정사각형을 출력해라

let ch = ''
let squareLen = 6
for(let i = 0; i < 6; i++){
    for(let j = 0; j < 6; j++)
        ch += '*'
    ch += '\n'
}

console.log(ch)

let yuJin = {
    year : 2003,
    name : '안유진',
    group : '아이브'
}

for(let key in yuJin){
    console.log(key)
}

let iveMembers = [
    '안유진',
    '가을',
    '레이',
    '장원영',
    '리즈',
    '이서'
]

for(let key in iveMembers){
    console.log(`${key} : ${iveMembers[key]}`)
}
for(let value of iveMembers){
    console.log(value)
}