import { type FC } from 'react'

import {
    ProductDetail,
    ProductDetailComments,
    ProductDetailDescription,
    ProductDetailPriceChanges,
    ProductDetailProperties,
    ProductDetailSidebar,
    ProductDetailStores,
} from '@organisms/ProductDetailOrganisms'

import { type IProductDetailTemplateProps } from './resources'

const ProductDetailTemplate: FC<IProductDetailTemplateProps> = ({ productCode }) => {
    return (
        <section className='w-full p-4 gap-4 flex flex-col-reverse sm:flex-row justify-between'>
            <div className='w-full flex flex-col'>
                <div className='grid grid-cols-1 xl:grid-cols-12 gap-4'>
                    {/* detail */}
                    <div className='w-full xl:col-span-8'>
                        <ProductDetail productCode={productCode} />
                    </div>

                    {/* price change list */}
                    <div className='w-full grid xl:col-span-4'>
                        <ProductDetailPriceChanges />
                    </div>
                </div>

                {/* description */}
                <ProductDetailDescription productCode={productCode} />

                {/* stores list */}
                <ProductDetailStores productCode={productCode} />

                {/* Properties */}
                <ProductDetailProperties productCode={productCode} />

                {/* Comments */}
                <ProductDetailComments productCode={productCode} />
            </div>

            {/* sidebar */}
            <ProductDetailSidebar />
        </section>
    )
}

export default ProductDetailTemplate
