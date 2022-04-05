import { Column, Entity, ManyToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Product } from 'src/apis/products/entities/product.entity';

@Entity()//엔티티라는 함수 안에 밑에 거 들어가있음
export class ProductTag {
    @PrimaryGeneratedColumn("uuid") //자동으로 pk만들어줌// uuid => 유니크한 중복되지 않은걸로 만들어줘
    id: string;

    @Column()/*type 쓰면 됨*/
    name: string

    @ManyToMany(()=>Product,(products)=> products.productTags);//다대다 설정하는중
    products:Product[]
}