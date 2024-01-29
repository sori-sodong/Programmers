function solution(x) {
    var answer = true;
    let sum = 0;
    answer = !(x % (String(x).split('').reduce((a,b) => +a + +b)));
    return answer;
}