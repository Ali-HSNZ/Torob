type TProductImagesModalTabType = 'original-images' | 'pictures-of-buyers'

interface IProductImagesModalProps {
    productTitle: string
    open: () => void
    close: () => void
    activeSlideIndex: number
    images: {
        id: number
        url: string
    }[]
}

export type { TProductImagesModalTabType, IProductImagesModalProps }
