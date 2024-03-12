type TProductImagesModalTabType = 'original-images' | 'pictures-of-buyers'

interface IProductImagesModalProps {
    imageUrl: string
    productTitle: string
    open: () => void
    close: () => void
}

export type { TProductImagesModalTabType, IProductImagesModalProps }
