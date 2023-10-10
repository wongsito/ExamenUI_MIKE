import { Entity, TStatus } from "../../../kernel/types";

export type TRols = Entity<number> & {
    role?: string;
    status_id?: TStatus;
};