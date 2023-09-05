// assignment 1
// print the sum of all price aftr culculating 

var data =[{name: "Rice", quantity : 2, price:60 },
           {name: "Dal", quantity : 3, price: 50},
           {name: "Salt", quantity : 1, price:20},
          ];

var total =0;
for(var i=0; i<data.length; i++){
  total +=data[i].quantity * data[i].price;
}
console.log(total);  // o/p=> 290

//Assignment 2 rectangle 

var reactangle ={
               
  length: 10,
  width :5,
    area : function(){
    return this.length * this.width
    },
  perimenter : function(){
    return 2*(this.length + this.width);
  }
}
console.log(reactangle.area());  //50
console.log(reactangle.perimenter());  // 30



//Calculate the total price with the given quantity and price
//assignment 3


var e_commerce = {
  products : ["earphone","headphone","earpods"],
  quantity : [4,3,2],
  price : [700, 800, 1000],

  total_price : 0 // write code here
}

for(var i=0; i<e_commerce.products.length; i++){
  e_commerce.total_price+= ( e_commerce.quantity[i] * e_commerce.price[i]);
}

console.log(e_commerce.total_price) //7200


// assignment 4

/*   AMAZON OBJECT DATA
Given amazon data, We need to find the following :

Find All Products Name and rating
Find Average Rating
Find the product having minimum price */

var amazon =[
       {name: "Speaker", price: 5400, rating: 4},
        {name:"headphones", price:3000, rating:3},
        {name:"playstation",price:20000, rating:5}
];

// Find All Products Name and rating

for(var i=0; i<amazon.length; i++){
  console.log(amazon[i].name , amazon[i].rating);
} 


// Find Average Rating
var sum=0;
for(var i=0; i<amazon.length;i++){
    sum += amazon[i].rating;
}
console.log(sum / amazon.length);


// Find the product having minimum price

var min=999999;
var pro="";
for(var i=0; i<amazon.length; i++){
  if(min > amazon[i].price){
    min= amazon[i].price;
    pro=amazon[i].name;
  }
}
console.log(pro);
