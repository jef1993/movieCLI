const {
  goodOrBad,
  replaceMovie,
  readMovie,
  searchMovie,
  ClearMovie,
  addMovie,
  removeMovie,
} = require("./utils");

const input = process.argv.slice(2);
// goodOrBad(input);

// movieType(input);
// readMovie(0, 1);
// replaceMovie(1, input);
// ClearMovie();
// addMovie(input);
removeMovie(input);
// console.log(searchMovie(input));
