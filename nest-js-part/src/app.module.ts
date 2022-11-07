import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { TodoModule } from './todos/todo.module';
//BMBb!5dAUnW_mRD
//hQtzXwyW5KovbVnf
@Module({
  imports: [
    TodoModule,
    MongooseModule.forRoot('mongodb+srv://omar:hQtzXwyW5KovbVnf@cluster0.kigcsq6.mongodb.net/todo?retryWrites=true&w=majority')
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
