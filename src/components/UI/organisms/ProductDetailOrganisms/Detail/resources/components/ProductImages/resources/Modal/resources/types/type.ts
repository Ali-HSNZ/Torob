type TProductImagesModalTabType = 'original-images' | 'pictures-of-buyers'

type TProductImageOriginalImagesTab = {
    id: number
    url: string
}[]
interface IProductImagesModalProps {
    productTitle: string
    close: () => void
    activeSlideIndex: number
    images: TProductImageOriginalImagesTab
}

export type { TProductImagesModalTabType, IProductImagesModalProps, TProductImageOriginalImagesTab }
