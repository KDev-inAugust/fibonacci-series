function fibonacci(num) {
  let x=0;
  let y=1;
  let sum=x+y;
  if (num===0){
    return 0
  } 
  else {
    for (times=2; times<num; times++){
      x=y;
      y=sum;
      sum=x+y;
    }
    return sum;
  }

}



if (require.main === module) {

  console.log("Expecting: 233");
  console.log("=>", fibonacci(13));
  
  console.log("");
  console.log("Expecting: 2");
  console.log("=>", fibonacci(3));

  console.log("");

  console.log("Expecting: 0");
  console.log("=>", fibonacci(0));

  console.log("");

  console.log("Expecting: 1");
  console.log("=>", fibonacci(2));

  console.log("");

  console.log("Expecting: 55");
  console.log("=>", fibonacci(10));
}

module.exports = fibonacci;

// I am planning to set up a calculation for the Fibbinocci sequence that uses the sequence of deriving a number from the last two of the sequence and having it perform that math task the specified amount of times. 


// the formula
// x=y;
//   y=sum;
//   sum=x+y;
//   console.log(sum);
//   x=y;
//   y=sum;
//   sum=x+y;
//   console.log(sum);
//   x=y;
//   y=sum;
//   sum=x+y;
//   console.log(sum);
//   x=y;
//   y=sum;
//   sum=x+y;
//   console.log(sum);

