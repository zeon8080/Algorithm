function solution(a, b) {
    var answer = 0;
    
if(a%2!==0 && b%2!==0){
  answer = a*a + b*b
} else if((a+b)%2!==0){
  answer= (a+b)*2
} else if(a%2===0 && b%2===0 && a>b){
  answer=a-b
} else{
  answer = b-a
}
    return answer;
}