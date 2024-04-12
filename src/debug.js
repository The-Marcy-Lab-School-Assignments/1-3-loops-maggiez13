/** FEEDBACK: Great job! */
const brokenLoop = (start, end) => {
  let result = '';
  for (let i = start; i <= end; i ++) {
    result += i;
  }
  return result;
};

// console.log(brokenLoop(1,10));



const brokenNested = () => {
  let result = '';
  for (let i = 0; i < 2; i++) {
    for (let j = 0; j < 10; j++) {
      /** FEEDBACK: Love the use of documentation! */
      // need to use different variable for inside for loop
      result += `-${i}${j}`;
    }
  }
  return result.slice(1);
};

console.log(brokenNested());

module.exports = {
  brokenLoop,
  brokenNested,
};
