import { type TCriticalAny } from '@core/types/critical-any'

type SubCategory = {
    id: number
    slug: string
    title: string
    type: string
    status: boolean
    is_sub_category: boolean
    sub_categories: SubCategory2[]
}

type SubCategory2 = {
    id: number
    slug: string
    title: string
    type: string
    status: boolean
    is_sub_category: boolean
    sub_categories: SubCategory3[]
}

type SubCategory3 = {
    id: number
    slug: string
    title: string
    type: string
    status: boolean
    is_sub_category: boolean
    sub_categories: TCriticalAny[]
}

type Daum = {
    id: number
    slug: string
    title: string
    type: string
    status: boolean
    is_sub_category: boolean
    sub_categories: SubCategory[]
}

type TAllCategoriesListType = {
    status: number
    message: string
    data: Daum[]
}

export default TAllCategoriesListType
