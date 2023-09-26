const mongoose = require("mongoose");

mongoose.set("strictQuery", false);

main().catch((err) => console.log(err));

async function main() {
  await mongoose.connect("mongodb+srv://DIn:cslWwZeQ0YSDOrrK@b-card-db.uakvttn.mongodb.net/");
  console.log("Connected To MongoDB");
}
