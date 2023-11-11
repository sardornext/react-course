const data = [
  {
    id: 1,
    title: "The Lord of the Rings",
    publicationDate: "1954-07-29",
    author: "J. R. R. Tolkien",
    genres: [
      "fantasy",
      "high-fantasy",
      "adventure",
      "fiction",
      "novels",
      "literature",
    ],
    hasMovieAdaptation: true,
    pages: 1216,
    translations: {
      spanish: "El señor de los anillos",
      chinese: "魔戒",
      french: "Le Seigneur des anneaux",
    },
    reviews: {
      goodreads: {
        rating: 4.52,
        ratingsCount: 630994,
        reviewsCount: 13417,
      },
      librarything: {
        rating: 4.53,
        ratingsCount: 47166,
        reviewsCount: 452,
      },
    },
  },
  {
    id: 2,
    title: "The Cyberiad",
    publicationDate: "1965-01-01",
    author: "Stanislaw Lem",
    genres: [
      "science fiction",
      "humor",
      "speculative fiction",
      "short stories",
      "fantasy",
    ],
    hasMovieAdaptation: false,
    pages: 295,
    translations: {},
    reviews: {
      goodreads: {
        rating: 4.16,
        ratingsCount: 11663,
        reviewsCount: 812,
      },
      librarything: {
        rating: 4.13,
        ratingsCount: 2434,
        reviewsCount: 0,
      },
    },
  },
  {
    id: 3,
    title: "Dune",
    publicationDate: "1965-01-01",
    author: "Frank Herbert",
    genres: ["science fiction", "novel", "adventure"],
    hasMovieAdaptation: false,
    pages: 658,
    translations: {
      spanish: "",
    },
    reviews: {
      goodreads: {
        rating: 4.25,
        ratingsCount: 1142893,
        reviewsCount: 49701,
      },
    },
  },
  {
    id: 4,
    title: "Harry Potter and the Philosopher's Stone",
    publicationDate: "1997-06-26",
    author: "J. K. Rowling",
    genres: ["fantasy", "adventure"],
    hasMovieAdaptation: true,
    pages: 223,
    translations: {
      spanish: "Harry Potter y la piedra filosofal",
      korean: "해리 포터와 마법사의 돌",
      bengali: "হ্যারি পটার এন্ড দ্য ফিলোসফার্স স্টোন",
      portuguese: "Harry Potter e a Pedra Filosofal",
    },
    reviews: {
      goodreads: {
        rating: 4.47,
        ratingsCount: 8910059,
        reviewsCount: 140625,
      },
      librarything: {
        rating: 4.29,
        ratingsCount: 120941,
        reviewsCount: 1960,
      },
    },
  },
  {
    id: 5,
    title: "A Game of Thrones",
    publicationDate: "1996-08-01",
    author: "George R. R. Martin",
    genres: ["fantasy", "high-fantasy", "novel", "fantasy fiction"],
    hasMovieAdaptation: true,
    pages: 835,
    translations: {
      korean: "왕좌의 게임",
      polish: "Gra o tron",
      portuguese: "A Guerra dos Tronos",
      spanish: "Juego de tronos",
    },
    reviews: {
      goodreads: {
        rating: 4.44,
        ratingsCount: 2295233,
        reviewsCount: 59058,
      },
      librarything: {
        rating: 4.36,
        ratingsCount: 38358,
        reviewsCount: 1095,
      },
    },
  },
];

function getBooks() {
  return data;
}

function getBook(id) {
  return data.find((d) => d.id === id);
}

/*
// Destrcuturing

const book = getBook(3);
book;
//const title = book.title;
//const author = book.author;
const { title, author, pages, publicationDate, genres, hasMovieAdaptation } =
  book;
//title;
//author;
console.log(title, author, genres);

// const primaryGenre = genres[0];
// const secondaryGenre = genres[1];

const [primaryGenre, secondaryGenre, ...otherGenre] = genres;

console.log(primaryGenre, secondaryGenre, otherGenre);

const newGenres = [...genres, "epic new new"];
console.log(newGenres);

const updatedBook = {
  ...book,
  // Adding a new property
  moviePublicationDate: "2001-12-19",
  // Overwriting an existing property
  //pages: 1212,
};
updatedBook;

const getYear = (str) => str.split("-")[0];

console.log(getYear(publicationDate));

const summary = `a book by ${author} called ${title} has ${pages} pages`;
summary;

const pagesRange = pages > 1000 ? "long book" : "short book";
pagesRange;
console.log(`the book is ${pagesRange}`);
// 2 + 2 === 4 ? "yes" : "no";

// function declaration
// function getYear(str) {
//   return str.split("-")[0];
// }

// function expression
// const getYear = (str) => str.split("-")[0];

// console.log(getYear(publicationDate));

console.log(true && false);
console.log(true || false);
console.log(!true);
console.log(false && "some string");
console.log(true && "some string");
console.log(hasMovieAdaptation && "This book has a movie adaptation");

// falsy: 0, '', null, undefined, NaN, false
console.log("jonas" && "some string");
console.log("" && "some string");
console.log(0 && "some string");

console.log("jonas" || "some string");
console.log("" || "some string");
console.log(0 || "some string");
console.log(true || "some string");
console.log(false || "some string");

console.log(!true);
console.log(book.translations.spanish);

const spanishTranslation = book.translations.spanish || "no translation";
console.log(spanishTranslation);
spanishTranslation;

// console.log(book.reviews.librarything.reviewsCount);

// const countWrong = book.reviews.librarything.reviewsCount || "no data";
// countWrong;

// const count = book.reviews.librarything.reviewsCount ?? "no data";
// count;

// function getTotalReviewCount(book) {
//   return (
//     book.reviews.goodreads.reviewsCount +
//     (book.reviews.librarything.reviewsCount ?? 0)
//   );
// }

// console.log(getTotalReviewCount(book));

// function getTotalReviewCount(book) {
//   return (
//     book.reviews.goodreads.reviewsCount +
//     (book.reviews.librarything.reviewsCount || 0)
//   );
// }

function getTotalReviewCount(book) {
  const goodreads = book.reviews?.goodreads.reviewsCount;
  const librarything = book.reviews?.librarything?.reviewsCount ?? 0;
  return goodreads + librarything;
}

console.log(getTotalReviewCount(book));
*/
/*
function getTotalReviewCount(book) {
  const goodreads = book.reviews?.goodreads.reviewsCount;
  const librarything = book.reviews?.librarything?.reviewsCount ?? 0;
  return goodreads + librarything;
}

// map method - returns a new array with the same length as the original array but with the elements transformed by the callback function that we pass to it as an argument (the callback function is called for each element in the array) - the original array is not modified by the map method - the map method does not mutate the original array - the map method returns a new array - the map method is a pure function - the map method is a higher order function - the map method is an array method
const books = getBooks();
//books;
const x = [1, 2, 3, 4, 5].map((el) => el * 2);
console.log(x);

const titles = books.map((book) => book.title);
titles;

const essentialData = books.map((book) => ({
  title: book.title,
  author: book.author,
  reviewsCount: getTotalReviewCount(book),
}));
essentialData;

// filter method - returns a new array with the elements that pass the test implemented by the callback function that we pass to it as an argument (the callback function is called for each element in the array) - the original array is not modified by the filter method - the filter method does not mutate the original array - the filter method returns a new array - the filter method is a pure function - the filter method is a higher order function - the filter method is an array method

const longBooksWithMovie = books
  .filter((book) => book.pages > 500)
  .filter((book) => book.hasMovieAdaptation);
longBooksWithMovie;

const adventureBooks = books
  .filter((books) => books.genres.includes("adventure"))
  .map((book) => book.title);
adventureBooks;

// reduce method - returns a single value that is the result of the callback function that we pass to it as an argument (the callback function is called for each element in the array) - the original array is not modified by the reduce method - the reduce method does not mutate the original array - the reduce method returns a single value - the reduce method is a pure function - the reduce method is a higher order function - the reduce method is an array method

const totalReviewsCount = books.reduce(
  (acc, book) => acc + getTotalReviewCount(book),
  0
);
totalReviewsCount;

// the array sort method mutates the original array - the array sort method is not a pure function - the array sort method is a higher order function - the array sort method is an array method

const sortedBooks = books.sort((a, b) => a.pages - b.pages);
sortedBooks;

const sortedBooksByReviewsCount = books.sort(
  (a, b) => getTotalReviewCount(b) - getTotalReviewCount(a)
);

sortedBooksByReviewsCount;

// the array slice method does not mutate the original array - the array slice method is a pure function - the array slice method is a higher order function - the array slice method is an array method

// 1) add book object to array
const newBook = {
  id: 6,
  title: "Harry Potter and the Chamber of Secrets",
  publicationDate: "1998-07-02",
  author: " J. K. Rowling",
};
const bookAfterAdd = [...books, newBook];
bookAfterAdd;

// 2) remove book object from array
const bookAfterRemove = books.filter((book) => book.id !== 3);
bookAfterRemove;

// 3) update book object in array
const updatedBook = {
  ...books[0],
  title: "The Lord of the Rings: The Fellowship of the Ring",
};
const bookAfterUpdate = books.map((book) =>
  book.id === updatedBook.id ? updatedBook : book
);
bookAfterUpdate;

const sortedByPages = books.sort((a, b) => a.pages - b.pages);
sortedByPages;

const sortedByReviews = books.sort(
  (a, b) => getTotalReviewCount(b) - getTotalReviewCount(a)
);

sortedByReviews;

// 1) add book object to array
const newBook1 = {
  id: 6,
  title: "Harry Potter and the Chamber of Secrets",
  publicationDate: "1998-07-02",
  auther: " J. K. Rowling",
};
const bookAfterAdd1 = [...books, newBook];
*/

// fetch("https://jsonplaceholder.typicode.com/todos")
//   .then((res) => res.json())
//   .then((data) => console.log(data));

// console.log("sardor");

// aynchnronous is when the code is not executed immediately
// synchronous is when the code is executed immediately
// fetch is a function that returns a promise
// a promise is an object that represents a future value
// a promise is a placeholder for a value that we don't have yet
// a promise is a placeholder for a value that we will have in the future
// a promise is a placeholder for a value that we will have in the future
// a promise is a placeholder for a value that we will have in the future

async function getTodos() {
  const res = await fetch("https://jsonplaceholder.typicode.com/todos");
  const data = await res.json();
  console.log(data);
}

getTodos();

console.log("sardor");

// async function getTodos() {
//   const res = await fetch("https://jsonplaceholder.typicode.com/todos");
//   const data = await res.json();
//   console.log(data);
// }

// getTodos();
