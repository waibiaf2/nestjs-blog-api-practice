import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { IsNotEmpty } from 'class-validator';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    type: 'varchar',
    length: 256,
    nullable: false,
  })
  firstName: string;

  @Column({
    type: 'varchar',
    length: 256,
    nullable: true,
  })
  lastName: string;

  @Column({
    type: 'varchar',
    length: 256,
    nullable: false,
    unique: true,
  })
  @IsNotEmpty({
    message: 'Email is required',
  })
  email: string;

  @Column({
    type: 'varchar',
    length: 256,
    nullable: false,
  })
  password: string;
}
