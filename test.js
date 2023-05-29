const express = require("express");
const jwt = require("jsonwebtoken");

const app = express();
app.use(express.json());

const secretKey = "aL0ng-unbreakableSecret_Key";

const users = [
  {
    id: "1",
    username: "Jeffrey",
    password: "w123456",
  },
  {
    id: "2",
    username: "Sara",
    password: "w123456",
  },
  {
    id: "3",
    username: "Atticus",
    password: "w123456",
  },
];

const verifyToken = async function (req, res, next) {
  let token = req.headers.authorization.split(" ")[1];

  if (!token) {
    return res.status(401).json("something went wrong");
  }

  console.log(token);

  const result = await jwt.verify(token, secretKey);
  // console.log(result);
  if (!result.id) return res.status(401).json("error");

  req.user = users.find((user) => user.id === result.id);

  next();
};

const signToken = (id) => {
  return jwt.sign({ id }, secretKey, {
    expiresIn: "1h",
  });
};

app.post("/login", (req, res) => {
  const { username, password } = req.body;

  const user = users.find((u) => u.username === username && u.password === password);

  if (!user) return res.status(401).json("something went wrong");

  const token = signToken(user.id);

  res.json(token);
});

app.get("/protected", verifyToken, (req, res) => {
  res.status(200).json({
    status: "success",
    data: {
      user: req.user,
    },
  });
});

const port = 3000;
app.listen(port, () => {
  console.log("listening on port 3000");
});
