import connectionPromise from './connexion.js';

class Consultation {
    static getAll = async () => {
        const connection = await connectionPromise;
        const resultat = await connection.all(`
            select * from consultations
        `);
        return resultat;
    }


    static add = async (data) => {
        const connection = await connection.run(
            `INSERT INTO consultations(doctorsID, rendezvousID, rapport)
            VALUES(?, ?, ?)`,
            [data.doctorsID, data.rendezvousID, data.rapport]
        );
        return resultat;
    }



}

export default Consultation;