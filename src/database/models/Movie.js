module.exports = (sequelize, dataTypes) => {
    
    const alias = "Movie"
    const cols = {
        id: {
            type : dataTypes.INTEGER.UNSIGNED,
            primaryKey : true,
            allowNull : false,
            autoIncrement : true,
        },
        title: {
            type : dataTypes.STRING(500),
            allowNull : false,
        },
        rating: {
            type : dataTypes.DECIMAL(3,1).UNSIGNED,
            allowNull : false,
        },
        awards: {
            type : dataTypes.INTEGER.UNSIGNED,
            allowNull : false,
            defaultValue: 0,
        },
        release_date: {
            type : dataTypes.DATE,
            allowNull : false,
        },
        length: {
            type : dataTypes.INTEGER.UNSIGNED,
            defaultValue : null,
        },
        genre_id: {
            type : dataTypes.INTEGER.UNSIGNED,
            defaultValue : null,
        },
    }

    const config = {
        tableName : "movies", // Nombre de la table en la base de datos. Si la table es el plural del modelo (siempre en ingles), no es necesario ponerlo.
        timeStamps : true, // Si no existe debe ir en false, si existe en true. 
        underscored : true // Si la base de datos nombre la columna con guion bajo y no con camelCase, es true
    }

    const Movie = sequelize.define(alias, cols, config)

    return Movie

}
