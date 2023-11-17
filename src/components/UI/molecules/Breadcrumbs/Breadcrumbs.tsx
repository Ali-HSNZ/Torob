import { type FC } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Breadcrumbs } from '@mantine/core'

import { type IBreadcrumbsProps } from './resources'

const CustomBreadcrumbs: FC<IBreadcrumbsProps> = ({ breadcrumbsList, ...res }) => {
    const pathname = usePathname()

    const breadcrumbItems = breadcrumbsList.map((item, index) => (
        <Link
            key={index}
            href={item.href}
            className={`text-sm ${pathname === item.href ? 'text-gray-800' : 'text-gray-500'}`}
        >
            {item.title}
        </Link>
    ))

    return <Breadcrumbs {...res}>{breadcrumbItems}</Breadcrumbs>
}

export default CustomBreadcrumbs
