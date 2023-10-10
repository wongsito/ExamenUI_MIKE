import { TRols } from "modules/rols/entities/rols";

export interface IrolsRepository {
    save(rols: TRols):Promise<boolean>;
};