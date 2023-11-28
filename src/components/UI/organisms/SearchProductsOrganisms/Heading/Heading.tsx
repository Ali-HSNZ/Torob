import { type FC } from 'react'

import { CustomBreadcrumbs } from '@molecules/Breadcrumbs'

import { SortActions, STATIC_BREADCRUMBS_LIST } from './resources'

const SearchProductsHeading: FC = () => {
    return (
        <section className='w-full flex flex-col xl:flex-row items-end gap-y-4 xl:gap-y-0 xl:items-center justify-between gap-x-4'>
            <section className='w-full pb-2 box-border overflow-x-auto'>
                <CustomBreadcrumbs classNames={{ separator: ' text-xs' }} breadcrumbsList={STATIC_BREADCRUMBS_LIST} />
            </section>

            <SortActions />
        </section>
    )
}

export default SearchProductsHeading
