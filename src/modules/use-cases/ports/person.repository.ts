import { TPerson } from "modules/person/entities/person";

export interface IpersonRepository {
    save(person: TPerson):Promise<boolean>;
};