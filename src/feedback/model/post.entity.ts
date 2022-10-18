import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('feedback_post')
export class FeedbackPostEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  email: string;

  @Column({ default: '' })
  message: string;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  createdAt: Date;
}
