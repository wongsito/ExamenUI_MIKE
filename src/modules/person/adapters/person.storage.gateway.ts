// Dao | "Service Respository"
import { IpersonRepository } from "modules/use-cases/ports/person.repository";
import { TPerson } from "../entities/person";
import { pool } from "../../../config/postgres";

export class PersonStorageGateway implements IpersonRepository{

    async save(person: TPerson): Promise<boolean> {
        const query = "INSERT INTO people(name, surname, lastname, birthdate, curp, rfc) VALUES($1, $2, $3, $4, $5, $6);";
        const {rows: peopleRows} = await pool.query(query, [person.name, person.surname, person.lastname, person.birthdate, person.curp, person.rfc]);
        return true;
    }

};