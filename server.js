// DEPENDENCIES
const dotenv = require("dotenv");
const app = require("./app");

// CONFIGURATION
dotenv.config();
const PORT = process.env.PORT;

// LISTEN
app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
