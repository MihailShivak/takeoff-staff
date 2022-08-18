const sequelize = require('../db');
const {DataTypes} = require('sequelize');

const User = sequelize.define('user', {
   id:{type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
   username:{type: DataTypes.STRING, unique: true},
   password:{type: DataTypes.STRING},
   role:{type: DataTypes.STRING, defaultValue: "USER"} 
})
const Contact = sequelize.define('contact', {
   id:{type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
   name: {type: DataTypes.STRING, allowNull: false},
})

User.hasOne(Contact)
Contact.belongsTo(User)

module.exports = {
   User,
   Contact
}