require("dotenv").config();
const express = require("express");
const cors = require("cors");
const app = express();
// const router = require("./router/auth-router")
const authRouter = require("./router/auth-router");
const authContact = require("./router/contact-router");
const serviceRoute = require("./router/service-router");
const adminuser = require("./router/admin-router");
const connectDb = require("./utils/db");
const errorMiddleware = require("./middleware/error-middleware");

const corsOption = {
  origin: "https://digital-solution-client.onrender.com",
  methods: "GET, POST, PUT, DELETE, PATCH, HEAD",
  credentials: true,
};

app.use(cors(corsOption));

app.use(express.json());

app.use("/api/auth", authRouter);
app.use("/api/form", authContact);
app.use("/api/data", serviceRoute);
app.use("/api/admin", adminuser);

// app.get("/", (req, res) => {
//   res.status(200).send("welcome to server");
// });

app.use(errorMiddleware);


connectDb().then(() => { 
  app.listen(process.env.PORT, () => { 
    console.log(`server is running at port :${process.env.PORT}`);
  });
}); 
