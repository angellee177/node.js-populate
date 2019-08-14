const express = require('express');
const app = express();
const port = process.env.PORT || 8001;
const mongoose = require('mongoose');
const dbConnection ={
    development: "mongodb://localhost/populate", 
    test: "mongodb://localhost/test"
  } 
// Please change this value into your database connection URI
const env = process.env.NODE_ENV || 'development';


app.use(express.json());
app.use(
express.urlencoded({
extended: true
})
);

mongoose.connect(dbConnection[env], { useNewUrlParser: true, useCreateIndex: true });

// Using Route-Level Middleware
const router = require("./routes");
app.use("/api", router);

app.get("/", (req, res) => {
res.status(200).json({
success: true,
message: "Welcome to API!"
});
});

app.listen(port, () => {
console.log(`Server Started at ${Date()}!`);
console.log(`Listening on port ${port}!`);
});

module.exports = app;





