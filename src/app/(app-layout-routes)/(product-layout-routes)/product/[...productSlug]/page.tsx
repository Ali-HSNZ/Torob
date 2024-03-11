import { type FC } from 'react'

import { ProductDetailTemplate } from '@templates/ProductDetailTemplate'

const page: FC<{ params: { productSlug: string } }> = ({ params }) => {
    return <ProductDetailTemplate productCode={params?.productSlug[0]} />
}

export default page
