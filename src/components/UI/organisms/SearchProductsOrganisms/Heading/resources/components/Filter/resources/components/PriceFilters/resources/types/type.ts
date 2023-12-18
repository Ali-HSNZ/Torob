import { type Dispatch, type SetStateAction } from 'react'

type TPriceRangeType = {
    min: number
    max: number
}

interface IPriceFiltersProps {
    setIsMainFilter: Dispatch<SetStateAction<boolean>>
}

export type { IPriceFiltersProps, TPriceRangeType }
