type TProductType = {
    id: number
    title: string
    price: number
    storeCount: number
    image: string
}

interface IColumnProductCardProps {
    product: TProductType
}

export default IColumnProductCardProps
