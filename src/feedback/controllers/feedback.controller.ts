import { Body, Controller, Get, Post } from '@nestjs/common';
import { Observable } from 'rxjs';
import { FeedbackPost } from '../model/post.interface';
import { FeedbackService } from './feedback.service';

@Controller('feedback')
export class FeedbackController {
  constructor(private feedbackService: FeedbackService) {}

  @Post()
  create(@Body() post: FeedbackPost): Observable<FeedbackPost> {
    return this.feedbackService.createPost(post);
  }

  @Get()
  getAll(): Observable<FeedbackPost[]> {
    return this.feedbackService.getAllPosts();
  }
}
