import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Livro {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  titulo: string;

  @Column()
  autor: string;

  @Column({ type: 'date' })
  ano: Date;

  @Column()
  editora: string;

  @Column()
  isbn: string;
}