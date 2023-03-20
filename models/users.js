import connectionPromise from './connexion.js';

class Users {
    static getAll = async () => {
        const connection = await connectionPromise;
        const resultat = await connection.all(`
            select * from users
        `);
        return resultat;
    }


    static add = async (data) => {
        const connection = await connection.run(
            `INSERT INTO users(nom,prenom,photo,telephone,email,mot_de_pass)
            VALUES(?, ?, ?, ?, ?, ?)`,
            [data.nom, data.prenom, data.photo, data.telephone, data.email, data.mot_de_pass]
        );
        return resultat;
    }



}

export default Users;