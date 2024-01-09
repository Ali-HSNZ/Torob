import { type FC } from 'react'

import {
    ProductDetail,
    ProductDetailSidebar,
    ProductDetailStores,
    ProductProperties,
} from '@organisms/ProductDetailOrganisms'

const ProductDetailTemplate: FC = () => {
    return (
        <section className='w-full p-4 gap-x-4 flex justify-between'>
            <div className='w-full flex flex-col gap-y-4 h-auto '>
                {/* detail */}
                <ProductDetail />

                {/* stores list */}
                <ProductDetailStores />

                {/* Properties */}
                <ProductProperties />
            </div>

            {/* sidebar */}
            <ProductDetailSidebar />
        </section>
    )
}

export default ProductDetailTemplate
