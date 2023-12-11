let first_list = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let second_list = [6, 4, 3, 2, 7, 9, 11, 12];
let third_list = [12, 4, 3, 2, 7, 9, 11, 6];

function solution(num_list) {
    var solution = num_list[0];
    for (i = 0; i < num_list.length; i++) {
        if (num_list[i] > solution ) {
            var solution = num_list[i + 1]
        } 
    }

    return solution
}

console.log(solution(second_list))





