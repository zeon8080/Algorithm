function solution(array) {
  let arr = [];
    arr.push(Math.max(...array))
    arr.push(array.indexOf(Math.max(...array)))

return arr
}