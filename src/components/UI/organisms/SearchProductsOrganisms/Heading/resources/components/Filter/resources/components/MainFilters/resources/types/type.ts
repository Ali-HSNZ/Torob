import { type Dispatch, type SetStateAction } from 'react'

import { type TCriticalAny } from '@core/types/critical-any'

interface IMainFiltersProps {
    closeDrawer: () => void
    setStep: Dispatch<SetStateAction<number>>
    setQuery: TCriticalAny
}

export default IMainFiltersProps
