function solution(array) {
 
    array.sort((a,b)=>a-b)
    let num = array.length-1
    
    return array[num/2]
}