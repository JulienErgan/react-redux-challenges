function isConsonant(letter) {
  // NB: The i modifier is used to perform case-insensitive matching.
  return !letter.match(/[aeiouy\s]/i);
}


function insertDash(word) {
  // TODO: implement the method and return word with dashes
  if (!word || word.length === 0) {
    return "";
  }
  return word.split("").map((letter, index, letters) => {
    if (index > 0 && isConsonant(letters[index - 1]) && isConsonant(letter)) {
      return `-${letter}`;
    }
    return letter;
  }).join("");
}

module.exports = insertDash;
