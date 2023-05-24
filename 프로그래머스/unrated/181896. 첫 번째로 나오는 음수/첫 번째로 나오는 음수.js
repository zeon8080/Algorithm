function solution(num_list) {
    let target = (el) => el <= 0;
    return num_list.findIndex(target)
}