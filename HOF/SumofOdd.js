/*     SUM OF ODD- HOF
Given an array of numbers find the sum of odd elements

Sample Input - [1, 2, 3, 4] Sample Output - 4 */

var num=[1,2,3,4];

var out= num.filter(function(ele,index){
    return ele % 2 !==0;

}).reduce(function(acc, currEl){
    return acc+currEl;
})



console.log(out);