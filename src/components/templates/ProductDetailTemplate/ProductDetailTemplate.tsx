import { type FC } from 'react'

import { ProductComments } from '@organisms/ProductDetailOrganisms/Comments'
import { ProductDescription } from '@organisms/ProductDetailOrganisms/Description'
import { ProductDetail } from '@organisms/ProductDetailOrganisms/Detail'
import { ProductPriceChanges } from '@organisms/ProductDetailOrganisms/PriceChanges'
import { ProductProperties } from '@organisms/ProductDetailOrganisms/Properties'
import { ProductDetailSidebar } from '@organisms/ProductDetailOrganisms/Sidebar'
import { ProductDetailStores } from '@organisms/ProductDetailOrganisms/Stores'

import { type IProductDetailTemplateProps } from './resources'

const ProductDetailTemplate: FC<IProductDetailTemplateProps> = ({ productCode }) => {
    return (
        <section className='w-full p-4 gap-x-4 flex justify-between'>
            <div className='w-full flex flex-col gap-y-4 h-auto '>
                <div className='flex flex-col xl:flex-row gap-4'>
                    {/* detail */}
                    <ProductDetail productCode={productCode} />

                    {/* price change list */}
                    <ProductPriceChanges />
                </div>

                {/* description */}
                <ProductDescription productCode={productCode} />

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
