import {Column, Entity, PrimaryColumn} from "typeorm";

@Entity()
export class Auth {
    @PrimaryColumn({
        type: "varchar",
        length: 30
    })
    user_id: string

    @Column({
        type: "varchar",
        length: 64
    })
    password: string
}