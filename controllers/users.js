import Users from "../models/users.js";


class ControllerUsers{
    //la liste de tous les users
    static listUsers=async(req,res)=>{
        try {
            const result = await Users.getAll();
            res.status(200).json({ data: result })
        } catch (error) {
            res.status(404).json({ message: error.message })
        }
            
    }

    static ajouterUser = async(req,res)=>{
        //recuperer les infos provenant de la forme de l'utilisateur
        const{ usersID,nom,prenom,photo,telephone,email,mot_de_pass}=req.body
        //creer un objet etudiant a inserer dans la table etudiant
        const nouvelUser= {usersID,nom,prenom,photo,telephone,email,mot_de_pass}
        
        try {
            //insersion du nouvel utilisateur
            const resultat = await Users.create(nouvelUser)
            res.status(200).json({ message:'user ajouté avec succes '})
            console.log("reslutat de l'ajout", resultat);
        
        } catch (error) {
            res.status(400).json({message: error.message})
        }  
    }
}

export default ControllerUsers; 