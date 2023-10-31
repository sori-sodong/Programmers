function solution(n) {
    var answer = 0;
    const countOne = (number) => {
        return number.toString(2).split('1').length -1
    } 
    const n1 = countOne(n);
    while(true) {
        answer = ++n
        if(countOne(answer) === n1) return answer;
    }
}