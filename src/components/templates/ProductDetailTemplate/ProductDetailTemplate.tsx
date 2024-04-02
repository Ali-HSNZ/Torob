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
            <div className='w-full flex flex-col'>
                <div className='grid grid-cols-1 xl:grid-cols-12 gap-4'>
                    {/* detail */}
                    <div className='w-full xl:col-span-8'>
                        <ProductDetail productCode={productCode} />
                    </div>

                    {/* price change list */}
                    <div className='w-full grid xl:col-span-4'>
                        <ProductPriceChanges />
                    </div>
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
