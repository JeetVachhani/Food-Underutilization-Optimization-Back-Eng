/**
 * Description:
 * This file is to set up the product model for product.
 * The data in this are corresponding to the fields in our database to BE.
 * the type of value here should be the same as the value property of the fields we created in database
 *
 * Public Class: 
 *  -BelongsTo: One-to-one association
 *   The A.belongsTo(B) association means that a One-To-One relationship exists between A and B, with the foreign key 
 *   being defined in the source model (A).
 *
 * Contributors: Yue Jiao, Yunning Yang
 */

const Sequelize = require('sequelize');
//the connection to database
const db = require('../config/DB.js');
var Store = require('./StoreModel');

//define products model here, and reflect the fields in our database to BE
//the value set here should be the same as the value property of the field we created in database
var Product = db.sequelize.define(
  "products",
  {
    product_id: {
      type: Sequelize.INTEGER,
      //Automatically gets converted to SERIAL for MySQL
      autoIncrement: true,
      primaryKey: true
    },
    product_name: {
      type: Sequelize.STRING
    },
    product_image: {
      type: Sequelize.STRING
    },
    category: {
      type: Sequelize.STRING
    },
    price: {
      type: Sequelize.DOUBLE
    },
    expire_date: {
      type: Sequelize.STRING
    },
    stock_amount: {
      type: Sequelize.INTEGER
    },
    coupon: {
      type: Sequelize.STRING
    },

  },
  {
    //Sequelize default to timestamps, set to true if we decide to use it
    timestamps: false
  }
)

//product belongs to store
Product.belongsTo(Store, { as: 'store_product', foreignKey: 'store_id' });

module.exports = Product;