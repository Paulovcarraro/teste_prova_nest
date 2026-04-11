import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, Like } from 'typeorm';
import { Livro } from './livro.entity';

@Injectable()
export class LivroService {
  constructor(
    @InjectRepository(Livro)
    private repo: Repository<Livro>,
  ) {}

  create(data: Partial<Livro>) {
    const livro = this.repo.create(data);
    return this.repo.save(livro);
  }

  findAll() {
    return this.repo.find();
  }

  findByTituloOuAutor(busca: string) {
    return this.repo.find({
      where: [
        { titulo: Like(`%${busca}%`) },
        { autor: Like(`%${busca}%`) },
      ],
    });
  }

  remove(id: number) {
    return this.repo.delete(id);
  }
}