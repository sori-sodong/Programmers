function solution(players, callings) {
    var answer = [];
    const obj =  {};
    players.map((value, index) =>  obj[value] = index)
    callings.map(value => {
        
        const prevIndex = obj[value]-1;
        const curIndex = obj[value];
        const prevPerson = players[obj[value]-1];

        players[curIndex] = prevPerson;
        players[prevIndex] = value;
        
        obj[value] -=1;
        obj[prevPerson] += 1;
        
    })
    
    return players;
}