/** FEEDBACK: Just make sure to remove any commented out code! Other than that, great job! */
const whileToFor = () => {
  for (let i = 0; i < 5; i++) {
    console.log(i);
  }
};

// whileToFor()


// const whileToFor = () => {
//   let i = 0;
//   while (i < 5) {
//     console.log(i);
//     i++;
//   }
// };



const continueGuardClause = () => {
  for (let i = 1; i < 5; i++) {
    if ((i === 2) || (i === 3)) {
      continue;
    }
    // if condition is true, continue will skip rest of code in block and go to next iteration
    console.log("Sure glad this isn't 2 or 3");
    console.log(i);
  }
};

continueGuardClause();


// const continueGuardClause = () => {
//   for (let i = 1; i < 5; i++) {
//     if (!(i === 2) && !(i === 3)) {
//       console.log("Sure glad this isn't 2 or 3");
//       console.log(i);
//     }
//   }
// };

module.exports = {
  whileToFor,
  continueGuardClause,
};
