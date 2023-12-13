
// these lists are provided to test the function

let first_list = [1, 2, 3, 4, 9, 6, 7, 8, 5];
let second_list = [6, 4, 3, 2, 7, 9, 11, 12];
let third_list = [12, 4, 3, 2, 7, 9, 11, 6];


//this next function will take the highest number in a list and return it

function solution(num_list) {

    // let's save the first index of the list as the highest value until we find one that's higher
    var solution = num_list[0];

    //with this for loop we'll iterate the list and compare each item with the current higest value
    for (i = 0; i < num_list.length; i++) {
        if (num_list[i] > solution ) { //this will save an index that's higher than our current higest value as the solution
            var solution = num_list[i]
        } 
    }

    return solution
}

console.log(solution(first_list)) //this is to test purposes



//this next function will be in a button in the html file 

function input__list() {
    let user__list = prompt("please, insert numbers separated by commas: ");
    let final__list = user__list.split(",").map(Number); //this will create a new array with the numbers the user wants
    alert(`the highest number in your list is ${solution(final__list)}`);


}








