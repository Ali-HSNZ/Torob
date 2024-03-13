import { type TPicturesOfBuyersType } from '../../..'

type TProductImagesModalTabType = 'original-images' | 'pictures-of-buyers'

type TProductImageModalTab = {
    id: number
    url: string
}[]

interface IProductImagesModalProps {
    productTitle: string
    close: () => void
    activeSlideIndex: number
    images: TProductImageModalTab
    picturesOfBuyers: TPicturesOfBuyersType[] | undefined
}

export type { TProductImagesModalTabType, IProductImagesModalProps, TProductImageModalTab }
