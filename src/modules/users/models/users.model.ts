import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { BaseEntity } from '../../../common/models/base.model';

@Entity()
export class Users extends BaseEntity {

  @PrimaryGeneratedColumn()
  id: number;

  @Column({nullable: false})
  password: string;

  @Column({ nullable: false })
  username: string;

  @Column({ nullable: false })
  email: string;

  @Column({ nullable: false })
  phoneNumber: string;

}



