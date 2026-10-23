function solution(str, m, c) {
    let answer = '';
    let strArr = []; 
    for(let i = 0; i <= str.length - m; i +=  m) {
        strArr.push(str.substr(i, m));
    }
    for(let i = 0; i < strArr.length; i++) {
        answer += strArr[i][c-1];
    }
    return answer;
}
