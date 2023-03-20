//import les controlleurs
import ControllerUsers from "../controllers/users.js"; 
import { Router } from "express";
//importer la fonction d'express

const UsersRouter=Router()
//Definir les routes correspondants a chaque conroller
UsersRouter.get('/', ControllerUsers.listUsers)
      .post('/',ControllerUsers.ajouterUser)
export default UsersRouter