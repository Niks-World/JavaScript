/*        ARRAY STRING PATTERN- HOF
Given an array of string generate an array whose first or last character is a
Sample Input - ["assignment", "problem", "media", "upload"]
Sample Output - ["assignment", "media"] */

var web= ["assignment", "problem", "media", "upload"];

var out= web.filter(function(ele){
    if(ele[0] === `a` || ele[ele.length-1]==`a`){
        return ele; 
    }
})
console.log(out);

// op=> [ 'assignment', 'media' ]

