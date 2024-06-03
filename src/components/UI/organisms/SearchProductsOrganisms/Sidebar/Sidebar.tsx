import { IconChevronRight } from '@tabler/icons-react'

import { CNavLink } from '@atoms/NavLink'

import { SidebarAvailable, SidebarBrands, SidebarCategory, SidebarPrice } from './resources'

const SearchProductsSidebar = () => {
    return (
        <section className='w-96 h-screen  overflow-y-auto sticky pb-4 top-0 space-y-2  bg-white'>
            {/* Brand */}
            <CNavLink
                defaultOpened
                py={16}
                classNames={{ label: 'font-medium text-sm text-[#303030]' }}
                childrenOffset={0}
                label='Brand'
                rightSection={<IconChevronRight size={23} color='#303030' stroke={1.5} />}
            >
                <SidebarBrands />
            </CNavLink>

            <hr className='border-gray-100' />

            {/* Category */}
            <CNavLink
                defaultOpened
                childrenOffset={16}
                py={16}
                classNames={{ label: 'font-medium text-sm text-[#303030]' }}
                label='More detailed categories'
                rightSection={<IconChevronRight size={23} color='#575757' stroke={1.5} />}
            >
                <SidebarCategory />
            </CNavLink>

            <hr className='border-gray-100' />

            {/* Price */}
            <CNavLink
                py={16}
                classNames={{ label: 'font-medium text-sm text-[#303030]' }}
                label='Price'
                childrenOffset={0}
                rightSection={<IconChevronRight size={23} color='#575757' stroke={1.5} />}
            >
                <SidebarPrice />
            </CNavLink>

            <hr className='border-gray-100' />

            {/* Available */}
            <CNavLink
                childrenOffset={0}
                py={16}
                classNames={{ label: 'font-medium text-sm text-[#303030]' }}
                label='Available'
                rightSection={<IconChevronRight size={23} color='#575757' stroke={1.5} />}
            >
                <SidebarAvailable />
            </CNavLink>
        </section>
    )
}

export default SearchProductsSidebar
