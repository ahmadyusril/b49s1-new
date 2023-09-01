'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class user extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  user.init({
    name: DataTypes.STRING,
    start_date: DataTypes.DATE,
    end_date: DataTypes.DATE,
    description: DataTypes.TEXT,
    technologies: DataTypes.ARRAY,
    image: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'user',
    timestamps: true,
    createdAt: true,
    updatedAt: true,
  });
  return user;
};