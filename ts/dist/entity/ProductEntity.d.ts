import { MakeupEntityBase } from '../MakeupEntityBase';
import type { MakeupSDK } from '../MakeupSDK';
import type { Control } from '../types';
import type { Product, ProductListMatch } from '../MakeupTypes';
declare class ProductEntity extends MakeupEntityBase<Product> {
    constructor(client: MakeupSDK, entopts: any);
    make(this: ProductEntity): ProductEntity;
    list(this: any, reqmatch?: ProductListMatch, ctrl?: Control): Promise<ProductEntity[]>;
}
export { ProductEntity };
