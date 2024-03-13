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
        isBuyer: boolean
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
}

export type { IProductImagesProps, TPicturesOfBuyersType }
