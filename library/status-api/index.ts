import express from "express";

const PORT = parseInt(process.env.PORT ?? "8080");

const app = express();

const codes = [200, 201, 203]

const getRandomInt = (max: number) => {
  return Math.floor(Math.random() * max);
}

app.get("/status/:code", (req, res) => {
  const code = parseInt(req.params.code);

  if (!codes.includes(code)) {
    res.status(400).send("Status code not allowed");
  }

  res.status(code).send(`${code} status code`);
});

app.listen(PORT, "0.0.0.0", () => {
  console.log(`status-api listening on port ${PORT}`);
});
