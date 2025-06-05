const express = require("express");
const app = express();
const cors = require("cors");
app.use(cors());
const weatherRoutes = require("./routes/weatherRoute");

require("dotenv").config();

app.use("/api", weatherRoutes);

app.use((req, res) => {
  res.status(404).json({
    message: "Route not found",
  });
});
app.listen(process.env.PORT, () => {
  console.log(`Server is listening on port ${process.env.PORT}`);
});
