import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { from, Observable } from 'rxjs';
import { Repository } from 'typeorm';
import { FeedbackPostEntity } from '../model/post.entity';
import { FeedbackPost } from '../model/post.interface';

@Injectable()
export class FeedbackService {
  constructor(
    @InjectRepository(FeedbackPostEntity)
    private readonly feedbackPostRepository: Repository<FeedbackPostEntity>,
  ) {}

  createPost(feedbackPost: FeedbackPost): Observable<FeedbackPost> {
    return from(this.feedbackPostRepository.save(feedbackPost));
  }

  getAllPosts(): Observable<FeedbackPost[]> {
    return from(this.feedbackPostRepository.find());
  }
}
