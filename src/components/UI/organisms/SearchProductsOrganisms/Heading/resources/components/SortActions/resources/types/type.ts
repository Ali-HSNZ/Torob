import { type TCriticalAny } from '@core/types/critical-any'

interface ISortActionsProps {
    setQuery: TCriticalAny
    query: TCriticalAny
}

type TSingleSortType = {
    value: string
    label: string
}

export type { ISortActionsProps, TSingleSortType }
