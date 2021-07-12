// global variables
var multiple = 7;
var endMultiple = 9;
var ceiling = 100;
var count = 0;


// code
while (multiple <= endMultiple){

    console.log("Multiples of " + multiple);

    while (count < ceiling) {
       console.log(count);
        count = multiplier(count,multiple);
        if (count > ceiling){
            count++;
        }
    }

  ceiling += 100;
  multiple ++;
}

// added function to demonstrate unit testing
function multiplier(currentCount,currentMultiple) {
    return currentCount += currentMultiple;
}


module.exports = multiplier;