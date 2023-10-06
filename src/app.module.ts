import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './modules/users/users.module';
import { MysqlModule } from './config/mysql/mysql.module';
import {SessionModule} from 'nestjs-session';

@Module({
  imports: [
    UsersModule,
    MysqlModule,
    SessionModule.forRoot({
      session: {
        secret: process.env.SESSION_SECRET,
        resave: false,
        saveUninitialized: false,
      },
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
