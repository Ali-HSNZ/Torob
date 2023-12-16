import { type FC } from 'react'

import { HomeLayout } from '@partials/layouts/HomeLayout'

import { type ILayoutProps } from '@core/types/layouts/layouts.type'

const RootLayout: FC<ILayoutProps> = ({ children }) => {
    return <HomeLayout>{children}</HomeLayout>
}

export default RootLayout
