import {Column, Entity, OneToMany, PrimaryColumn} from "typeorm";
import {Murmur} from "./Murmur";

@Entity()
export class User {

    @PrimaryColumn({length: 30})
    id: string;

    @Column()
    name: string;

    @Column()
    number_of_followers: number;

    @Column()
    number_of_followings: number;

    @OneToMany(() => Murmur, murmur => murmur.user)
    murmurs: Murmur[]

}
