import Database from "../models/connecteur.js";


export const testController = async (req, res) => {
    res.status(200).json({data: await Database.getTest()})
}