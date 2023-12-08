import { type FC } from 'react'
import { ActionIcon } from '@mantine/core'
import { IconSortDescending } from '@tabler/icons-react'

import { type ISortActionsProps, SearchProductsMobileSort, STATIC_SORT_LIST } from './resources'

const SortActions: FC<ISortActionsProps> = ({ setQuery, query }) => {
    const currentSort: string = query || STATIC_SORT_LIST[0].label

    const handleSortQueryParam = (value: string): void => {
        setQuery({ sort: value })
    }

    return (
        <>
            {/* Mobile Sort Filter */}
            <SearchProductsMobileSort setQuery={handleSortQueryParam} sort={currentSort} />

            <div className='hidden lg:flex gap-x-2 mt-4 '>
                <div className='text-gray-800 text-sm font-medium flex items-center gap-x-1'>
                    <IconSortDescending size={21} stroke={1.7} />
                    <p>order by: </p>
                </div>

                <div className='flex gap-x-2 '>
                    {STATIC_SORT_LIST.map((sort) => (
                        <ActionIcon
                            key={sort.id}
                            color='dark'
                            className={`text-sm ${currentSort === sort.label ? 'text-red-600' : 'text-gray-600'}`}
                            variant='transparent'
                            size={'auto'}
                            onClick={() => handleSortQueryParam(sort.label)}
                        >
                            {sort.label}
                        </ActionIcon>
                    ))}
                </div>
            </div>
        </>
    )
}

export default SortActions
