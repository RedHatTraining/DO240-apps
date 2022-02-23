import express from "express";

const PORT = parseInt(process.env.PORT ?? "8080");

const app = express();

const codes = [200, 201, 203]

const getRandomInt = (max: number) => {
  return Math.floor(Math.random() * max);
}

app.get("/status", (req, res) => {
  const selectedCode = codes[getRandomInt(3)]

  res.status(selectedCode).send(`${selectedCode} status code`);
});

app.listen(PORT, "0.0.0.0", () => {
  console.log(`status-api listening on port ${PORT}`);
});
