import { type FC } from 'react'

import { CustomBreadcrumbs } from '@molecules/Breadcrumbs'

import { SortActions, STATIC_BREADCRUMBS_LIST } from './resources'

const SearchProductsOrganismsHeading: FC = () => {
    return (
        <section className='w-full flex items-center gap-x-4'>
            <div className='w-full overflow-x-auto pb-4 box-border mt-4'>
                <CustomBreadcrumbs classNames={{ separator: ' text-xs' }} breadcrumbsList={STATIC_BREADCRUMBS_LIST} />
            </div>

            <SortActions />
        </section>
    )
}

export default SearchProductsOrganismsHeading
