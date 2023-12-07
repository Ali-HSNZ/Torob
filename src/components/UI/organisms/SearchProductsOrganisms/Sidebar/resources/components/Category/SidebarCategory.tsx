import { type FC } from 'react'

import { CButton } from '@atoms/Button'

import { textToSlug } from '@core/utils/common/textToSlug'

import { type IRenderCategoryProps, type ISidebarCategoryProps, STATIC_CATEGORIES } from './resources'

const renderCategory: FC<IRenderCategoryProps> = ({ category, query, setQuery }) => {
    return (
        <section key={category.id} className='pl-6'>
            <CButton
                onClick={() => setQuery({ category: textToSlug(category.title) })}
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

const SidebarCategory: FC<ISidebarCategoryProps> = ({ setQuery, query }) => {
    return STATIC_CATEGORIES.map((category) => renderCategory({ category, setQuery, query }))
}

export default SidebarCategory
