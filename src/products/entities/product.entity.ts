import { Size } from 'src/sizes/entities/size.entity';
import {
  Column,
  Entity,
  JoinTable,
  ManyToMany,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Review } from '../../reviews/entities/review.entity';

@Entity()
export class Product {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  description: string;

  @Column()
  stock: number;

  @OneToMany(() => Review, (review) => review.product)
  reviews: Review[];

  @JoinTable()
  @ManyToMany(() => Size, (size) => size.products)
  sizes: Size[];
}
