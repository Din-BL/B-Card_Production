const express = require("express");
const app = express();
const cors = require("cors")
const morgan = require('morgan')
require("./dal/user_business");
const user = require("./routes/user");
const business = require("./routes/business");
const path = require('path');

app.use(express.static(path.join(__dirname, 'build')));
app.use(express.json());
app.use(cors({ origin: '*' }))
app.use(morgan('tiny'))
app.use("/user", user);
app.use("/business", business);

app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.listen(8000, () => {
  console.log("listening at http://localhost:8000");
});
