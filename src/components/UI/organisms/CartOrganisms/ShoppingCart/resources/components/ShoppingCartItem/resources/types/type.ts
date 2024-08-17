interface IShoppingCartItemProps {
    product: {
        id: number
        title: string
        category: string
        image: string
        cart: number
        price: number
        moreDetail: {
            label: string
            value: number | string
        }[]
    }
    className?: string
}

export type { IShoppingCartItemProps }
