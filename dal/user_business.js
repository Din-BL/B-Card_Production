const mongoose = require("mongoose");

mongoose.set("strictQuery", false);

main().catch((err) => console.log(err));

async function main() {
  await mongoose.connect("mongodb+srv://Din:GlkDWFgANjkgdUXm@react.5l3zryn.mongodb.net/");
  console.log("Connected To MongoDB");
}
