function solution(n) {
    var answer = 0;
    answer = String(n);
    answer = answer.split('')
    answer = answer.sort((a,b) => b-a);
    answer = answer.join('');
    answer = answer/1
    return answer;
}