import { type FC } from 'react'

import { TemplateContainer } from '@partials/containers/TemplateContainer'

import { type ILayoutProps } from '@core/types/layouts/layouts.type'

const HomeLayout: FC<ILayoutProps> = ({ children }) => {
    return <TemplateContainer>{children}</TemplateContainer>
}

export default HomeLayout
