const timer1 = function() {
  const arr = process.argv;
  const intConverter = [];
  
  for (let i = 2; i < arr.length; i++) {
    intConverter.push(1 * arr[i]);
  }
  for (let j = 0; j < intConverter.length; j++) {
    if (isNaN(intConverter[j]) || intConverter[j] <= 0) {
      return null;
    } else {
      setTimeout(()=>process.stdout.write('\x07'), intConverter[j] * 1000);
    }
  }
};

timer1();