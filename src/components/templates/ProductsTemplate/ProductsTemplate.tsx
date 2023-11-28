import { type FC } from 'react'

import { SearchProductsHeading } from '@organisms/SearchProductsOrganisms/Heading'
import { SearchProductsSidebar } from '@organisms/SearchProductsOrganisms/Sidebar'

const ProductsTemplate: FC = () => {
    return (
        <main className='w-full h-screen overflow-hidden flex gap-x-4 pl-4 lg:pl-0 pr-4 bg-[#F2F3F7]'>
            {/* Sidebar */}
            <div className='flex-shrink-0 hidden lg:block'>
                <SearchProductsSidebar />
            </div>

            {/* Heading */}
            <section className='flex-1 mt-3 overflow-x-auto'>
                <SearchProductsHeading />
            </section>
        </main>
    )
}

export default ProductsTemplate
