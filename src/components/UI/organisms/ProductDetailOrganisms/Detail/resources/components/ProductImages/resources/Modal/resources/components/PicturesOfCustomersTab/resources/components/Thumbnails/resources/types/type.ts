type TImagesType = { id: number; image: string }

interface IPicturesOfCustomersTabThumbnailsProps {
    handleThumbnailClick: (index: number) => void
    activeSlideIndex: number
    images: TImagesType[]
}

export default IPicturesOfCustomersTabThumbnailsProps
