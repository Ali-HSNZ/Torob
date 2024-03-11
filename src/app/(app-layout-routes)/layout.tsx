import { type FC } from 'react'

import { AppLayout } from '@partials/layouts/AppLayout'

import { type ILayoutProps } from '@core/types/layouts/layouts.type'

const layout: FC<ILayoutProps> = ({ children }) => {
    return <AppLayout>{children}</AppLayout>
}

export default layout
