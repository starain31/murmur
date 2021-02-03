import {Entity, ManyToOne, PrimaryGeneratedColumn, Unique} from "typeorm";
import {User} from "./User";

@Entity()
@Unique('follows_pk', ['follower', 'following'])
export class Follows {
    @PrimaryGeneratedColumn()
    id: number;

    @ManyToOne(() => User)
    follower: User;

    @ManyToOne(() => User)
    following: User;
}