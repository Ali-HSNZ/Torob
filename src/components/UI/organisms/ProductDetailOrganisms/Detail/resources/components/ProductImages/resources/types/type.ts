type TPicturesOfBuyersType = {
    id: number
    image: string
    images: {
        id: number
        url: string
    }[]
    moreDetail: {
        body: string
        user: {
            name: string
            lastName: string
        }
        tags: string[]
        storeName: string
        like: number
        disLike: number
    }
}

interface IProductImagesProps {
    productTitle: string
    images: {
        id: number
        url: string
    }[]
    imageUrl: string
    picturesOfBuyers: TPicturesOfBuyersType[] | undefined
    productCode: string
}

export type { IProductImagesProps, TPicturesOfBuyersType }
