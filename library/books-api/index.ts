import express from "express";
import { Book } from "./Book";

const PORT = parseInt(process.env.PORT ?? "8080");

const app = express();

const books: Book[] = [
  { title: "Frankenstein", authorName: "Mary Shelley", year: 1818, copies: 10 },
  {
    title: "A Christmas Carol",
    authorName: "Charles Dickens",
    year: 1843,
    copies: 5,
  },
  {
    title: "Pride and Prejudice",
    authorName: "Jane Austen",
    year: 1813,
    copies: 3,
  },
];

app.get("/ping", (_req, res) => {
  res.send("pong");
});

app.get("/books", (_req, res) => {
  res.send(books);
});

app.listen(PORT, "0.0.0.0", () => {
  console.log(`books-api listening on port ${PORT}`);
});
