process.on('unhandledRejection', () => {});

module.exports = function takeAChance(name) {
  // create new promise object
  return new Promise((resolve, reject) => {
    // sets delay of 2 sec
    setTimeout(() => {
      // randomly pick whether to succeed or fail
      Math.random() <= 0.5
        // resolve with a string
        ? resolve(`Hooray! You're so lucky, ${name}!`)
        // resolve with an error
        : reject(new Error(`It's just bad luck, ${name}.`));
    }, 2000);
  });
};
