import { type FC } from 'react'
import { ColorSchemeScript } from '@mantine/core'

import { quickSandFonts } from '@core/constants/fonts/quickSand'
import { type ILayoutProps } from '@core/types/layouts/layouts.type'

import '@styles/globals.css'

import { Providers } from './Providers'

const RootLayout: FC<ILayoutProps> = ({ children }) => {
    return (
        <html>
            <head>
                <title>Torob</title>
                <ColorSchemeScript />
            </head>
            <body className={`${quickSandFonts.variable} font-sans bg-gray-50`}>
                <Providers>{children}</Providers>
            </body>
        </html>
    )
}

export default RootLayout
