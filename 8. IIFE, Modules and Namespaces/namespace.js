
var car = {
	startEngine: function () {
		console.log("Car started");			
	}		
}

var bike = {
	startEngine: function () {
		console.log("Bike started");
	}
}

car.startEngine();
bike.startEngine();


//Example#2
// Creating a namespace called "Auth"
var Auth = {
	username: "",
	password: "",
	
	login: function() {
	  // Code for logging in the user
	},
	
	logout: function() {
	  // Code for logging out the user
	}
  };
  
  // Accessing the functions and variables within the "Auth" namespace
  Auth.username = "john_doe";
  Auth.login();
  