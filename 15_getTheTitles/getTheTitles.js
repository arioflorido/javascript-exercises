const getTheTitles = (books) => {
  // Approach #1 - using reduce
  //   return books.reduce((titles, currentBook) => {
  //     titles.push(currentBook.title);
  //     return titles;
  //   }, []);

  //Approach #2 - using map() (best approach)
  return books.map((book) => book.title);
};

// Do not edit below this line
module.exports = getTheTitles;
