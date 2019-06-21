'use strict';
module.exports = (sequelize, DataTypes) => {
    const company = sequelize.define('company', {
        name: { type: DataTypes.STRING, allowNull: false,},
        icon: { type: DataTypes.STRING},
        currency: { type: DataTypes.STRING, allowNull: false,},
        favorableFactorId: { type: DataTypes.INTEGER, allowNull: false,},
    }, {
        timestamps: true,
        paranoid: true,
        underscored: true,
    });

    company.associate = models => {
        company.belongsTo(models.favorableFactor);
        // TODO company.hasMany(models.favorableFactor); 로 모델 수정
    };
    return company;
};
