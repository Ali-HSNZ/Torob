type TUserType = {
    name: string
    lastName: string
}

type TImageType = {
    id: number
    url: string
}

type TColorType = {
    name: string
    hex: string
}

interface IPicturesOfBuyersTabUserDetailProps {
    handlePointOfViewClick: () => void
    data?: {
        id: number
        image: string
        images: TImageType[]
        moreDetail: {
            title: string
            color: TColorType
            body: string
            user: TUserType
            tags: string[]
            storeName: string
            like: number
            disLike: number
            weaknesses: string[]
            strengths: string[]
            date: string
        }
    }
}

export default IPicturesOfBuyersTabUserDetailProps
