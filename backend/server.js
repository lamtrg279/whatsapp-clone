import express from "express";
import mongoose from "mongoose";
import Pusher from "pusher";
import Messages from "./dbMessages.js";

//Config
const app = express();
const port = process.env.PORT || 9000;

//Pusher
const pusher = new Pusher({
  appId: "1436033",
  key: "1bfc07828ea5674e0220",
  secret: "2d0f89d002f50beab5cc",
  cluster: "us2",
  useTLS: true,
});

//Mongoose
const connection_url =
  "mongodb+srv://lam:Family12104090@cluster0.iwfnclc.mongodb.net/?retryWrites=true&w=majority";
mongoose.connect(connection_url, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

//Middleware
app.use(express.json());

//Routes
app.get("/", (req, res) => {
  res.status(200).send("Hello");
});

app.get("/messages/sync", (req, res) => {
  Messages.find((err, data) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(200).send(data);
    }
  });
});

app.post("/messages", (req, res) => {
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
