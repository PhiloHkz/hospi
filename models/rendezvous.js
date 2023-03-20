import connectionPromise from './connexion.js';

class Rendezvous {
    static getAll = async () => {
        const connection = await connectionPromise;
        const resultat = await connection.all(`
            select * from rendezvous
        `);
        return resultat;
    }


    static add = async (data) => {
        const connection = await connection.run(
            `INSERT INTO rendezvous(patientID, departementsID, hospitalsID,date_de_rendez_vous,paid)
            VALUES(?, ?, ?, ?, ?)`,
            [data.patientID, data.departementsID, data.hospitalsID, data.date_de_rendez_vous, data.paid]
        );
        return resultat;
    }



}

export default Rendezvous;