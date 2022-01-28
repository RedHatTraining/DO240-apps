import express from "express";
import { Book } from "./v2/Book";
import { bookToV1 } from "./v1-mappers"

const PORT = parseInt(process.env.PORT ?? "8080");

const app = express();

app.get("/ping", (_req, res) => {
  res.send("pong");
});

app.get("/api/v1/books", (_req, res) => {
  res.send(getBooks().map(bookToV1));
});

app.get("/api/v2/books", (_req, res) => {
  res.send(getBooks());
});

app.listen(PORT, "0.0.0.0", () => {
  console.log(`books-api listening on port ${PORT}`);
});


function getBooks(): Book[] {
  return [
    {
      title: "Frankenstein",
      author: { name: "Mary Shelley", birthYear: 1797 },
      year: 1818,
      copies: 10
    },
    {
      title: "A Christmas Carol",
      author: { name: "Charles Dickens", birthYear: 1812 },
      year: 1843,
      copies: 5,
    },
    {
      title: "Pride and Prejudice",
      author: { name: "Charles Dickens", birthYear: 1775 },
      year: 1813,
      copies: 3,
    },
  ];
}

