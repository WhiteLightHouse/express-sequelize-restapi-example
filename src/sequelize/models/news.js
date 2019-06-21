module.exports = (sequelize, DataTypes) => {
    const news = sequelize.define('news', {
        title: { type: DataTypes.STRING, allowNull: false,},
        content: { type: DataTypes.TEXT, allowNull: false,},
        publisher: { type: DataTypes.STRING, allowNull: false,},
        link: { type: DataTypes.STRING, allowNull: false,},
        image: { type: DataTypes.STRING, allowNull: false,},
        date: { type: DataTypes.DATE, allowNull: false },
    }, {
        timestamps: true,
        paranoid: true,
        underscored: true,
    });

    news.associate = models => {
    };
    return news;
};
