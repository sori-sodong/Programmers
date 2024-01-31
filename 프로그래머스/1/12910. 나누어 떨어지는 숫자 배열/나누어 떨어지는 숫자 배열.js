function solution(arr, divisor) {
    var answer = [];
    arr.forEach((value) => {
        value%divisor === 0 ? answer.push(value) : null;
    })
    return answer.length === 0 ? [-1] : answer.sort((a,b) => a-b);
}