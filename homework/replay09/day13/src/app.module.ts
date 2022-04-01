import { Module } from '@nestjs/common';
import { StarbucksModule } from './apis/boards/starbucks.module';
// import { AppController } from './app.controller';
// import { AppService } from './app.service';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { GraphQLModule } from '@nestjs/graphql';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Menu } from './apis/boards/entities/starbucks.entities';

@Module({
  imports: [
    StarbucksModule,
    GraphQLModule.forRoot<ApolloDriverConfig>({ //그래프큐엘과 연결해쥬눈 뷰뷴
      driver: ApolloDriver,
      autoSchemaFile: 'src/commons/graphql/schema.gql',
    }),
    TypeOrmModule.forRoot({  //앱모듈에서 모든걸 합친다// db랑 연결해주는 부분
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '1234',
      database: 'test',
      entities: [Menu], //schema 들어가는 곳(mongodb 의 모델 부분 )//entities로부터 불러와야함
      synchronize: true, //db랑 연결 만들어 줌
      logging: true, //로그를 찍어준다
    }),
  ], //Apollo~ => 타입 설정해주기

  // controllers: [AppController],
  // providers: [AppService]
})
export class AppModule {}
