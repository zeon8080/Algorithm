function solution(num_list) {
  let mul = 1;
  let sum = 0;  
  let answer = 0;
   for(let i = 0; i < num_list.length; i++ )
{

  if(num_list.length > 10){
sum+=num_list[i]    
    answer = sum
  } else if (num_list.length<= 10){
    mul*=num_list[i]
    answer= mul
  } 
}
  return answer
}

