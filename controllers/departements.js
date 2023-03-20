import departements from "../models/departements";
const departementsController = express.Router();

// Créer un nouveau département
departementsController.createDepartement = async (req, res) => {
    try {
        const { nom, createdby } = req.body;
        const departement = await departements.create({
            nom,
            createdby,
        });
        res.status(201).json(departement);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Erreur du serveur');
    }
};

// Récupérer tous les départements
departementsController.getDepartements = async (_req, res) => {
    try {
        const departement = await departements.findAll();
        res.status(200).json(departement);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Erreur du serveur');
    }
};

// Récupérer un département par ID
departementsController.getDepartementById = async (req, res) => {
    try {
        const departement = await departements.findByPk(req.params.id);
        if (!departement) {
            return res.status(404).send('Département introuvable');
        }
        res.status(200).json(departement);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Erreur du serveur');
    }
};

// Mettre à jour un département
departementsController.updateDepartement = async (req, res) => {
    try {
        const { nom, createdby } = req.body;
        const departement = await departements.findByPk(req.params.id);
        if (!departement) {
            return res.status(404).send('Département introuvable');
        }
        await departement.update({
            nom,
            createdby,
        });
        res.status(200).json(departement);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Erreur du serveur');
    }
};

// Supprimer un département
departementsController.deleteDepartement = async (req, res) => {
    try {
        const departement = await departements.findByPk(req.params.id);
        if (!departement) {
            return res.status(404).send('Département introuvable');
        }
        await departement.destroy();
        res.status(200).json({ message: 'Département supprimé avec succès' });
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Erreur du serveur');
    }
};

export default departementsController;