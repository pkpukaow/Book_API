const { Author, Book } = require("../models");
const createError = require("../middlewares/error");

exports.getAuthorById = async (req, res, next) => {
  try {
    const { id } = req.params;

    const author = await Author.findByPk(id);

    res.json(author);
  } catch (err) {
    next(err);
  }
};

exports.createAuthor = async (req, res, next) => {
  try {
    const { authorName, gender } = req.body;

    if (!authorName) {
      createError("name is require", 400);
    }

    if (!gender) {
      createError("gender is require", 400);
    }

    const author = await Author.create({
      authorName,
      gender,
    });

    res.json({ message: "Create Author success!" });
  } catch (err) {
    next(err);
  }
};

exports.updateAuthor = async (req, res, next) => {
  try {
    const { authorName, gender } = req.body;
    const { id } = req.params;

    const author = await Author.findByPk(id);

    author.authorName = authorName;
    author.gender = gender;

    const result = await author.save();

    res.json({ message: "update Author success!" });
  } catch (err) {
    next(err);
  }
};

exports.deleteAuthor = async (req, res, next) => {
  try {
    const { id } = req.params;

    const author = await Author.findByPk(id);

    const books = await author.getBooks();

    JSON.parse(JSON.stringify(books)).forEach(async (book) => {
      await Book.destroy({ where: { id: book.id } });
    });

    await author.destroy();

    res.sendStatus(204);
  } catch (err) {
    next(err);
  }
};
