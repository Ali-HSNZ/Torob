import { type FC } from 'react'
import { ActionIcon } from '@mantine/core'
import { IconColumns2 } from '@tabler/icons-react'
import { IconLayoutRows } from '@tabler/icons-react'

import { type ISearchProductsListViewProps } from './resources'

const SearchProductsListView: FC<ISearchProductsListViewProps> = ({ setQuery }) => {
    // Switch product list view
    const viewQueryParams = (view: 'row' | 'column'): void => {
        setQuery({ view })
    }

    return (
        <div className='flex gap-x-2'>
            {/* Row button */}
            <ActionIcon
                variant='transparent'
                color='dark'
                className='text-gray-600'
                onClick={() => viewQueryParams('row')}
            >
                <IconLayoutRows size={28} />
            </ActionIcon>

            {/* Column button */}
            <ActionIcon
                variant='transparent'
                color='dark'
                className='text-gray-600'
                onClick={() => viewQueryParams('column')}
            >
                <IconColumns2 />
            </ActionIcon>
        </div>
    )
}

export default SearchProductsListView
