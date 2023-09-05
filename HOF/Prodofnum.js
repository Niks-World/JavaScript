/* Given an array of numbers print the product of all numbers

Sample Input - [2,3,4] Sample Output - 24 */

var num= [2,3,4,];

var prod= num.reduce(function(ele,index){
    return ele * index;
});

console.log(prod);
// o/p=> 24

