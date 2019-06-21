'use strict';
module.exports = (sequelize, DataTypes) => {
    const comment = sequelize.define('comment', {
        user: { type: DataTypes.STRING, allowNull: false,},
        content: { type: DataTypes.TEXT, allowNull: false,},
        favorableFactorId: { type: DataTypes.INTEGER, allowNull: false,},
    }, {
        timestamps: true,
        paranoid: true,
        underscored: true,
    });

    comment.associate = models => {
        comment.belongsTo(models.favorableFactor);
        comment.hasMany(models.innerComment);
    };
    return comment;
};
