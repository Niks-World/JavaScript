/* ARRAY STRING FIRST CHARACTER - HOF
Given an array of string generate an array with their first characters

Sample Input - ["Masai", "School"]

Sample Output - ["M", "S"] */

var str=["Masai", "School"];

var ch=str.map(function (ele, index){
    return ele[0];
});
console.log(ch);
// op=> [ 'M', 'S' ]  