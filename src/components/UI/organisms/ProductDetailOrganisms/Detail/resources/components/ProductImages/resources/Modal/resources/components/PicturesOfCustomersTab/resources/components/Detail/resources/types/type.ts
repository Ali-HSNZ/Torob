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

interface IPicturesOfCustomersTabDetailProps {
    moreDetail: TMoreDetailType | undefined
    images: TImagesType[] | undefined
    handleMoreDetailClick: () => void
}

export default IPicturesOfCustomersTabDetailProps
