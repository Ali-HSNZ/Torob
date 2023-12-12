import { type TCriticalAny } from '@core/types/critical-any'

type SubCategory = {
    id: number
    title: string
    sub: SubCategory[]
}

type TSidebarCategoriesType = {
    id: number
    title: string
    sub: SubCategory[]
}

interface IRenderCategoryProps {
    category: TSidebarCategoriesType
    setQuery: TCriticalAny
    query: string | null | undefined
}

export type { IRenderCategoryProps }
