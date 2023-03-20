//import les controlleurs
import ControllerRole from "../controllers/roles.js"; 
import { Router } from "express";
//importer la fonction d'express

const RolesRouter=Router()
//Definir les routes correspondants a chaque conroller
RolesRouter.get('/', ControllerRole.listRoles)
      .post('/',ControllerRole.ajouterRole)
export default RolesRouter