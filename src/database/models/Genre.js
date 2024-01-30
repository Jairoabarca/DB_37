module.exports = (sequelize, dataTypes) => {
    
    const alias = "Genre"
    const cols = {
        id: {
            type : dataTypes.INTEGER.UNSIGNED,
            primaryKey : true,
            allowNull : false,
            autoIncrement : true,
        },
        name: {
            type : dataTypes.STRING(100),
            allowNull : false,
        },
        ranking: {
            type : dataTypes.INTEGER.UNSIGNED,
            allowNull : false,
            unique : true, // Define el índice único en la columna
        },
        active: {
            type : dataTypes.TINYINT,
            allowNull : false,
            defaultValue: 1,
        },
        
    }

    const config = {
        tableName : "genres", // Nombre de la table en la base de datos. Si la table es el plural del modelo (siempre en ingles), no es necesario ponerlo.
        timeStamps : true, // Si no existe debe ir en false, si existe en true. 
        underscored : true // Si la base de datos nombre la columna con guion bajo y no con camelCase, es true
    }

    const Genre = sequelize.define(alias, cols, config)

    return Genre

}