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

interface ISidebarCategoryProps {
    setQuery: TCriticalAny
}

export type { ISidebarCategoryProps, TSidebarCategoriesType }
