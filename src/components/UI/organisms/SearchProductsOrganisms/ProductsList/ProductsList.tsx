import React from 'react'

import { ProductCard } from '@molecules/ProductCard'

import { STATIC_PRODUCTS } from './resources'

const SearchProductsList = () => {
    return (
        <section className='grid  sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-4 mt-6'>
            {STATIC_PRODUCTS.map((product) => (
                <ProductCard product={product} key={product.id} />
            ))}
        </section>
    )
}

export default SearchProductsList
