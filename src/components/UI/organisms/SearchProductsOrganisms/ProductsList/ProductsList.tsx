import React, { useMemo } from 'react'
import { useQueryParam } from 'use-query-params'

import { ColumnProductCard } from '@molecules/ColumnProductCard'
import { RowProductCard } from '@molecules/RowProductCard'

import { STATIC_PRODUCTS_DATA } from '@core/constants/data/constants/products'

const SearchProductsList = () => {
    // url param
    const [view] = useQueryParam<string>('view')

    const listView = useMemo(() => {
        const validViews = ['row', 'column']

        return validViews.includes(view) ? view : 'column'
    }, [view])

    if (listView === 'row') {
        return (
            <section className='grid md:grid-cols-2  gap-4 mt-6'>
                {STATIC_PRODUCTS_DATA.map((product) => (
                    <RowProductCard product={product} key={product.id} />
                ))}
            </section>
        )
    }
    return (
        <section className='grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-4 mt-6'>
            {STATIC_PRODUCTS_DATA.map((product) => (
                <ColumnProductCard product={product} key={product.id} />
            ))}
        </section>
    )
}

export default SearchProductsList
