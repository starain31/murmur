import {Entity, ManyToOne, PrimaryGeneratedColumn, Unique} from "typeorm";
import {User} from "./User";
import {Murmur} from "./Murmur";

@Entity()
@Unique('user_likes_pk', ['user', 'murmur'])
export class UserLikes {
    @PrimaryGeneratedColumn()
    id: number

    @ManyToOne(() => User)
    user: User

    @ManyToOne(() => Murmur)
    murmur: Murmur
}