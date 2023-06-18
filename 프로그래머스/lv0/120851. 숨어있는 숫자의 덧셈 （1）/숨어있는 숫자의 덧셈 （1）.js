function solution(my_string) {
   let arr = ['1','2','3','4','5','6','7','8','9']
let sum = 0
 let answer=my_string.split('').filter(el=>arr.includes(el)).map(Number)


for(let i = 0; i <answer.length; i++){
  sum += answer[i]
}

return sum
}