import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

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
  })
  email: string;

  @Column({
    type: 'varchar',
    length: 256,
    nullable: false,
  })
  password: string;
}
