const storageData = require("../../storage.json");
const fs = require("fs");

function goodOrBad(input) {
  for (let i = 0; i < input.length; i += 2) {
    console.log(
      input[i].match(/good|bad/) && input[i + 1]
        ? `I think ${input[i + 1]} is ${input[i]}`
        : `incorrect input`
    );
  }
}

const readMovie = function (start = 0, end) {
  const list = JSON.parse(fs.readFileSync("./storage.json"));
  console.log(list.slice(start, end));
};

const addMovie = function (input) {
  const [name, genre, year] = input;
  const list = fs.readFileSync("./storage.json");
  const parsedList = JSON.parse(list);

  if (parsedList)
    // const updateObj = [
    //   parsedList,
    //   {
    //     name: name,
    //     genre: genre,
    //     year: year,
    //   },
    // ].flat();

    parsedList.push({
      name: name,
      genre: genre,
      year: year,
    });

  fs.writeFileSync("./storage.json", JSON.stringify(parsedList));
  console.log(JSON.parse(fs.readFileSync("./storage.json")));
};

// function movieType(input) {
//   const [name, genre, year] = input;
//   addMovie(name, genre, year);
//   console.log(
//     input.length >= 2
//       ? `${name} is a${genre ? ` ${genre}` : ""} movie ${
//           year ? `from ${year}` : ""
//         }.`
//       : `incorrect input`
//   );
// }

const replaceMovie = function (index, length, newItem) {
  const [name, genre, year] = newItem;
  const list = fs.readFileSync("./storage.json");
  const parsedList = JSON.parse(list);

  parsedList.splice(index, length, {
    name: name,
    genre: genre,
    year: year,
  });

  fs.writeFileSync("./storage.json", JSON.stringify(parsedList));
  console.log(JSON.parse(fs.readFileSync("./storage.json")));
};

const ClearMovie = function () {
  fs.writeFileSync("./storage.json", JSON.stringify([]));
};

const searchMovie = function (input) {
  const [key, value, findOne] = input;
  const list = JSON.parse(fs.readFileSync("./storage.json"));
  let output = list.filter((el) => el[`${key}`] === value);

  output = findOne >= 0 ? output[Number(findOne)] : output;

  return output.length > 0 ? output : `Movie not find!`;
};

const removeMovie = function (input) {
  const [key, value] = input;
  const list = JSON.parse(fs.readFileSync("./storage.json"));
  const output = list.filter((el) => el[`${key}`] !== value);
  fs.writeFileSync("./storage.json", JSON.stringify(output));
  console.log(output);
};

module.exports = {
  goodOrBad,
  replaceMovie,
  readMovie,
  searchMovie,
  ClearMovie,
  addMovie,
  removeMovie
};
