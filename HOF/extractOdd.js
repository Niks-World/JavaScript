/* Given an array of numbers extract the numbers which are odd

Sample Input - [1,2,3] Sample Output - [1,3]*/

var nums= [1,2,3,4,5,6,7];

var out =nums.filter(function(ele){
    return ele % 2 !== 0;
})
console.log(out);

//output =[ 1, 3, 5, 7 ]

