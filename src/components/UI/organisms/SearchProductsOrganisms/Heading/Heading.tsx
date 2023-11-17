import { type FC } from 'react'

import { CustomBreadcrumbs } from '@molecules/Breadcrumbs'

import { SortActions, STATIC_BREADCRUMBS_LIST } from './resources'

const SearchProductsOrganismsHeading: FC = () => {
    return (
        <main>
            <div className='w-full mt-4 flex justify-between'>
                <CustomBreadcrumbs separator='/' breadcrumbsList={STATIC_BREADCRUMBS_LIST} />
                <SortActions />
            </div>
        </main>
    )
}

export default SearchProductsOrganismsHeading
