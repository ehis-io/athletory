import { timeStamp } from "console";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class PostEntity {
    @PrimaryGeneratedColumn()
    id:string;
    
    @Column()
    post_title: string;

    @Column()
    post_text: string;

    @Column({type : 'timestamp', default: ()=> 'CURRENT_TIMESTAMP'})
    post_date: Date;

    @PrimaryGeneratedColumn()
    post_image_id: string;
    
    @Column({default : ''})
    user_id: string;

    // @Column({default: true})
    // isActive: boolean;

}