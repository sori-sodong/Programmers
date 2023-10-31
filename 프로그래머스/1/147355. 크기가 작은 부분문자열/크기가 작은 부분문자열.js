function solution(t, p) {
    var answer = 0;
    const firstP = p.split('')[0];
    for(let i = 0; i<=t.length-p.length; i++) {
        if(t[i] <= p) {
            const _t = t.slice(i,p.length+i);
            if(_t <= p) answer++;
        }
    }
    return answer;
}