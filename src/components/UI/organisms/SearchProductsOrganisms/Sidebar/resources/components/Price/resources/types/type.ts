import { type TCriticalAny } from '@core/types/critical-any'

type TPriceRangeType = {
    min: number
    max: number
}

interface ISidebarPriceProps {
    setQuery: TCriticalAny
}

export type { ISidebarPriceProps, TPriceRangeType }
