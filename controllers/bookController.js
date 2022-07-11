const { Author, Book } = require("../models");
const createError = require("../middlewares/error");

exports.getAllBook = async (req, res, next) => {
  try {
    const books = await Book.findAll({
      attributes: ["name", "genre"],
      include: [
        {
          model: Author,
          //   as: "author",
          require: false,
          attributes: [["author_name", "name"], "gender"],
        },
      ],
    });

    res.json(books);
  } catch (err) {
    next(err);
  }
};

exports.createBook = async (req, res, next) => {
  try {
    const { name, genre } = req.body;
    const { authorId } = req.params;

    const author = await Author.findByPk(authorId);

    if (!name) {
      createError("name is require", 400);
    }
    if (!genre) {
      createError("genre is require", 400);
    }
    if (!authorId) {
      createError("authorId is require", 400);
    }

    const book = await Book.create({
      name,
      genre,
      authorId,
    });

    res.json({ message: "Create Book success!" });
  } catch (err) {
    next(err);
  }
};

exports.updateBook = async (req, res, next) => {
  try {
    const { name, genre } = req.body;
    const { id } = req.params;

    const book = await Book.findByPk(id);

    book.name = name;
    book.genre = genre;

    const result = await book.save();

    res.json({ message: "update Book success!" });
  } catch (err) {
    next(err);
  }
};

exports.deleteBook = async (req, res, next) => {
  try {
    const { id } = req.params;

    const book = await Book.findByPk(id);

    await book.destroy();

    res.sendStatus(204);
  } catch (err) {
    next(err);
  }
};
