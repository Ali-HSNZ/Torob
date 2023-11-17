import { type FC } from 'react'
import Link from 'next/link'
import { ActionIcon, Breadcrumbs } from '@mantine/core'

import { type IBreadcrumbsProps } from './resources'

const CustomBreadcrumbs: FC<IBreadcrumbsProps> = ({ breadcrumbsList, ...res }) => {
    const breadcrumbItems = breadcrumbsList.map((item, index) => (
        <ActionIcon
            size={'auto'}
            key={index}
            component={Link}
            href={item.href}
            color='dark'
            variant='transparent'
            className='text-sm'
        >
            {item.title}
        </ActionIcon>
    ))

    return <Breadcrumbs {...res}>{breadcrumbItems}</Breadcrumbs>
}

export default CustomBreadcrumbs
