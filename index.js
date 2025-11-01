const express = require("express");
const driverData = require("./driverNames.json"); // Works directly

const app = express();
const PORT = 3000;

app.get("/drivers", (req, res) => {
  res.json(driverData);
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));