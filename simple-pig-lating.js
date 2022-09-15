function pigIt(str) {
  //Code here
  const strArr = str.split();
  let test = strArr.map((word) => {
    const wordWithoutFirstLetter = word.substr(1, word.length);
    console.log(`${wordWithoutFirstLetter}`);
  });

  console.log(`test: ${test}`);
}

pigIt("Pig latin is cool");
