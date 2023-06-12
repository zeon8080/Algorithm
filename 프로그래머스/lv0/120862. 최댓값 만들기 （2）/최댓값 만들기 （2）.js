function solution(numbers) {
numbers.sort((a,b)=>b-a)

let n=numbers.length

return numbers[n-1]*numbers[n-2] > numbers[0]*numbers[1] ? numbers[n-1]*numbers[n-2]:numbers[0]*numbers[1]
}