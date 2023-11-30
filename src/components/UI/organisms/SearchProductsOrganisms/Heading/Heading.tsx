import { type FC } from 'react'
import { ActionIcon } from '@mantine/core'
import { StringParam, useQueryParams } from 'use-query-params'
import { IconColumns2, IconLayoutRows } from '@tabler/icons-react'

import { CustomBreadcrumbs } from '@molecules/Breadcrumbs'

import { SortActions, STATIC_BREADCRUMBS_LIST } from './resources'

const SearchProductsHeading: FC = () => {
    // All url params
    const [query, setQuery] = useQueryParams({
        search: StringParam,
        view: StringParam,
        category: StringParam,
        sort: StringParam,
    })

    // Set breadCrump param
    const setBreadCrumpQueryParams = (categoryName: string) => {
        if (categoryName.toLowerCase() === 'all categories') {
            setQuery({ category: null })
        } else {
            const removedSpaces = categoryName.replace(/\s+/g, '-').toLowerCase()
            setQuery({ category: removedSpaces })
        }
    }

    // Switch product list view
    const viewQueryParams = (view: 'row' | 'column') => {
        setQuery({ view })
    }

    return (
        <section className='w-full'>
            <div className='w-full flex flex-col xl:flex-row items-end gap-y-4 xl:gap-y-0 xl:items-center justify-between gap-x-4'>
                <section className='w-full pb-2 box-border overflow-x-auto'>
                    <CustomBreadcrumbs
                        handleCLick={setBreadCrumpQueryParams}
                        classNames={{ separator: ' text-xs' }}
                        breadcrumbsList={STATIC_BREADCRUMBS_LIST}
                    />
                </section>

                {/* Sort Popup */}
                <SortActions setQuery={setQuery} query={query} />
            </div>

            <div className='w-full flex justify-between mt-6'>
                {/* Num of products in api result */}
                <div>
                    <span className='text-xl font-bold'>Search Result</span>
                    <span className='text-sm font-medium text-gray-600 relative left-0.5 bottom-1.5'>(42)</span>
                </div>

                {/* Switch product list view */}
                <div className='flex gap-x-2'>
                    {/* Row button */}
                    <ActionIcon variant='transparent' color='dark' className='text-gray-600' onClick={() => viewQueryParams('row')}>
                        <IconLayoutRows />
                    </ActionIcon>

                    {/* Column button */}
                    <ActionIcon variant='transparent' color='dark' className='text-gray-600' onClick={() => viewQueryParams('column')}>
                        <IconColumns2 />
                    </ActionIcon>
                </div>
            </div>
        </section>
    )
}

export default SearchProductsHeading
