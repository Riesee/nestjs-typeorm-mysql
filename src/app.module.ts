import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './typeorm/entities/User';
import { UsersModule } from './users/users.module';
import { Profile } from './typeorm/entities/Profile';
import { Team } from './typeorm/entities/Team';
import { Post } from './typeorm/entities/Post';

@Module({
  imports: [TypeOrmModule.forRoot({
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'testuser',
    password: 'Leptop.44',
    database: 'nestjs_mysql',
    entities: [User, Profile, Team, Post],
    synchronize: true,
    
  }), UsersModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
