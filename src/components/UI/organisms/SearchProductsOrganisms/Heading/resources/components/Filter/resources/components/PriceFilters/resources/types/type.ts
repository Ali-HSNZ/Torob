import { type Dispatch, type SetStateAction } from 'react'

type TPriceRangeType = {
    min: number
    max: number
}

interface IPriceFiltersProps {
    setStep: Dispatch<SetStateAction<number>>
}

export type { IPriceFiltersProps, TPriceRangeType }
