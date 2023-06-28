function solution(before, after) {
   let answer = 0
let arr1 = before.split('').sort().join('')
let arr2 = after.split('').sort().join('')

if(arr1===arr2){
  answer = 1
} else{
  answer = 0
}
    
    return answer 
}