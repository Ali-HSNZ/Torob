import { type FC } from 'react'
import { Breadcrumbs } from '@mantine/core'

import { CActionIcon } from '@atoms/ActionIcon'

import { type IBreadcrumbsProps } from './resources'

const CustomBreadcrumbs: FC<IBreadcrumbsProps> = ({ breadcrumbsList, handleCLick, ...res }) => {
    const breadcrumbItems = breadcrumbsList.map((item, index) => (
        <CActionIcon
            size={'auto'}
            key={index}
            color='dark'
            variant='transparent'
            className='text-xs'
            onClick={() => handleCLick(item.title)}
        >
            {item.title}
        </CActionIcon>
    ))

    return <Breadcrumbs {...res}>{breadcrumbItems}</Breadcrumbs>
}

export default CustomBreadcrumbs
