let spins = ['|', '/', '-', '\\', '|'];
// ensures new line starts after code is run
spins += "\n";
// assigns timer to a variable
let timer = 100;
let character = spins[0];
// loop through spins
for (let i = 0; i < spins.length; i++) {
  // '\r' ensures line repeats itself as the same curser line and adds next integer
  let spinLine = '\r' + spins[i];
  // creates timer
  setTimeout(() => {
    // eliminates issue with console.log(*starts a new line every time*)
    process.stdout.write(spinLine);
  }, timer);
  timer += 200;
  character += spins[i + 1];
}


// let sentence = "hello there from lighthouse labs";
// sentence += "\n";
// let delay = 1000;
// for (const char of sentence) {
//   setTimeout(() => {
//     process.stdout.write(char);
//   }, delay += 50);
// };