'use strict';
module.exports = (sequelize, DataTypes) => {
    const innerComment = sequelize.define('innerComment', {
        user: { type: DataTypes.STRING, allowNull: false,},
        content: { type: DataTypes.TEXT, allowNull: false,},
        commentId: { type: DataTypes.INTEGER, allowNull: false,},
    }, {
        timestamps: true,
        paranoid: true,
        underscored: true,
    });

    innerComment.associate = models => {
        innerComment.belongsTo(models.comment);
    };
    return innerComment;
};
