module.exports = (sequelize, DataTypes) => {
  const Author = sequelize.define(
    "Author",
    {
      authorName: DataTypes.STRING,
      gender: DataTypes.ENUM("male", "female"),
    },
    {
      underscored: true,
    }
  );
  Author.associate = (models) => {
    Author.hasMany(models.Book, {
      foreignKey: {
        name: "authorId",
      },
      onDelete: "restrict",
      onUpdate: "restrict",
    });
  };

  return Author;
};
