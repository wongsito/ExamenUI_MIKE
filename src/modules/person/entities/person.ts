import { Entity, TStatus } from "../../../kernel/types";

export type TPerson = Entity<number> & {
    name?: string;
    surname?: string;
    lastname?: string;
    birthdate: Date;
    curp?: string;
    rfc?: string;
};