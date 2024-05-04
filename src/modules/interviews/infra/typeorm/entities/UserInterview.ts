import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  JoinColumn,
  ManyToOne,
} from 'typeorm';
import Interview from './Interview';

@Entity('users_interview')
class UserInterview {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  interview_id: string;

  @ManyToOne(() => Interview)
  @JoinColumn({ name: 'interview_id' })
  interview: Interview;

  @Column()
  name: string;

  @Column()
  status: string;

  @Column()
  feedback: string;

  @Column()
  rating: number;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}

export default UserInterview;
