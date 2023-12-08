import { type TCriticalAny } from '@core/types/critical-any'

interface ISortActionsProps {
    setQuery: TCriticalAny
    query: string | null | undefined
}

type TSingleSortType = {
    value: string
    label: string
}

export type { ISortActionsProps, TSingleSortType }
