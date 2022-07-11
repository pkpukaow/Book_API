module.exports = (sequelize, DataTypes) => {
  const Book = sequelize.define(
    "Book",
    {
      name: DataTypes.STRING,
      genre: DataTypes.STRING,
    },
    {
      underscored: true,
    }
  );
  Book.associate = (models) => {
    Book.belongsTo(models.Author, {
      foreignKey: {
        name: "authorId",
      },
      onDelete: "restrict",
      onUpdate: "restrict",
    });
  };

  return Book;
};
