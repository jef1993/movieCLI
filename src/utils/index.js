function goodOrBad(input) {
  for (let i = 0; i < input.length; i += 2) {
    console.log(
      input[i].match(/good|bad/) && input[i + 1]
        ? `I think ${input[i + 1]} is ${input[i]}`
        : `incorrect input`
    );
  }
}

function movieType(input) {
  const [name, genre, type, year, plot] = input;
  console.log(
    `${name} is a${genre ? ` ${genre}` : ""} ${type ? type : "show"} ${
      year ? `from ${year}` : ""
    }${plot ? ` which is about ${plot}` : ""}`
  );
}
module.exports = { goodOrBad, movieType };
