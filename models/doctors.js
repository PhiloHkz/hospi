import connectionPromise from './connexion.js';
class   doctors {
    static getAll = async () => {
        const connection = await connectionPromise;
        const resultat = await connection.all(`
            select * from doctors
        `);
        return resultat;
    }
    Doctors = sequelize.define('doctors', {
        doctorsID: {
            type: DataTypes.INTEGER.UNSIGNED,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        userID: {
            type: DataTypes.INTEGER.UNSIGNED,
            allowNull: false,
            references: {
                model: 'users',
                key: 'userID'
            }
        },
        createdby: {
            type: DataTypes.INTEGER.UNSIGNED,
            allowNull: false,
            references: {
                model: 'users',
                key: 'userID'
            }
        },
        departementsID: {
            type: DataTypes.SMALLINT.UNSIGNED,
            allowNull: false,
            references: {
                model: 'departements',
                key: 'departementsID'
            }
        },
        hospitalsID: {
            type: DataTypes.SMALLINT.UNSIGNED,
            allowNull: false,
            references: {
                model: 'hospitals',
                key: 'hospitalsID'
            }
        }
    });
}

export default doctors;
