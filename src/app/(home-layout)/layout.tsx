import { type FC } from 'react'

import { SHomeLayout } from '@partials/layouts/SHomeLayout'

import { type ILayoutProps } from '@core/types/layouts/layouts.type'

const RootLayout: FC<ILayoutProps> = ({ children }) => {
    return <SHomeLayout>{children}</SHomeLayout>
}

export default RootLayout
