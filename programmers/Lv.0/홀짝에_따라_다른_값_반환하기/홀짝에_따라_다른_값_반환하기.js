function solution(n) {
    let total = 0;
    
    if(n % 2 === 0) {
        for(let i = 2; i <= n; i += 2) {
            total += i * i;
        }
    } else {
        for(let i = 1; i <= n; i += 2) {
           total += i;
        }
    }
    return total;
}
