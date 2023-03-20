//import les controlleurs
import doctorController from "../controllers/doctors";
import { Router } from "express";
const doctorsRouter = Router()

// Route pour récupérer tous les médecins
doctorsRouter.get('/doctors', doctorController.getDoctors);

// Route pour créer un nouveau médecin
doctorsRouter.post('/doctors', doctorController.createDoctor);

// Route pour récupérer un médecin par ID
doctorsRouter.get('/doctors/:id', doctorController.getDoctorById);

// Route pour mettre à jour un médecin
doctorsRouter.put('/doctors/:id', doctorController.updateDoctor);

// Route pour supprimer un médecin
doctorsRouter.delete('/doctors/:id', doctorController.deleteDoctor);

export default doctorsRouter;

