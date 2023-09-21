var nums = [10, 2, 9, 30, 1];

//sort => ascending order by default 

nums.sort();
console.log(nums);

// its not sorting properly 
// output is  [ 1, 10, 2, 30, 9 ]

// but when we try with string 

var animals = ["dog" , "bee", "cat", "ant"];

animals.sort(); // asending for string 

console.log(animals);
//output is  [ 'ant', 'bee', 'cat', 'dog' ]

// .sort work with string " " only

var alphas = ["as" , "a"];
// a as it will give out put like this 


// compare function

/*
a, b => 

a > b => a - b => +ve => 1

a < b => a -b => -ve => -1

a = b => a - b => 0 

*/


// asending order
var nums = [10, 2, 9, 30, 1];

nums.sort(function(a,b ){
    if(a > b) return 1; //1 refer to postive than its give as asending order 
    if(a < b) return -1; // -1 refer to nagative number give as desending order 
    return 0; 
});

console.log(nums);
// op=> [ 1, 2, 9, 10, 30 ]

// to make in desending order just swift 1 to -1 than you will get the output
var nums1 = [10, 2, 9, 30, 1];
nums1.sort(function(a,b ){ 
    if(a > b) return -1; // -1 refer to nagative number give as desending order 
    if(a < b) return 1; // 1 refer to postive than its give as asending order
    return 0; 
});

console.log(nums1);
// op=> [ 30, 10, 9, 2, 1 ]


// make it more sorter the function 

var nums2 = [10, 2, 9, 30, 1];

nums2.sort(function (a, b){
return b - a ; // this only use for  number desending  (not work in string)
});
console.log(nums2);

var a = "3";
var b = "1";

console.log(a + b); //op=> 31
console.log(a - b ); // op=> 2 javascreipt assume and convert into number

// but when i try with string it will give output as a NaN not a number 

var a = "a";
var b = " b";
console.log(a - b); // op=> NaN (not a number )


//-------------------------------------------------------------------

var employees = [
    { name : "berry ", age : 12},
    {name : "choco ", age : 20}, 
    {name: "Akhil", age : 30},
];

// sort this names in ascending order 

employees.sort(function (a,b){
    if(a.name > b.name) return 1;
    if(a.name < b.name) return -1;
    return 0;
});
console.log(employees);
/**
   { name: 'Akhil', age: 30 },
  { name: 'berry ', age: 12 },
  { name: 'choco ', age: 20 }
 */


  /// now sort in descending order age

  employees.sort(function (a, b) {
    return b.age - a.age;  // age is a number so we can direct use  (a - b) 

  });
  console.log(employees);