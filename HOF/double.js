/* Given an array of numbers generate an array containing the double value of the numbers

Sample Input [1, 2] Sample Output [2, 4] */

var nums= [1,2,3,4,5,6];

nums.forEach(function(ele,index)
{
    console.log(ele *ele);  
});
/*
2
4
6
8
10
12
*/

// we can also use map 

var nums=[3,5,6,7,8,9]

var out = nums.map(function(ele){
    return ele*2;
})
console.log(out);

// [ 6, 10, 12, 14, 16, 18 ]