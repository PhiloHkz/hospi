//import les controlleurs
import departementsController from "../controllers/departements";
import { Router } from "express";

const depatementsRouter = Router()

// Route pour créer un nouveau département
depatementsRouter.post('/departements', departementsController.createDepartement);

// Route pour récupérer tous les départements
depatementsRouter.get('/departements', departementsController.getDepartements);

// Route pour récupérer un département par ID
depatementsRouter.get('/departements/:id', departementsController.getDepartementById);

// Route pour mettre à jour un département
depatementsRouter.put('/departements/:id', departementsController.updateDepartement);

// Route pour supprimer un département
depatementsRouter.delete('/departements/:id', departementsController.deleteDepartement);

export default depatementsRouter;


