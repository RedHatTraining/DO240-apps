import express from "express";
import { Patron } from "./Patron";

const PORT = parseInt(process.env.PORT ?? "8080");

const app = express();

const patrons: Patron[] = [
  { name: "John Smith", numBooks: 3, cardNumber: "00001" },
  { name: "Patty Jones", numBooks: 1, cardNumber: "00002" },
  { name: "Frank Doe", numBooks: 8, cardNumber: "00003" },
];

app.get("/ping", (_req, res) => {
  res.send("pong");
});

app.get("/patrons", (_req, res) => {
  res.send(patrons);
});

app.listen(PORT, "0.0.0.0", () => {
  console.log(`patrons-api listening on port ${PORT}`);
});
