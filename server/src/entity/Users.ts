import {Entity, PrimaryGeneratedColumn, Column} from "typeorm";

@Entity()
export class Murmurs {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    follow_count: number;

    @Column()
    followed_count: number;

}
