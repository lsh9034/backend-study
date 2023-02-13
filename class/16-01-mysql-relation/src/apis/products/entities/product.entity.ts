import {
  Column,
  Entity,
  JoinColumn,
  JoinTable,
  ManyToOne,
  OneToOne,
  ManyToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { ProductSaleslocation } from 'src/apis/productSaleslocation/entities/productSaleslocation.entity';
import { ProductCategory } from 'src/apis/productCategory/entity/productCategory.entity';
import { User } from 'src/apis/users/entities/user.entity';
import { ProductTag } from 'src/apis/productTags/entities/productTag.entity';
@Entity()
export class Product {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column()
  description: string;

  @Column()
  price: number;

  @Column()
  isSoldout: boolean;

  @JoinColumn()
  @OneToOne(() => ProductSaleslocation)
  productSaleslocation: ProductSaleslocation;

  @ManyToOne(() => ProductCategory)
  productCategory: ProductCategory;

  @ManyToOne(() => User)
  user: User;

  @JoinTable({
    name: 'middle table',
  })
  @ManyToMany(() => ProductTag, (productTag) => productTag.products)
  productTags: ProductTag[];
}
