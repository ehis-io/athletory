import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id: string;

    @Column()
    firstname: string;

    @Column()
    lastname: string;
    @Column()
    photo_id:string;

    @Column({default :''})
    bio:string;

    @Column()
    email: string;

    @Column({type :'timestamp', default:()=> 'CURRENT_TIMESTAMP'})
    date: Date;

    @Column({ default: true })
    isActive: boolean;

}
