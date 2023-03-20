import connectionPromise from './connexion.js';
class Rendezvous {
    static getAll = async () => {
        const connection = await connectionPromise;
        const resultat = await connection.all(`
            select * departements
        `);
        return resultat;
    }
     departements = sequelize.define('departements', {
        departementsID: {
            type: DataTypes.SMALLINT.UNSIGNED,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        nom: {
            type: DataTypes.STRING(45),
            allowNull: false,
            unique: true,
        },
        createdby: {
            type: DataTypes.INTEGER.UNSIGNED,
            allowNull: false,
            references: {
                model: Users,
                key: 'userID',
            },
        },
    });
}
export default departements;
