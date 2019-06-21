'use strict';

const fs = require('fs');
const path = require('path');
const Sequelize = require('sequelize');
const moment = require('moment-timezone');

const basename = path.basename(__filename);
const env = process.env.NODE_ENV || 'development';
const config = require('../../../config/dbconfig.json')[env];
const db = {};

config.timezone = moment.tz.guess();

config.define = {
    underscored: true,
    freezeTableName: true,
    timestamps: false,
};

config.dialectOptions = {
    dateStrings: true,
    typeCast: function (field, next) {
        if (field.type == 'DATETIME' || field.type == 'TIMESTAMP') {
            return new Date(field.string() + 'Z');
        }
        return next();
    }
};

config.pool = {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
};

let sequelize;
if (config.use_env_variable)
    sequelize = new Sequelize(process.env[config.use_env_variable], config);
else
    sequelize = new Sequelize(config.database, config.username, config.password, config);


fs.readdirSync(__dirname)
    .filter(file => {
        return (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js');
    })
    .forEach(file => {
        const model = sequelize['import'](path.join(__dirname, file));
        db[model.name] = model;
    });

db.sequelize = sequelize;
db.Sequelize = Sequelize;

const addModel = model => {
    return model(sequelize, Sequelize);
};

db.favorableFactor = addModel(require('./favorableFactor'));
db.company = addModel(require('./company'));
db.comment = addModel(require('./comment'));
db.innerComment = addModel(require('./innerComment'));
db.feed = addModel(require('./feed'));
db.news = addModel(require('./news'));

Object.keys(db).forEach(modelName => {
    if (db[modelName].associate) {
        db[modelName].associate(db);
    }
});

module.exports = db;
