
try {
    console.log('Hello');
    throw new Error('큰 문제가 생겼습니다!');
    console.log('Code factory');    // 실행 안됨
}catch(e){
    console.log('--- catch ---');
    console.log(e);
}finally{
    console.log('--- finally ---')
}
