type TProductType = {
    id: number
    title: string
    price: number
    storeCount: number
    image: string
}

interface IProductCardProps {
    product: TProductType
}

export default IProductCardProps
