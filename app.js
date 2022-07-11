const express = require("express");
const cors = require("cors");
const notFoundMiddleware = require("./middlewares/notFound");
const errorMiddleware = require("./middlewares/error");

// const { sequelize } = require("./models");
// sequelize.sync({ alter: true });

const app = express();
app.use(cors());

app.use(notFoundMiddleware);
app.use(errorMiddleware);

const port = 8008;

app.listen(port, () => console.log(`server is running on port: ${port}`));
