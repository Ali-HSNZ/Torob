import { SearchProductsHeading } from '@organisms/SearchProductsOrganisms/Heading'
import { SearchProductsList } from '@organisms/SearchProductsOrganisms/ProductsList'
import { SearchProductsSidebar } from '@organisms/SearchProductsOrganisms/Sidebar'

const ProductsTemplate = () => {
    return (
        <main className='w-full h-auto flex gap-x-4 pl-4 lg:pl-0 pr-4'>
            {/* Sidebar */}
            <div className='flex-shrink-0 hidden lg:block'>
                <SearchProductsSidebar />
            </div>

            {/* Heading */}
            <section className='flex-1 py-4 overflow-x-auto'>
                <SearchProductsHeading />
                <SearchProductsList />
            </section>
        </main>
    )
}

export default ProductsTemplate
