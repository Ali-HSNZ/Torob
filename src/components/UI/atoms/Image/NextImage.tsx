import { type SyntheticEvent } from 'react'
import Image, { type ImageProps } from 'next/image'

const NextImage = ({ src, alt, ...rest }: ImageProps) => {
    const handleImageError = (imageElement: SyntheticEvent<HTMLImageElement, Event>) => {
        imageElement.currentTarget.src = '/images/common/broken-image.png'
        imageElement.currentTarget.srcset = '/images/common/broken-image.png'
    }

    return <Image draggable={false} src={src} alt={alt} onError={handleImageError} {...rest} />
}

export default NextImage
