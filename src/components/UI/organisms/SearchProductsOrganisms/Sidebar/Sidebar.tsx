import { type FC } from 'react'
import { NavLink } from '@mantine/core'
import { IconChevronRight } from '@tabler/icons-react'

import { SidebarAvailable, SidebarBrands, SidebarCategory, SidebarPrice } from './resources'

const SearchProductsSidebar: FC = () => {
    return (
        <section className='w-96 h-screen  overflow-y-auto sticky pb-4 top-0 space-y-2  bg-white'>
            {/* Brand */}
            <NavLink
                defaultOpened
                py={16}
                classNames={{ label: 'font-medium text-sm text-[#303030]' }}
                childrenOffset={0}
                label='Brand'
                rightSection={<IconChevronRight size={23} color='#303030' stroke={1.5} />}
            >
                <SidebarBrands />
            </NavLink>

            <hr className='border-gray-100' />

            {/* Category */}
            <NavLink
                defaultOpened
                childrenOffset={16}
                py={16}
                classNames={{ label: 'font-medium text-sm text-[#303030]' }}
                label='More detailed categories'
                rightSection={<IconChevronRight size={23} color='#575757' stroke={1.5} />}
            >
                <SidebarCategory />
            </NavLink>

            <hr className='border-gray-100' />

            {/* Price */}
            <NavLink
                py={16}
                classNames={{ label: 'font-medium text-sm text-[#303030]' }}
                label='Price'
                childrenOffset={0}
                rightSection={<IconChevronRight size={23} color='#575757' stroke={1.5} />}
            >
                <SidebarPrice />
            </NavLink>

            <hr className='border-gray-100' />

            {/* Available */}
            <NavLink
                childrenOffset={0}
                py={16}
                classNames={{ label: 'font-medium text-sm text-[#303030]' }}
                label='Available'
                rightSection={<IconChevronRight size={23} color='#575757' stroke={1.5} />}
            >
                <SidebarAvailable />
            </NavLink>
        </section>
    )
}

export default SearchProductsSidebar
