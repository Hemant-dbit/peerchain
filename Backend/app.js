const express = require("express");
const passport = require("./config/passport");
const userRoute = require("./routes/userroute");
require("dotenv").config();

const app = express();
app.use(express.json());
app.use(passport.initialize());

// Routes
app.use("/api/user", userRoute);

app.listen(5500, () => {
  console.log("API running on port 5500");
});
