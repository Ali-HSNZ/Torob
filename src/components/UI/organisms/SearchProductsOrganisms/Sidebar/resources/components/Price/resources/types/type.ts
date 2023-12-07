import { type TCriticalAny } from '@core/types/critical-any'

type TPriceRangeType = {
    min: number
    max: number
}

interface ISidebarPriceProps {
    setQuery: TCriticalAny
    query: (number | null | undefined)[]
}

export type { ISidebarPriceProps, TPriceRangeType }
