function occurrences(text, word) {
  if (!text || text.length === 0) {
    return 0;
  }

  let count = 0;

  console.log(text.toLowerCase());
  console.log(word.toLowerCase());


  const terms = text.toLowerCase().split(" ");

  terms.forEach((term) => {
    // console.log(term);

    if (term === word) {
      // eslint-disable-next-line no-plusplus
      count++;
    }
  });
  console.log(count);
  return count;
}

module.exports = occurrences;
