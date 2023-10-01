import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './modules/users/users.module';
import { MysqlModule } from './config/mysql/mysql.module';

@Module({
  imports: [UsersModule, MysqlModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
