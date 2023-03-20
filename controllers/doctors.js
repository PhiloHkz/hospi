import doctors from "../models/doctors";
const express = require('express');
const doctorController = express.Router();


// Get tout les docteurs
doctorController.get('/', async (req, res) => {
    try {
        const doctors = await doctors.findAll();
        res.json(doctors);
    } catch (err) {
        console.error(err);
        res.status(500).send('Internal Server Error');
    }
});

// Creer un nouveau docteur
doctorController.post('/', async (req, res) => {
    try {
        const doctor = await doctors.create(req.body);
        res.json(doctor);
    } catch (err) {
        console.error(err);
        res.status(500).send('Internal Server Error');
    }
});

// Mettre a jour un docteur specifique par ID
doctorController.put('/:id', async (req, res) => {
    try {
        const [numRowsUpdated, [updatedDoctor]] = await doctors.update(req.body, {
            where: { doctorsID: req.params.id },
            returning: true,
        });
        if (numRowsUpdated) {
            res.json(updatedDoctor);
        } else {
            res.status(404).send('Doctor not found');
        }
    } catch (err) {
        console.error(err);
        res.status(500).send('Internal Server Error');
    }
});

// supprimer un docteur par ID
doctorController.delete('/:id', async (req, res) => {
    try {
        const numRowsDeleted = await doctors.destroy({
            where: { doctorsID: req.params.id },
        });
        if (numRowsDeleted) {
            res.send('Doctor deleted successfully');
        } else {
            res.status(404).send('Doctor not found');
        }
    } catch (err) {
        console.error(err);
        res.status(500).send('Internal Server Error');
    }
});





export default doctorController;