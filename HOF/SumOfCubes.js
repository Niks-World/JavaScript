/* SUM OF CUBES- HOF
Given an array of numbers find the sum of cubes if the number is divisible by 3

Sample Input - [1, 2, 3, 4, 5, 6] Sample Output - 243 (27+216) */

var num=  [1, 2, 3, 4, 5, 6] ;

var out= num.filter(function(ele){
    return ele %3==0;
})
.map(function(ele){
    return ele **3;

}).reduce(function(acc,currel){
    return acc +currel;
})
console.log(out);


