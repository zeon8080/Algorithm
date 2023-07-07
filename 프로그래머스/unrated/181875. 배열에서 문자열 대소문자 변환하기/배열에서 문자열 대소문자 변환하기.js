function solution(strArr) {
return strArr.map(v => {
  if(strArr.indexOf(v)%2===0) return strArr[strArr.indexOf(v)].toLowerCase()
  if(strArr.indexOf(v)%2===1) return strArr[strArr.indexOf(v)].toUpperCase()
})
}