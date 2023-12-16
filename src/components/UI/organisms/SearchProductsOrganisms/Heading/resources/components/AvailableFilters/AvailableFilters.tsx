import { type FC } from 'react'
import { ActionIcon } from '@mantine/core'
import { StringParam, useQueryParams } from 'use-query-params'
import { IconX } from '@tabler/icons-react'

import { slugToText } from '@core/utils/common/slugToText'

const AvailableFilters: FC = () => {
    const [{ available, brand, max, min, category }, setQuery] = useQueryParams({
        min: StringParam,
        max: StringParam,
        brand: StringParam,
        available: StringParam,
        category: StringParam,
    })

    // for render this components
    const isAvailableFilter = brand || available || (min && max) || category

    const removeBrandQueryParam = () => {
        setQuery({
            brand: null,
        })
    }
    const removeAvailableQueryParam = () => {
        setQuery({
            available: null,
        })
    }
    const removeCategoryQueryParam = () => {
        setQuery({
            category: null,
        })
    }

    const removePriceQueryParam = () => {
        setQuery({
            min: null,
            max: null,
        })
    }

    if (isAvailableFilter) {
        return (
            <section className='flex gap-x-4 overflow-x-auto overflow-y-hidden'>
                {/* price */}
                {min && max && (
                    <ActionIcon
                        p={4}
                        onClick={removePriceQueryParam}
                        size='auto'
                        variant='white'
                        color='dark'
                        className='rounded-full border border-gray-200 shadow-sm'
                    >
                        <div className='flex gap-x-1 px-2 font-medium whitespace-nowrap items-center text-xs'>
                            <IconX stroke={1} size={16} />
                            <span>From</span>
                            <span>{Intl.NumberFormat('en-us').format(Number(min))}</span>
                            <span>to</span>
                            <span>{Intl.NumberFormat('en-us').format(Number(max))}</span>
                        </div>
                    </ActionIcon>
                )}

                {/* Category */}
                {category && (
                    <ActionIcon
                        onClick={removeCategoryQueryParam}
                        p={4}
                        size='auto'
                        variant='white'
                        color='dark'
                        className='rounded-full border border-gray-200 shadow-sm'
                    >
                        <div className='flex  whitespace-nowrap gap-x-1 px-2 items-center text-xs'>
                            <IconX stroke={1} size={16} />
                            <span className='capitalize font-medium'>{slugToText(category)}</span>
                        </div>
                    </ActionIcon>
                )}

                {/* Brand */}
                {brand && (
                    <ActionIcon
                        onClick={removeBrandQueryParam}
                        p={4}
                        size='auto'
                        variant='white'
                        color='dark'
                        className='rounded-full border border-gray-200 shadow-sm'
                    >
                        <div className='flex whitespace-nowrap gap-x-1 px-2 items-center text-xs'>
                            <IconX stroke={1} size={16} />
                            <span className='capitalize font-medium'>{slugToText(brand)}</span>
                        </div>
                    </ActionIcon>
                )}

                {/* Available */}
                {available === 'true' && (
                    <ActionIcon
                        onClick={removeAvailableQueryParam}
                        p={4}
                        size='auto'
                        variant='white'
                        color='dark'
                        className='rounded-full border border-gray-200 shadow-sm'
                    >
                        <div className='flex gap-x-1 px-2 items-center text-xs'>
                            <IconX stroke={1} size={16} />
                            <span className='capitalize font-medium whitespace-nowrap'>Available products</span>
                        </div>
                    </ActionIcon>
                )}
            </section>
        )
    }
}

export default AvailableFilters
