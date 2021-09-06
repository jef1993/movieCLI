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
  const [name, type, genre, year, plot] = input;
  console.log(
    input.length >= 2
      ? `${name} is a${genre ? ` ${genre}` : ""} ${type} ${
          year ? `from ${year}` : ""
        }${plot ? ` which is about ${plot}` : ""}`
      : `incorrect input`
  );
}
module.exports = { goodOrBad, movieType };
