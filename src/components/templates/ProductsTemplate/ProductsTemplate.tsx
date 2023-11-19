import { type FC } from 'react'

import { SearchProductsOrganismsHeading } from '@organisms/SearchProductsOrganisms/Heading'
import { SearchProductsOrganismsSidebar } from '@organisms/SearchProductsOrganisms/Sidebar'

const ProductsTemplate: FC = () => {
    return (
        <main>
            <section className='w-full grid gap-x-4 grid-cols-12 pr-4 '>
                {/* Sidebar */}
                <div className='col-span-3 hidden lg:block'>
                    <SearchProductsOrganismsSidebar />
                </div>

                <section className={`w-full mt-3  pl-4 lg:pl-0 col-span-full lg:col-span-9  flex flex-col`}>
                    {/* Heading */}
                    <SearchProductsOrganismsHeading />
                </section>
            </section>
        </main>
    )
}

export default ProductsTemplate
