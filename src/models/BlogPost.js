module.exports = (sequelize, DataTypes) => {
    const BlogPost = sequelize.define('BlogPost', {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
      },
      title: DataTypes.STRING,
      content: DataTypes.STRING,
      userId: DataTypes.INTEGER,
      published: DataTypes.DATE,
      updated: DataTypes.DATE,
    }, {
      timestamps: false,
      underscored: true,
    });

    BlogPost.associate = (models) => {
        BlogPost.belongsTo(models.User, {
          as: 'users',
          foreignKey: 'user_id',
        });
      }
  
    return BlogPost;
  };