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

const addMovie = function (name, genre, year) {
  const list = fs.readFileSync("./storage.json");
  const parsedList = JSON.parse(list);

  const updateObj = [
    parsedList,
    {
      name: name,
      genre: genre,
      year: year,
    },
  ].flat();

  fs.writeFileSync("./storage.json", JSON.stringify(updateObj));
  console.log(JSON.parse(fs.readFileSync("./storage.json")));
};

function movieType(input) {
  const [name, genre, year] = input;
  addMovie(name, genre, year);
  console.log(
    input.length >= 2
      ? `${name} is a${genre ? ` ${genre}` : ""} movie ${
          year ? `from ${year}` : ""
        }.`
      : `incorrect input`
  );
}

module.exports = { goodOrBad, movieType };
