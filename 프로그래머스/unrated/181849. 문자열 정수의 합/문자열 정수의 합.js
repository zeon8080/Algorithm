function solution(num_str) {
   let b = 0

for(let i = 0; i < num_str.length ; i++){
    b += Number(num_str[i])
}
    return b
}