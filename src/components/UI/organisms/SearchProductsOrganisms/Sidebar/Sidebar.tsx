import { type FC } from 'react'
import { NavLink } from '@mantine/core'
import { StringParam, useQueryParams } from 'use-query-params'
import { IconChevronRight } from '@tabler/icons-react'

import { SidebarAvailable, SidebarBrands, SidebarCategory, SidebarPrice } from './resources'

const SearchProductsSidebar: FC = () => {
    const [, setQuery] = useQueryParams({
        brand: StringParam,
    })

    return (
        <section className='h-full space-y-2 w-80 bg-white'>
            {/* Brand */}
            <NavLink
                defaultOpened={true}
                py={16}
                classNames={{ label: 'font-medium text-sm' }}
                childrenOffset={0}
                label='Brand'
                rightSection={<IconChevronRight size={20} stroke={1.5} />}
            >
                <SidebarBrands setQuery={setQuery} />
            </NavLink>

            <hr className='border-gray-100' />

            {/* Category */}
            <NavLink
                childrenOffset={0}
                py={16}
                classNames={{ label: 'font-medium text-sm' }}
                label='Suggested categories'
                rightSection={<IconChevronRight size={20} stroke={1.5} />}
            >
                <SidebarCategory />
            </NavLink>

            <hr className='border-gray-100' />

            {/* Price */}
            <NavLink
                py={16}
                classNames={{ label: 'font-medium text-sm' }}
                label='Price'
                childrenOffset={0}
                rightSection={<IconChevronRight size={20} stroke={1.5} />}
            >
                <SidebarPrice />
            </NavLink>

            <hr className='border-gray-100' />

            {/* Available */}
            <NavLink
                childrenOffset={0}
                py={16}
                classNames={{ label: 'font-medium text-sm' }}
                label='Available'
                rightSection={<IconChevronRight size={20} stroke={1.5} />}
            >
                <SidebarAvailable />
            </NavLink>
        </section>
    )
}

export default SearchProductsSidebar
