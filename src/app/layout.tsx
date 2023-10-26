import { type FC } from 'react'
import { type Metadata } from 'next'
import { ColorSchemeScript, MantineProvider } from '@mantine/core'
import '@mantine/core/styles.css'

import { mantineThemeConfig } from '@core/constants/configs/mantine'

import '@styles/globals.css'
export const metadata: Metadata = {
    title: 'Torob',
}

const RootLayout: FC<{ children: React.ReactNode }> = ({ children }) => {
    return (
        <html>
            <head>
                <ColorSchemeScript />
            </head>
            <body>
                <MantineProvider theme={mantineThemeConfig}>{children}</MantineProvider>
            </body>
        </html>
    )
}

export default RootLayout
