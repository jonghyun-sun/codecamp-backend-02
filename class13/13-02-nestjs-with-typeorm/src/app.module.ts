import { Module } from '@nestjs/common';
import { BoardModule } from './apis/boards/boards.module';
// import { AppController } from './app.controller';
// import { AppService } from './app.service';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { GraphQLModule } from '@nestjs/graphql';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Board } from './apis/boards/entities/board.entities';

@Module({
  imports: [
    BoardModule,
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: 'src/commons/graphql/schema.gql', //
    }),
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'sun981028!',
      database: 'myproject02',
      entities: [Board],
      synchronize: true,
      logging: true, //로그를 찍어준다
    }),
  ], //Apollo~ => 타입 설정해주기

  // controllers: [AppController],
  // providers: [AppService]
})
export class AppModule {}
