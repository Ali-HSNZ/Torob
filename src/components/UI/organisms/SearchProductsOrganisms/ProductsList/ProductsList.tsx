import React from 'react'

import { ProductCard } from '@molecules/ProductCard'

const SearchProductsList = () => {
    return (
        <section className='grid sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-4 mt-6'>
            {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15].map((index) => (
                <ProductCard key={index} />
            ))}
        </section>
    )
}

export default SearchProductsList
