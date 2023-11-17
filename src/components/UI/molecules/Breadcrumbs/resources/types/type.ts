import { type BreadcrumbsProps } from '@mantine/core'

interface IBreadcrumbsProps extends Omit<BreadcrumbsProps, 'children'> {
    breadcrumbsList: {
        title: string
        href: string
    }[]
}

export type { IBreadcrumbsProps }
