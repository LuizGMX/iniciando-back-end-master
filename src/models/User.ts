import {Entity, Column, PrimaryGeneratedColumn,CreateDateColumn,UpdateDateColumn} from 'typeorm'

@Entity('users')
class users{
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    name: string;

    @Column('timestamp with time zone')
    date: Date;

    @Column()
    password:string;

    @CreateDateColumn()
    created_at:Date;

    @UpdateDateColumn()
    updated_at:Date

}

export default users