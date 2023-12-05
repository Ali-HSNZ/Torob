import { type FC } from 'react'

import { SearchProductsHeading } from '@organisms/SearchProductsOrganisms/Heading'
import { SearchProductsList } from '@organisms/SearchProductsOrganisms/ProductsList'
import { SearchProductsSidebar } from '@organisms/SearchProductsOrganisms/Sidebar'

const ProductsTemplate: FC = () => {
    return (
        <main className='w-full h-auto flex gap-x-4 pl-4 lg:pl-0 pr-4 bg-[#F2F3F7]'>
            {/* Sidebar */}
            <div className='    '>
                <SearchProductsSidebar />
            </div>

            {/* Heading */}
            <section className='flex-1 mt-3 overflow-x-auto'>
                <SearchProductsHeading />
                <SearchProductsList />
            </section>
        </main>
    )
}

export default ProductsTemplate
