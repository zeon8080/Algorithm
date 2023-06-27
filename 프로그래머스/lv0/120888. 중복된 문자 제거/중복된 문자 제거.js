function solution(my_string) {
    var answer = '';
    answer  = [...new Set(my_string)]


    return answer.join('')
}