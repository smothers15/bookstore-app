'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Book extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Book.belongsToMany(models.Author, {
        through: 'book_authors',
        as: 'authors',
        foreignKey: 'author_id',
        otherKey: 'book_id',
        timestamps: false
      })
    }
  }
  Book.init({
    title: DataTypes.STRING,
    publisher: DataTypes.STRING,
    page_number: DataTypes.INTEGER,
    genre: DataTypes.STRING,
    cover: DataTypes.STRING,
    description: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Book',
    timestamps: false,
    tableName: 'books'
  });
  return Book;
};