// global variables
var multiple = 7;
var endMultiple = 9;
var ceiling = 100;
var count = 0;


// code
while (multiple <= endMultiple){

    console.log("Multiples of " + multiple)

    while (count < ceiling) {
       console.log(count);
        count += multiple;

    }

  ceiling += 100;
  multiple ++;
}