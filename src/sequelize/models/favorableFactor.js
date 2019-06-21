'use strict';
module.exports = (sequelize, DataTypes) => {
    const favorableFactor = sequelize.define('favorableFactor', {
        title: { type: DataTypes.STRING, allowNull: false,},
        content: { type: DataTypes.TEXT, allowNull: false,},
        publication: { type: DataTypes.STRING, allowNull: false,},
        type: { type: DataTypes.STRING, allowNull: false,},
        image: { type: DataTypes.STRING},
        link: { type: DataTypes.STRING},
        date: { type: DataTypes.DATE, allowNull: false },
    }, {
        timestamps: true,
        paranoid: true,
        underscored: true,
    });

    favorableFactor.associate = models => {
        favorableFactor.hasOne(models.company);
        favorableFactor.hasMany(models.comment);
        // TODO favorableFactor.belongsTo(models.company); 로 모델 수정
    };
    return favorableFactor;
};
