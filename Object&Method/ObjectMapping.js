/*       OBJECTS MAPPING

You have an array of objects that stores firstName and lastName values of your friends as follows: */

let users = [
    { firstName: "Nrupul", lastName: "Dev", place: "Banglore" },
    { firstName: "Prateek", lastName: "Shukla", place: "Banglore" },
    { firstName: "Yogesh", lastName: "Bhat", place: "Kolkata" },
  ];

  var fname="";
  for(var i= 0; i< users.length; i++){
    fname+= users[i].firstName;
    fname+= users [i].lastName;
  }
  console.log(fname);  // op=> NrupulDevPrateekShuklaYogeshBhat 
  //but we want output with space and using map 

  var names=users.map(function(ele){
    return ele.firstName +" "+ ele.lastName
  })
  console.log(names);
  // op=> [ 'Nrupul Dev', 'Prateek Shukla', 'Yogesh Bhat' ]

  