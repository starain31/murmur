import {Column, Entity, OneToMany, PrimaryGeneratedColumn} from "typeorm";
import {Murmur} from "./Murmur";

@Entity()
export class User {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    follow_count: number;

    @Column()
    followed_count: number;

    @OneToMany(() => Murmur, murmur => murmur.user)
    murmurs: Murmur[]

}
