function solution(myString, pat) {
   return myString.split('').map(a => a=== 'A' ? 'B' : 'A').join('').includes(pat)? 1 : 0
}