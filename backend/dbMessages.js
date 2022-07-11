import mongoose from "mongoose";

const whatsappSchema = mongoose.Schema({
  name: String,
  message: String,
  timestamp: String,
});

export default mongoose.model(
  "messageContent",
  whatsappSchema
);
