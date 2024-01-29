function solution(n) {
    var answer = 0;
    answer = String(n);
    answer = answer.split('')
    answer = answer.sort((a,b) => {
        console.log(a,b)
        return b-a});
    answer = answer.join('');
    answer = answer/1
    return answer;
}