const mongoose = require("mongoose");
// Middleware
const MONGO_URI =
  "mongodb+srv://rithvikmatta1234:AqW7JQO2J5A5tc7a@cluster0.fivryrk.mongodb.net/?retryWrites=true&w=majority";
// Connect to MongoDB using the connection string
mongoose
  .connect(MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log(`Connection successful`);
  })
  .catch((e) => {
    console.log(`No connection: ${e}`);
  });

// mongodb://localhost:27017
