function solution(n, control) {
    let arr = control.split('')


for(let i = 0; i<arr.length; i++){
  if(arr[i]==='w'){
    n += 1
  } else if(arr[i]==='s'){
    n -= 1
  } else if(arr[i]==='d'){
    n += 10
  } else {
    n -= 10
  }
}

return n
}