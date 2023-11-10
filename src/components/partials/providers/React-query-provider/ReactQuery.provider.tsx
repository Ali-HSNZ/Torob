'use client'

import { type FC, useState } from 'react'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

import { type TReactQueryProviderProps } from './resources'

const ReactQueryProvider: FC<TReactQueryProviderProps> = ({ children }) => {
    const [queryClient] = useState(() => new QueryClient())

    return <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
}

export default ReactQueryProvider
