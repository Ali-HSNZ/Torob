type TUserType = {
    name: string
    lastName: string
}

type TImagesType = {
    id: number
    url: string
}

type TMoreDetailType = {
    body: string
    user: TUserType
    tags: string[]
    storeName: string
    like: number
    disLike: number
}

interface IPicturesOfBuyersTabDetailProps {
    moreDetail: TMoreDetailType | undefined
    images: TImagesType[] | undefined
    handleMoreDetailClick: () => void
}

export default IPicturesOfBuyersTabDetailProps
