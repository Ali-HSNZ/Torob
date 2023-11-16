import { type FC } from 'react'

import { TemplateContainer } from '@partials/containers/TemplateContainer'

import { type ILayoutProps } from '@core/types/layouts/layouts.type'

const SearchProductsLayout: FC<ILayoutProps> = ({ children }) => {
    return <TemplateContainer withSearchbar>{children}</TemplateContainer>
}

export default SearchProductsLayout
