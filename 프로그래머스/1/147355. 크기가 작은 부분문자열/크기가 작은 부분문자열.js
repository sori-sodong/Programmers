function solution(t, p) {
    var answer = 0;
    const firstP = p.split('')[0];
    for(let i = 0; i<=t.length-p.length; i++) {
        
        if(t[i] <= p) {
            let _t = '';
            for(let j = 0; j < p.length; j++) {
                let index = j+i;
                _t += t[index];
                
            }
            console.log(_t, p, _t<p)
            if(_t <= p) answer++;
        }
    }
    return answer;
}