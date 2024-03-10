type TProductType = {
    id: number
    title: string
    price: number
    storeCount: number
    image: string
    code: string
}

interface IRowProductCardProps {
    product: TProductType
}

export default IRowProductCardProps
