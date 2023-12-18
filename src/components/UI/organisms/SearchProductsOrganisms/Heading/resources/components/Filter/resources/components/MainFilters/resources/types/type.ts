import { type Dispatch, type SetStateAction } from 'react'

import { type TCriticalAny } from '@core/types/critical-any'

interface IMainFiltersProps {
    closeDrawer: () => void
    query: {
        brand: string | null | undefined
        category: string | null | undefined
        min: number | null | undefined
        max: number | null | undefined
        available: string | null | undefined
    }
    setStep: Dispatch<SetStateAction<number>>
    setIsMainFilter: Dispatch<SetStateAction<boolean>>
    setQuery: TCriticalAny
}

export default IMainFiltersProps
