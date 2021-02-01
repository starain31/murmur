import {Column, Entity, ManyToOne, PrimaryGeneratedColumn} from "typeorm";
import {User} from "./User";

@Entity()
export class Follows {
    @PrimaryGeneratedColumn()
    id: number;

    @ManyToOne(() => User)
    follower: User;

    @ManyToOne(() => User)
    following: User;
}