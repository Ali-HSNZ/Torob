import { type FC } from 'react'
import { ActionIcon, Breadcrumbs } from '@mantine/core'

import { type IBreadcrumbsProps } from './resources'

const CustomBreadcrumbs: FC<IBreadcrumbsProps> = ({ breadcrumbsList, handleCLick, ...res }) => {
    const breadcrumbItems = breadcrumbsList.map((item, index) => (
        <ActionIcon
            size={'auto'}
            key={index}
            color='dark'
            variant='transparent'
            className='text-sm'
            onClick={() => handleCLick(item.title)}
        >
            {item.title}
        </ActionIcon>
    ))

    return <Breadcrumbs {...res}>{breadcrumbItems}</Breadcrumbs>
}

export default CustomBreadcrumbs
