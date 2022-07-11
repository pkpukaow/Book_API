const express = require("express");
const cors = require("cors");
const authorRoute = require("./routes/authorRoute");
const bookRoute = require("./routes/bookRoute");
const notFoundMiddleware = require("./middlewares/notFound");
const errorMiddleware = require("./middlewares/error");

// const { sequelize } = require("./models");
// sequelize.sync({ force: true });

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/author", authorRoute);
app.use("/book", bookRoute);

app.use(notFoundMiddleware);
app.use(errorMiddleware);

const port = 8008;

app.listen(port, () => console.log(`server is running on port: ${port}`));
