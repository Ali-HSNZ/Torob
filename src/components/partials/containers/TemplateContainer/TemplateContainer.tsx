import { type FC } from 'react'

import { type ITemplateContainerProps } from './resources'
import { Header } from './resources/components/Header'
import { HeaderWithSearchbar } from './resources/components/HeaderWithSearchbar'

const TemplateContainer: FC<ITemplateContainerProps> = ({ withSearchbar, children }) => {
    const HeaderComponent = withSearchbar ? HeaderWithSearchbar : Header

    return (
        <>
            <HeaderComponent />
            {children}
        </>
    )
}

export default TemplateContainer
