import connectionPromise from './connexion.js';

class Database {
    static getTest = async () => {
        const connection = await connectionPromise;
        const resultat = await connection.all('select * from test');
        return resultat;
    }
}

export default Database;