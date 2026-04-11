import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LivroModule } from './livro/livro.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3307, 
      username: 'root',
      password: '',
      database: 'biblioteca',
      autoLoadEntities: true,
      synchronize: true,
    }),
    LivroModule,
  ],
})
export class AppModule {}