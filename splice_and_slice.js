
function nonMutatingSplice(cities) {
    // Only change code below this line
    //var city = cities.slice();
    //return cities.splice(3); it will mutate the original array
    return cities.slice(0, 3);// creates a copy of the original array so original array will not be mutated
  
    // Only change code above this line
  }
  var inputCities = ["Chicago", "Delhi", "Islamabad", "London", "Berlin"];
  nonMutatingSplice(inputCities);

function sliceArray(anim, beginSlice, endSlice) {
    // Only change code below this line
    return anim.slice(beginSlice, endSlice); //[beginSlice - inclusive, endSlice - exclusive)
    // Only change code above this line
  }
  var inputAnim = ["Cat", "Dog", "Tiger", "Zebra", "Ant"];
  sliceArray(inputAnim, 1, 3);