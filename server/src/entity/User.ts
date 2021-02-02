import {Column, Entity, OneToMany, PrimaryColumn} from "typeorm";
import {Murmur} from "./Murmur";

@Entity()
export class User {

    @PrimaryColumn({length: 30})
    id: string;

    @Column()
    name: string;

    @Column()
    follow_count: number;

    @Column()
    followed_count: number;

    @OneToMany(() => Murmur, murmur => murmur.user)
    murmurs: Murmur[]

}
