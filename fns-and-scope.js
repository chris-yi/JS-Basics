//////////////////PROBLEM 1////////////////////

var name = 'Tyler';
//Create a function called isTyler that accepts name as it's only parameter.
//If the argument you passed in is equal to 'Tyler', return true. If it's not, return false.

  //Code Here

function isTyler(name) {
	return name === "Tyler";
}


//////////////////PROBLEM 2////////////////////


//Create a function called getName that uses prompt() to prompt the user for their name, then returns the name.


  //Code Here

function getName() {
	var userName = prompt("What is your name?");
	return userName;
}


//////////////////PROBLEM 3////////////////////



//Create a function called welcome that uses your getName function you created in the previous problem to get the users name,
//then alerts "Welcome, " plus whatever the users name is.

  //Code Here

function welcome(func) {
	alert("Welcome, " + getName());
}

//////////////////PROBLEM 4////////////////////




//What is the difference between arguments and parameters?

  //Answer Here

  // arguements go into parenthesis when yu invoke the function.  parameters are set when creating the function.


//////////////////PROBLEM 5////////////////////



//What are all the falsy values in JavaScript and how do you check if something is falsy?


  //Answer Here

  // falsy values = false, null, undefined, 0, " ", NaN

  // you check if something is falsy by checking if the value equals Boolean.



//////////////////PROBLEM 6////////////////////



//Create a function called myName that returns your name

  //Code Here
  
function myName(){
	return "Chris Yi";
}


//Now save the function definition of myName into a new variable called newMyName

  //Code Here

var newMyName = function myName(){
	return "Chris Yi";
}

//Now alert the result of invoking newMyName

alert(newMyName());

//////////////////PROBLEM 7////////////////////



//Create a function called outerFn which returns an anonymous function which returns your name.

  //Code Here

  function outerFn() {
  	return function(){
  		return "Chris";
  	}
  }

//Now save the result of invoking outerFn into a variable called innerFn.

  //Code Here

var innerFn = outerFn();

//Now invoke innerFn.
