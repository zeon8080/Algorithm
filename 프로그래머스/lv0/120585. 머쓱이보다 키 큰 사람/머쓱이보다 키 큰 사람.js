function solution(array, height) {
arr = []

for(let i = 0; i < array.length; i++){
  if(array[i] > height) {
    arr.push(array[i])
  } 
}
  return arr.length
}