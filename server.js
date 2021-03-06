require('dotenv').config()
const express = require("express");
const mongoose = require("mongoose");
const app = express();
const todoRoutes = require("./routes/todo.routes");
// Connection for Mongoose
const connect = () => {
  return mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
};

connect();

app.use(express.json());

app.use("/todos", todoRoutes);
const PORT = process.env.PORT || 5001;

app.listen(PORT, () => {
  console.log(`app is running on ${PORT}`);
});
