/*                 OBJECTS FILTER
You have an array of objects that stores firstName and lastName and place values of your friends as follows: */

let users = [
    { firstName: "Nrupul", lastName: "Dev", place: "Banglore" },
    { firstName: "Prateek", lastName: "Shukla", place: "Banglore" },
    { firstName: "Yogesh", lastName: "Bhat", place: "Kolkata" },
  ];

  var data= users.filter(function(ele){
    return users.firstName + " "+ users.lastName +" "+ users.place;
  });

  console.log(data);
  /*  it will give me the all out put of name place but we only want the output of same place and their name 
  [
  { firstName: 'Nrupul', lastName: 'Dev', place: 'Banglore' },
  { firstName: 'Prateek', lastName: 'Shukla', place: 'Banglore' },
  { firstName: 'Yogesh', lastName: 'Bhat', place: 'Kolkata' }
]
  */ 

 