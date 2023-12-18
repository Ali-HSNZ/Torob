import { type FC } from 'react'

import { ProductDetail, ProductDetailAnalytics, ProductDetailStores } from '@organisms/ProductDetailOrganisms'

const ProductDetailTemplate: FC = () => {
    return (
        <section>
            <div>
                <ProductDetail />
                <ProductDetailAnalytics />
            </div>
            <ProductDetailStores />
        </section>
    )
}

export default ProductDetailTemplate
