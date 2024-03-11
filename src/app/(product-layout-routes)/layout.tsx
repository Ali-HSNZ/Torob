import { type FC } from 'react'

import { SearchProductsLayout } from '@partials/layouts/SearchProductsLayout'

import { type ILayoutProps } from '@core/types/layouts/layouts.type'

const layout: FC<ILayoutProps> = ({ children }) => {
    return <SearchProductsLayout>{children}</SearchProductsLayout>
}

export default layout
