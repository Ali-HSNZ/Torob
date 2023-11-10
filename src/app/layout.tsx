import { type FC } from 'react'
import { type Metadata } from 'next'
import { ColorSchemeScript, MantineProvider } from '@mantine/core'
import '@mantine/core/styles.css'

import { ReactQueryProvider } from '@partials/providers/React-query-provider'

import { mantineThemeConfig } from '@core/constants/configs/mantine'
import { quickSandFonts } from '@core/constants/fonts/quickSand'

import '@styles/globals.css'

export const metadata: Metadata = {
    title: 'Torob',
}

const RootLayout: FC<{ children: React.ReactNode }> = ({ children }) => {
    return (
        <html>
            <head>
                {/* Mantine Color Scheme Script */}
                <ColorSchemeScript />
            </head>
            <body className={`${quickSandFonts.variable} font-sans`}>
                <ReactQueryProvider>
                    <MantineProvider theme={mantineThemeConfig}>{children}</MantineProvider>
                </ReactQueryProvider>
            </body>
        </html>
    )
}

export default RootLayout
