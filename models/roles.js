import connectionPromise from './connexion.js';

class Role {
    static getAll = async () => {
        const connection = await connectionPromise;
        const resultat = await connection.all(`
            select * from roles
        `);
        return resultat;
    }


    static add = async (data) => {
        const connection = await connection.run(
            `INSERT INTO roles(nom)
            VALUES(?)`,
            [data.nom]
        );
        return resultat;
    }



}

export default Role;