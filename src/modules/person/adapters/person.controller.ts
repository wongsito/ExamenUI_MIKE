//person controller
import express, { Request, Response, response } from "express";
import { PersonStorageGateway } from "./person.storage.gateway";
import { SavePersonInteractor } from "../../../modules/use-cases/save-person-interactor";

export class  PersonController{
    static async save(req: Request, res: Response){
        try {
            const repository = new PersonStorageGateway();
            const interactor = new SavePersonInteractor(repository);
            const data = await interactor.execute();
            res.status(204).json(data);
        } catch (error) {
            console.log(error)
            res.status(400).json({message: "Error"});
        }
    }
}

export const userRouter = express.Router();
userRouter.get("/registerPeople", [], PersonController.save);