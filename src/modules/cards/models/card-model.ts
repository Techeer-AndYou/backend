import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity() // 데이터베이스 테이블 이름
export class Card {
  @PrimaryGeneratedColumn()
  uid: number;

  @Column({ type: 'int', nullable: false })
  user_uid: number;

  @Column({ type: 'varchar', length: 100, nullable: false })
  email: string;

  @Column({ type: 'varchar', length: 30, nullable: false })
  name: string;

  @Column({ type: 'varchar', length: 20, nullable: false })
  phone: string;

  @Column({ type: 'varchar', length: 8192, nullable: true })
  image?: string;

  @Column({ type: 'varchar', length: 3000, nullable: true })
  info?: string;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn({ nullable: true })
  updated_at: Date;

  @Column({ type: 'datetime', nullable: true })
  deleted_at?: Date;
}
