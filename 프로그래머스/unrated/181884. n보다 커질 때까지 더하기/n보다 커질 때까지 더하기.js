function solution(numbers, n) {
    let sum = 0
let answer = 0;
let arr = []
    for(let i = 0; i < numbers.length; i++){
  sum += numbers[i]
  if( sum > n ){
  arr.push(sum)
   answer = [...arr].shift()
  }

}        return answer
}