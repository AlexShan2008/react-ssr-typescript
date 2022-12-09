const express = require("express");
const cors = require("cors");
const app = express();
app.use(cors());

app.get("/api/user", (req, res) => {
  res.json({
    success: true,
    data: [
      {
        id: 1,
        name: "Alex",
      },
      {
        id: 2,
        name: "Alice",
      },
      {
        id: 3,
        name: "Alec",
      },
    ],
  });
});

app.listen(8000, () => {
  console.log("API server port 8000");
});
