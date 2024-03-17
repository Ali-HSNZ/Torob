type TImagesType = { id: number; image: string }

interface IPicturesOfBuyersTabThumbnailsProps {
    handleThumbnailClick: (index: number) => void
    activeSlideIndex: number
    images: TImagesType[]
}

export default IPicturesOfBuyersTabThumbnailsProps
