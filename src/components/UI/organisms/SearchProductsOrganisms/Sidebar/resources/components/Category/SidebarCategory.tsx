import React, { type FC } from 'react'

import { CButton } from '@atoms/Button'

import { type TCriticalAny } from '@core/types/critical-any'

import { type ISidebarCategoryProps, STATIC_CATEGORIES, type TSidebarCategoriesType } from './resources'

const renderCategory = (category: TSidebarCategoriesType, setQuery: TCriticalAny) => {
    const categoryTitle = category.title.replace(/\s+/g, '-')

    const handleClick = () => {
        setQuery({ category: categoryTitle })
    }

    return (
        <section key={category.id} className='pl-6'>
            <CButton
                onClick={handleClick}
                variant='transparent'
                className='px-0 truncate  text-sm text-gray-700 font-medium    capitalize'
            >
                {category.title}
            </CButton>

            {category?.sub?.length > 0 && category.sub.map((subCategory) => renderCategory(subCategory, setQuery))}
        </section>
    )
}

const SidebarCategory: FC<ISidebarCategoryProps> = ({ setQuery }) => {
    return STATIC_CATEGORIES.map((category) => renderCategory(category, setQuery))
}

export default SidebarCategory
