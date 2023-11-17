import { type FC } from 'react'

import { CustomBreadcrumbs } from '@molecules/Breadcrumbs'

import { SortActions, STATIC_BREADCRUMBS_LIST } from './resources'

const SearchProductsOrganismsHeading: FC = () => {
    return (
        <main>
            <div className='w-full mt-4 flex-col gap-y-4 md:gap-y-0 md:flex-row flex  items-center md:justify-between'>
                <div className='w-full flex justify-start overflow-x-auto pb-2 '>
                    <CustomBreadcrumbs breadcrumbsList={STATIC_BREADCRUMBS_LIST} />
                </div>
                <div className='w-full flex justify-end'>
                    <SortActions />
                </div>
            </div>
        </main>
    )
}

export default SearchProductsOrganismsHeading
