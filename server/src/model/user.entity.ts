import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
import { BeforeInsert } from 'typeorm';
import * as bcrypt from 'bcrypt'

@Entity({name:'user'})
export class User {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({nullable:true})
    firstname: string;

    @Column()
    lastname: string;


    @Column({default:''})
    photo_id:string;

    @Column({default :''})
    bio:string;

    @Column()
    email: string;
    
    @Column()
    password:string;

    @Column({type :'timestamp', default:()=> 'CURRENT_TIMESTAMP'})
    date: Date;

    @BeforeInsert()
    async hashPassword(): Promise<void>{
        const salt = await bcrypt.genSalt()
        if(this.password){
            
            this.password= await bcrypt.hash(this.password, salt)
    }
}
    //@Column({ default: true })
    //isActive: boolean;
}
