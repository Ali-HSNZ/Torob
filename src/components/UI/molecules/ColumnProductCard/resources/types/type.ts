type TProductType = {
    id: number
    title: string
    price: number
    storeCount: number
    image: string
    code: string
}

interface IColumnProductCardProps {
    product: TProductType
}

export default IColumnProductCardProps
