import { type FC } from 'react'

import { SearchProductsOrganismsHeading } from '@organisms/SearchProductsOrganisms/Heading'

const ProductsTemplate: FC = () => {
    return (
        <main className='px-4'>
            {/* Heading */}
            <SearchProductsOrganismsHeading />
        </main>
    )
}

export default ProductsTemplate
