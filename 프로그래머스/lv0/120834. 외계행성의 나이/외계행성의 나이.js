function solution(age) {
    let arr =[]
    let answer = ''
arr = String(age).split('')
    
    for(let i = 0; i < arr.length; i++){
  answer += String.fromCharCode(Number(arr[i])+97)
}
   return answer
}