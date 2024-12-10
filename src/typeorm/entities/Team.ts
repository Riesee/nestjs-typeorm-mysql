import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'user_teams' })
export class Team {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  teamName: string;

  @Column()
  lastScore: number;

  @Column()
  teamLeader: string;
}
