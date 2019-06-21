'use strict';
module.exports = (sequelize, DataTypes) => {
    const feed = sequelize.define('feed', {
        title: { type: DataTypes.STRING, allowNull: false,},
        link: { type: DataTypes.STRING, allowNull: false,},
        publisher: { type: DataTypes.STRING, allowNull: false,},
        background: { type: DataTypes.STRING, allowNull: false,},
    }, {
        timestamps: true,
        paranoid: true,
        underscored: true,
    });

    feed.associate = models => {
    };
    return feed;
};
