
function convertFahrToCelsius(fahr){
    //check type of parameter
    const castFahr = Number(fahr); // attempt to convert parameter to a number
    if(Number.isNaN(castFahr)){// check if conversion was successful
      return `${fahr} is not a valid number but a/an ${typeof fahr}.`  
    }
    // actual conversion
    const cel = (castFahr - 32)/1.8
    return cel
}

console.log(convertFahrToCelsius('67')) 




checkYuGiOh = (n) => {
  let result = [];
  if(isNaN(parseInt(n))) {
    console.log("fizzbuzz is meh");
  } else
  {
  for (let index = 1; index <= parseInt(n); index++) {

    if ((index % 2 == 0) && (index % 3 == 0) && (index % 5 == 0)) {
      result.push("Yu-Gi-Oh");
    }
    else if ((index % 2 == 0) && (index % 5 == 0)) {
      result.push("Yu-Oh");
    }
    else if ((index % 3 == 0) && (index % 5 == 0)) {
      result.push("Gi-Oh");
    }
    else if ((index % 2 == 0) && (index % 3 == 0)) {
      result.push("Yu-Gi");
    }
    else if (index % 2 == 0) {
      result.push("Yu");
    }
    else if (index % 3 == 0) {
      result.push("Gi");
    }
    else if (index % 5 == 0) {
      result.push("Oh");
    }
    else {
      result.push(index);
    }
    
  }
  console.log(result);
}
}

checkYuGiOh("20");