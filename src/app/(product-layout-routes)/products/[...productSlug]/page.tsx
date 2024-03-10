import { type FC } from 'react'

import { ProductDetailTemplate } from '@templates/ProductDetailTemplate'

const productSlug: FC<{ params: { productSlug: string } }> = ({ params }) => {
    return <ProductDetailTemplate productCode={params?.productSlug[0]} />
}

export default productSlug
