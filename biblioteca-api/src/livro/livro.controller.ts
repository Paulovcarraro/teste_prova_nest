import { Controller, Get, Post, Body, Delete, Param, Query } from '@nestjs/common';
import { LivroService } from './livro.service';

@Controller('livros')
export class LivroController {
  constructor(private service: LivroService) {}

  @Post()
  create(@Body() body) {
    return this.service.create(body);
  }

  @Get()
  findAll() {
    return this.service.findAll();
  }

  @Get('buscar')
  buscar(@Query('q') q: string) {
    return this.service.findByTituloOuAutor(q);
  }

  @Delete(':id')
  delete(@Param('id') id: number) {
    return this.service.remove(id);
  }
}
