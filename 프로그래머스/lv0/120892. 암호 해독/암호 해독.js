function solution(cipher, code) {
    let arr = [];

for(let i = code-1; i<cipher.length; i+=code){
  arr.push(cipher[i])
}

return arr.join('')
}