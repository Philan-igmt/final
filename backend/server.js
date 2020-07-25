const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const app = express();
app.use(bodyParser.json());

//importing the routes
const ProductRoute = require("./routes/products");
const BillFormRoute = require("./routes/billForm");
const RegisterRoute = require("./routes/register");

//using the routes
app.use("/products", ProductRoute);
app.use("/checkout", BillFormRoute);
app.use("/register", RegisterRoute);

// connecting the databse-------------------------------------------------------------------------------------------------
mongoose.connect(
  "mongodb+srv://philani123:philani123@ecommerce.uvb4e.mongodb.net/<dbname>?retryWrites=true&w=majority",
  { useNewUrlParser: true, useUnifiedTopology: true },
  () => console.log(`database connected`)
);
//-------------------------------------------------------------------------------------------------------------------------

const port = process.env.PORT || 5000;
app.listen(port, console.log(`server started on port ${port}`));
