import { Module } from '@nestjs/common';
import { FeedbackService } from './controllers/feedback.service';
import { FeedbackController } from './controllers/feedback.controller';
import { FeedbackPostEntity } from './model/post.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([FeedbackPostEntity])],
  providers: [FeedbackService],
  controllers: [FeedbackController],
})
export class FeedbackModule {}
