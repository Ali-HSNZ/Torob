import { type BreadcrumbsProps } from '@mantine/core'

type TSingleBreadCrumpType = {
    title: string
    href: string
}
interface IBreadcrumbsProps extends Omit<BreadcrumbsProps, 'children'> {
    breadcrumbsList: TSingleBreadCrumpType[]
    handleCLick: (arg: string) => void
}

export type { IBreadcrumbsProps }
