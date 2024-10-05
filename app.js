//Arrays;Adding removing
//Pop;Removes an element to the last of the array
let celebrities = ["Fawad khan","fahad mustafa","Humayun saeed","Faisal qureshi"];
celebrities.pop();
console.log(celebrities);
//Push:Adds an element to the last of the array
let countries = ["Pakistan","Iran","China",];
countries.push("Iraq");
console.log(countries);
//Shift:Remove first element of an array
let channels = ["Geo","ARY","Bol","PTV"];
channels.shift();
console.log(channels);
//unshift:Add an elements to the first of array
let fruits = ["Banana","Apple","Apricot","Grapes"];
fruits.unshift("Kiwi");
console.log();
//Splice 
let currencies = ["Dollar","Ranget","euro","riyal","pound"];
currencies.splice(3,0,"lira","rupee");
console.log(currencies);
