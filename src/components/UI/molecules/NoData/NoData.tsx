import { type FC } from 'react'
import { IconDatabaseX } from '@tabler/icons-react'

import { type INoDataProps } from './resources'

const NoData: FC<INoDataProps> = ({ className, ...rest }) => {
    return (
        <div
            className={`flex flex-col justify-center items-center gap-4 p-8 bg-white rounded-xl border ${className}`}
            {...rest}
        >
            <IconDatabaseX size={'2.5rem'} className='text-gray-500' />
            <p className='font-medium text-sm text-center text-gray-800'>
                It looks like there&apos;s no data to display at the moment, Please check back later or try a different
                search.
            </p>
        </div>
    )
}

export default NoData
