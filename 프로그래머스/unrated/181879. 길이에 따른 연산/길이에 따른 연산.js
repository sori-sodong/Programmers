function solution(num_list) {
    var answer = 0;
    if(num_list.length >=11) {
        num_list.map(value => answer += value)
    } else {
        answer =1
        num_list.map(value => answer *= value )
    }
    return answer;
}