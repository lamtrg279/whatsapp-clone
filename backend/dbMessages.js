import mongoose from "mongoose";

const whatsappSchema = mongoose.Schema({
  name: String,
  message: String,
  timestamp: String,
  receiver: Boolean,
});

export default mongoose.model("messagecontents", whatsappSchema);
