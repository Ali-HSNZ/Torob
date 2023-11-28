import React, { type FC } from 'react'
import NextAdapterApp from 'next-query-params/app'
import { MantineProvider } from '@mantine/core'
import { QueryParamProvider } from 'use-query-params'
import '@mantine/core/styles.css'

import { ReactQueryProvider } from '@partials/providers/React-query-provider'

import { mantineThemeConfig } from '@core/constants/configs/mantine'
import { type ILayoutProps } from '@core/types/layouts/layouts.type'

const Providers: FC<ILayoutProps> = ({ children }) => {
    return (
        <ReactQueryProvider>
            <QueryParamProvider adapter={NextAdapterApp}>
                <MantineProvider theme={mantineThemeConfig}>{children}</MantineProvider>
            </QueryParamProvider>
        </ReactQueryProvider>
    )
}

export default Providers
