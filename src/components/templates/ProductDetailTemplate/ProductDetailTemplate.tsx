import { type FC } from 'react'

import { ProductDetail, ProductDetailAnalytics, ProductDetailStores } from '@organisms/ProductDetailOrganisms'

const ProductDetailTemplate: FC = () => {
    return (
        <section className='p-4 flex flex-col gap-y-4 h-auto '>
            <div className='flex gap-4 justify-between'>
                <ProductDetail />
                <ProductDetailAnalytics />
            </div>
            <ProductDetailStores />
        </section>
    )
}

export default ProductDetailTemplate
