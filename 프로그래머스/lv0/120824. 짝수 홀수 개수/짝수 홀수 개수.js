function solution(num_list) {
   let arr = []
let arr2 = []
let answer = []

for(let i = 0; i < num_list.length; i++){
  if(num_list[i]%2===0){
    arr.push(num_list[i])
  } else if(num_list[i]%2===1){
    arr2.push(num_list[i])
  }
}
answer.push(arr.length)
answer.push(arr2.length)
    
    return answer
}