import { Module } from '@nestjs/common';
import { BoardModule } from './apis/boards/boards.module';
// import { AppController } from './app.controller';
// import { AppService } from './app.service';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { GraphQLModule } from '@nestjs/graphql';

@Module({
  imports: [
    BoardModule,
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: 'src/commons/graphql/schema.gql', //
    }),
  ], //Apollo~ => 타입 설정해주기
  // controllers: [AppController],
  // providers: [AppService],
})
export class AppModule {}
