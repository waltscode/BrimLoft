/*
 * This file defines the Tag model which provides refinement options for products (eg. specification of colours, logos, fabric etc)
 * The tags will help to classify items together under a particular rubric, facilitating filters and searches
 * The Tag model has fields id (primary key) and tag_name, and it is associated with the Product model through
 * the ProductTag model to enable many-to-many relationships (ie. Tags can be associated with multiple products, and products can have multiple tags).
 * The model is initialized using Sequelize and connected to the database through the sequelize instance.
 */
class Tag extends Model {}

//Set up fields ie columns and rules for Tag model
Tag.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    tag_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'tag',
  }
);

module.exports = Tag;