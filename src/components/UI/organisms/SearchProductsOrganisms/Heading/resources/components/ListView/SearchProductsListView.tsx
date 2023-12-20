import { type FC } from 'react'
import { IconColumns2 } from '@tabler/icons-react'
import { IconLayoutRows } from '@tabler/icons-react'

import { CActionIcon } from '@atoms/ActionIcon'

import { type ISearchProductsListViewProps } from './resources'

const SearchProductsListView: FC<ISearchProductsListViewProps> = ({ setQuery }) => {
    // Switch product list view
    const viewQueryParams = (view: 'row' | 'column'): void => {
        setQuery({ view })
    }

    return (
        <div className='flex gap-x-2'>
            {/* Row button */}
            <CActionIcon
                variant='transparent'
                color='dark'
                className='text-gray-600'
                onClick={() => viewQueryParams('row')}
            >
                <IconLayoutRows size={28} />
            </CActionIcon>

            {/* Column button */}
            <CActionIcon
                variant='transparent'
                color='dark'
                className='text-gray-600'
                onClick={() => viewQueryParams('column')}
            >
                <IconColumns2 />
            </CActionIcon>
        </div>
    )
}

export default SearchProductsListView
