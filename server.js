const express = require("express");
const authRouter = require("./Router/authRouter");
const cors = require("cors");
const bodyParser = require("body-parser");

require("dotenv").config();

const app = express();

const corsOptions = {
  origin: "http://localhost:3000",  
  methods: ["GET", "POST", "PUT", "DELETE"], 
  allowedHeaders: ["Content-Type", "Authorization"],  
};

app.use(cors(corsOptions));  


app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/auth", authRouter);

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
