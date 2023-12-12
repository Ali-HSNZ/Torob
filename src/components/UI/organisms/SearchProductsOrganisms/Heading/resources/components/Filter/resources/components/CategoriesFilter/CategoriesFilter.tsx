import React, { type FC } from 'react'
import { ActionIcon } from '@mantine/core'
import { useQueryParam } from 'use-query-params'
import { IconChevronLeft } from '@tabler/icons-react'

import { CButton } from '@atoms/Button'

import { textToSlug } from '@core/utils/common/textToSlug'

import { type ICategoriesFilterProps, type IRenderCategoryProps, STATIC_CATEGORIES } from './resources'

const renderCategory: FC<IRenderCategoryProps> = ({ category, query, setQuery }) => {
    return (
        <section key={category.id} className='pl-6'>
            <CButton
                onClick={() => setQuery(textToSlug(category.title))}
                variant='transparent'
                className={`px-0 truncate text-sm font-medium capitalize ${
                    query === textToSlug(category.title) ? 'text-red-600' : 'text-gray-700'
                }`}
            >
                {category.title}
            </CButton>

            {category.sub.length > 0 &&
                category.sub.map((subCategory) => renderCategory({ category: subCategory, setQuery, query }))}
        </section>
    )
}

const SidebarCategory: FC<ICategoriesFilterProps> = ({ setStep }) => {
    const [query, setQuery] = useQueryParam<string | null>('category')

    // Remove query param
    const removeQueryParams = () => {
        setQuery(null)
    }

    return (
        <section>
            <div className='p-4 sticky flex justify-between  top-0 z-10 bg-white'>
                <ActionIcon
                    onClick={() => setStep(0)}
                    variant='transparent'
                    className='flex gap-x-1'
                    color='dark'
                    size='auto'
                >
                    <IconChevronLeft size={20} />
                    <p className='font-medium'>Categories</p>
                </ActionIcon>

                {query && (
                    <ActionIcon
                        onClick={removeQueryParams}
                        variant='transparent'
                        className='flex gap-x-1'
                        color='red'
                        size='auto'
                    >
                        <p className='font-medium text-sm'>Remove</p>
                    </ActionIcon>
                )}
            </div>

            {STATIC_CATEGORIES.map((category) => renderCategory({ category, setQuery, query }))}
        </section>
    )
}

export default SidebarCategory
