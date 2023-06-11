function solution(n) {
    let answer = 0;
    let arr = [];
   arr = String(n).split('').map((el)=>Number(el))

for(let i = 0 ; i<arr.length;i++){
  answer += arr[i]
}
    return answer
}