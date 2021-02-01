import {Entity, PrimaryGeneratedColumn, Column} from "typeorm";

@Entity()
export class Murmurs {

    @PrimaryGeneratedColumn()
    id: number;

    @Column("text")
    text: string;

    @Column()
    author: string;

    @Column("int")
    like: number;

}
