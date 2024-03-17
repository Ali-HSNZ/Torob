import { type FC } from 'react'

import { ProductComments } from '@organisms/ProductDetailOrganisms/Comments'
import { ProductDetail } from '@organisms/ProductDetailOrganisms/Detail'
import { ProductProperties } from '@organisms/ProductDetailOrganisms/Properties'
import { ProductDetailSidebar } from '@organisms/ProductDetailOrganisms/Sidebar'
import { ProductDetailStores } from '@organisms/ProductDetailOrganisms/Stores'

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
