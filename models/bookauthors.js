'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class BookAuthors extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  BookAuthors.init({
    author_id: {
      type: DataTypes.INTEGER,
      primaryKey: true
    },
    book_id:{
      type:DataTypes.INTEGER,
      primaryKey: true
    }
  }, {
    sequelize,
    modelName: 'BookAuthors',
    timestamps:false,
    tableName: 'book_authors'
  });
  return BookAuthors;
};