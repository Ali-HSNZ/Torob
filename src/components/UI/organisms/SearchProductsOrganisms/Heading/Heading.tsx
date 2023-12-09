import { type FC } from 'react'
import { StringParam, useQueryParams } from 'use-query-params'

import { CustomBreadcrumbs } from '@molecules/Breadcrumbs'

import { textToSlug } from '@core/utils/common/textToSlug'

import { FilterDrawer, SearchProductsListView, SortActions, STATIC_BREADCRUMBS_LIST } from './resources'

const SearchProductsHeading: FC = () => {
    const [query, setQuery] = useQueryParams({
        search: StringParam,
        view: StringParam,
        category: StringParam,
        sort: StringParam,
    })

    // Set breadCrump query param
    const setBreadCrumpQueryParams = (categoryName: string): void => {
        if (categoryName.toLowerCase() === 'all categories') {
            setQuery({ category: null })
        } else {
            setQuery({ category: textToSlug(categoryName) })
        }
    }

    return (
        <section className='w-full'>
            <div className='w-full flex flex-col  '>
                <section className='w-full pb-2 box-border overflow-x-auto'>
                    <CustomBreadcrumbs
                        handleCLick={setBreadCrumpQueryParams}
                        classNames={{ separator: ' text-xs' }}
                        breadcrumbsList={STATIC_BREADCRUMBS_LIST}
                    />
                </section>

                <hr />

                <div className='flex mt-4 items-center gap-x-4'>
                    <div className='lg:hidden'>
                        <FilterDrawer />
                    </div>
                    <SortActions query={query.sort} setQuery={setQuery} />
                </div>
            </div>

            <div className='w-full flex justify-between mt-6'>
                {/* Num of products in api result */}
                <div>
                    <span className='text-xl font-bold'>Search Result</span>
                    <span className='text-sm font-medium text-gray-600 relative left-0.5 bottom-1.5'>(42)</span>
                </div>

                {/* Switch product list view */}
                <SearchProductsListView setQuery={setQuery} />
            </div>
        </section>
    )
}

export default SearchProductsHeading
