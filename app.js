const express = require("express");
const rateLimit = require("express-rate-limit");
const helmet = require("helmet");
const cors = require("cors");
// const mongoSanitize = require("express-mongo-sanitize");

const app = express();

const productRoute = require("./Routes/productRoutes");
const orderRoute = require("./Routes/orderRoutes");
const cartRoute = require("./Routes/cartRoutes");
const employeeRoute = require("./Routes/employeeRoutes");

// app.use(express.static(path.join(__dirname, "public")));

// solving CORS issue
app.use(
  cors({
    origin: "*",
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    preflightContinue: false,
    optionsSuccessStatus: 204,
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

// checking req.query middleware
app.use(function (req, res, next) {
  console.log("Query:", req.query);
  console.log("Params:", req.params);
  console.log("Body:", req.body);
  next();
});

app.use("/api/product", productRoute);
app.use("/api/order", orderRoute);
app.use("/api/cart", cartRoute);
app.use("/api/employee", employeeRoute);

module.exports = app;
