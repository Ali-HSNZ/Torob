import { type FC } from 'react'

import { type ITemplateContainerProps } from './resources'
import { Header } from './resources/components/Header'
import { HeaderWithSearchbar } from './resources/components/HeaderWithSearchbar'

const TemplateContainer: FC<ITemplateContainerProps> = ({ withSearchbar, children }) => {
    if (withSearchbar) {
        return (
            <>
                <HeaderWithSearchbar />
                {children}
            </>
        )
    } else {
        return (
            <>
                <Header />
                {children}
            </>
        )
    }
}

export default TemplateContainer
