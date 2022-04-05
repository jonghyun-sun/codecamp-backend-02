import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

export enum IsAdmin {
  USER = 'user',
  ADMIN = 'admin',
}

@Entity()
export class User {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  email: string;

  @Column()
  password: string;

  @Column()
  name: string;

  @Column()
  phone: string;

  @Column({
    // type:'enum',
    // eunm: IsAdmin,
    // default: IsAdmin.ADMIN,
  })
  roles: IsAdmin;
}
