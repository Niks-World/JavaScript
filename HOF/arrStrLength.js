/* Given an array of strings print the length of each string

example : ["apple", "windows", "ubuntu"] */

var system= ["apple", "windows", "ubuntu"] ;

var len= system.map(function (ele){
    return ele.length
})
console.log(len);
// op=> [ 5, 7, 6 ]
