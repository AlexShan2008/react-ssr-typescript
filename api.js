const express = require("express");
const cors = require("cors");
const session = require("express-session");

const app = express();
app.use(cors());
app.use(
  session({
    saveUninitialized: true,
    resave: true,
    secret: "ALEX",
  })
);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

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
app.post("/api/login", (req, res) => {
  const user = req.body;
  req.session.user = user;
  res.json({
    success: true,
    data: user,
  });
});
app.get("/api/logout", (req, res) => {
  req.session.user = null;
  res.json({
    success: true,
  });
});
app.post("/api/validate", (req, res) => {
  const user = req.session.user;
  if (user) {
    res.json({
      success: true,
      data: user,
    });
  } else {
    res.json({
      success: false,
      error: `User has not been login`,
    });
  }
});

app.listen(8000, () => {
  console.log("API server port 8000");
});
