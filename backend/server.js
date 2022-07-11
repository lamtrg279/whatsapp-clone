import express from "express";
import mongoose from "mongoose";
import Messages from "./dbMessages.js";

const app = express();
const port = process.env.PORT || 9000;
const connection_url =
  "mongodb+srv://lam:Family12104090@cluster0.ztd5qng.mongodb.net/?retryWrites=true&w=majority";

mongoose.connect(connection_url, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.get("/", (req, res) => {
  res.status(200).send();
});

app.post("messages/new", (req, res) => {
  const dbMessage = req.body;

  Messages.create(dbMessage, (err, data) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(201).send(data);
    }
  });
});

app.listen(port, () =>
  console.log(`Server listens on localhost:${port}`)
);
