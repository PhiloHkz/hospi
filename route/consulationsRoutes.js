//import les controlleurs
import ControllerConsultation from "../controllers/consultations.js"; 
import { Router } from "express";
//importer la fonction d'express

const consultationRouter=Router()
//Definir les routes correspondants a chaque conroller
consultationRouter.get('/', ControllerConsultation.listConsultations)
      .post('/',ControllerConsultation.ajouterConsultation)
export default consultationRouter