const express = require("express");
const rateLimit = require("express-rate-limit");
const helmet = require("helmet");
const cors = require("cors");

const app = express();

const productRoute = require("./Routes/productRoutes");
const orderRoute = require("./Routes/orderRoutes");
const cartRoute = require("./Routes/cartRoutes");
const employeeRoute = require("./Routes/employeeRoutes");

// app.use(express.static(path.join(__dirname, "public")));

// solving CORS issue
app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
  })
);

app.use(
  helmet.contentSecurityPolicy({
    useDefaults: true,
    directives: {
      "default-src": ["'self'"],
      "connect-src": ["'self'", "*"],
      "img-src": ["'self'", "https: data:"],
      "script-src": ["'self'", "https: data:"],
      "frame-src": ["*"],
    },
  })
);

const limiter = rateLimit({
  max: 100,
  windowMs: 60 * 60 * 1000,
  message: "Too many requests from this IP, please try again in an hour!",
});
app.use("/api", limiter);

app.use(express.json({ limit: "10kb" }));
app.use(express.urlencoded({ extended: true, limit: "10kb" }));

app.use(function (req, res, next) {
  console.log(req.query);
  next();
});

app.use("/api/product", productRoute);
app.use("/api/order", orderRoute);
app.use("/api/cart", cartRoute);
app.use("/api/employee", employeeRoute);

module.exports = app;
