import { type FC } from 'react'

import {
    ProductComments,
    ProductDetail,
    ProductDetailSidebar,
    ProductDetailStores,
    ProductProperties,
} from '@organisms/ProductDetailOrganisms'

import { type IProductDetailTemplateProps } from './resources'

const ProductDetailTemplate: FC<IProductDetailTemplateProps> = ({ productCode }) => {
    return (
        <section className='w-full p-4 gap-x-4 flex justify-between'>
            <div className='w-full flex flex-col gap-y-4 h-auto '>
                {/* detail */}
                <ProductDetail productCode={productCode} />

                {/* stores list */}
                <ProductDetailStores productCode={productCode} />

                {/* Properties */}
                <ProductProperties productCode={productCode} />

                {/* Comments */}
                <ProductComments productCode={productCode} />
            </div>

            {/* sidebar */}
            <ProductDetailSidebar />
        </section>
    )
}

export default ProductDetailTemplate
