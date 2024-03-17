import { type FC } from 'react'
import Image from 'next/image'

import avatar from '@public/images/user-avatar.png'

import type IPicturesOfBuyersTabThumbnailsProps from './resources/types/type'

const PicturesOfBuyersTabThumbnails: FC<IPicturesOfBuyersTabThumbnailsProps> = ({
    activeSlideIndex,
    handleThumbnailClick,
    images,
}) => {
    return (
        <div className='w-full flex flex-wrap gap-2 h-full'>
            {images.map((item, index) => (
                <div
                    onClick={() => handleThumbnailClick(index)}
                    key={item.id}
                    className={`w-fit border-2 p-0.5 relative cursor-pointer rounded-[7px] duration-300 ${
                        index === activeSlideIndex ? 'border-red-400' : 'sm:hover:border-red-300'
                    }`}
                >
                    {/* image src */}
                    <figure className={`w-14 h-14 select-none rounded-[4px] overflow-hidden text-center relative`}>
                        <Image
                            fill
                            src={item.image}
                            alt={'thumbnail image'}
                            sizes='(max-width: 640px) 40vw, (min-width: 640px) 60vw'
                        />
                    </figure>

                    {/* user avatar */}
                    <figure className={`w-6 h-6 absolute top-1 select-none rounded-md text-center`}>
                        <Image
                            fill
                            src={avatar.src}
                            alt={'thumbnail image'}
                            sizes='(max-width: 640px) 40vw, (min-width: 640px) 60vw'
                        />
                    </figure>
                </div>
            ))}
        </div>
    )
}

export default PicturesOfBuyersTabThumbnails
