const mongoose = require("mongoose");

const nahidSchema = mongoose.Schema(
  {
    name: String,
    username: String,
    about: String,
    price: String,
    images: String,
  },
  { collection: "nahid", timestamps: true }
);
const Nahid = mongoose.model("nahid", nahidSchema);

module.exports = Nahid;
