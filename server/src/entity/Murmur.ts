import {Entity, PrimaryGeneratedColumn, Column, ManyToOne} from "typeorm";
import {User} from "./User";

@Entity()
export class Murmur {

    @PrimaryGeneratedColumn()
    id: number;

    @Column("text")
    text: string;

    @ManyToOne(() => User, user => user.murmurs)
    user: User;

    @Column()
    like: number;

}
