import{Column, Entity, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToOne, PrimaryGeneratedColumn} from "typeorm"
import { ProductSaleslocation } from "src/apis/productsSalesocation/productSaleslocation.entity";
import { ProductTag } from "src/apis/productsTag/entities/productTag.entity";
import { ProductCategory} from 'src/apis/productsCategory/productCategory.entity'
import { User } from "src/apis/users/entities/user.entity";


@Entity()//엔티티라는 함수 안에 밑에 거 들어가있음
export class Product {
    @PrimaryGeneratedColumn("uuid")//자동으로 pk만들어줌// uuid => 유니크한 중복되지 않은걸로 만들어줘
    id: string

    @Column()/*type 쓰면 됨*/
    name: string

    @Column()
    description:string;

    @Column()
    price:number;

    @Column()
    isSoldout:boolean
    
    @JoinColumn()// 1대1 맵핑이면 써줘야 한다//기준이 있는 곳에 join컬럼을 둔다
    @OneToOne(() => ProductSaleslocation); //1대1 맵핑되는 컬럼이야
    productSaleslocation: ProductSaleslocation;

    @ManyToOne(() => ProductCategory) //다대일 이다 => 지금 상품 카테고리이니까 //onetomany는 존재하지 않는다(manytoone이 디폴트값)
    productCategory:ProductCategory
    
    @ManyToOne(() => User)
    user: User

    @JoinTable()
    @ManyToMany(()=> ProductTag, (productTags) => productTags.products) //프로덕트 테그안에서 내가 누구인가를 선택하는거)
    productTags: ProductTag[]
}