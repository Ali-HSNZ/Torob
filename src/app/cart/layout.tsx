import { type FC } from 'react'

import { CartLayout } from '@partials/layouts/CartLayout'

import { type ILayoutProps } from '@core/types/layouts/layouts.type'

const layout: FC<ILayoutProps> = ({ children }) => {
    return <CartLayout>{children}</CartLayout>
}

export default layout
