import React, { type FC } from 'react'
import { useQueryParam } from 'use-query-params'
import { IconChevronLeft } from '@tabler/icons-react'

import { CActionIcon } from '@atoms/ActionIcon'
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

const SidebarCategory: FC<ICategoriesFilterProps> = ({ setIsMainFilter }) => {
    const [query, setQuery] = useQueryParam<string | null>('category')

    // Remove query param
    const removeQueryParams = () => {
        setQuery(null)
    }

    return (
        <section className='flex flex-col h-screen  '>
            <div className='  flex justify-between p-4  bg-white'>
                <CActionIcon
                    onClick={() => setIsMainFilter(true)}
                    variant='transparent'
                    className='flex gap-x-1'
                    color='dark'
                    size='auto'
                >
                    <IconChevronLeft size={20} />
                    <p className='font-medium'>Categories</p>
                </CActionIcon>

                {query && (
                    <CActionIcon
                        onClick={removeQueryParams}
                        variant='transparent'
                        className='flex gap-x-1'
                        color='red'
                        size='auto'
                    >
                        <p className='font-medium text-sm'>Remove</p>
                    </CActionIcon>
                )}
            </div>
            <div className='overflow-y-auto'>
                {STATIC_CATEGORIES.map((category) => renderCategory({ category, setQuery, query }))}
            </div>
        </section>
    )
}

export default SidebarCategory
