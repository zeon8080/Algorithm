function solution(num, k) {
   return String(num).split('').map(Number).includes(k) ? String(num).split('').map(Number).indexOf(k)+1 : -1
}