import Role from "../models/roles.js";



class ControllerRole{
    //la liste de toutes les Consultations
    static listRoles=async(req,res)=>{
        try {
            const result = await Role.getAll();
            res.status(200).json({ data: result })
        } catch (error) {
            res.status(404).json({ message: error.message })
        }
            
    }

    static ajouterRole = async(req,res)=>{
        //recuperer les infos provenant de la forme de l'utilisateur
        const{ rolesID, nom}=req.body
        //creer un objet etudiant a inserer dans la table etudiant
        const nouvelRole= {rolesID, nom}
        
        try {
            //insersion du nouvel etudiantr
            const resultat = await Consultation.create(nouvelRole)
            res.status(200).json({ message:'Role ajouté avec succes '})
            console.log("reslutat de l'ajout", resultat);
        
        } catch (error) {
            res.status(400).json({message: error.message})
        }  
    }
}

export default ControllerRole; 