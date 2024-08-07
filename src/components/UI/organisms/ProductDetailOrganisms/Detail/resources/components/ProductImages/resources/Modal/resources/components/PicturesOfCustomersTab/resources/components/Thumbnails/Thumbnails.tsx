import { type FC, memo } from 'react'

import { NextImage } from '@atoms/Image'

import avatar from '@public/images/user-avatar.png'

import type { IPicturesOfCustomersTabThumbnailsProps } from './resources'

const PicturesOfCustomersTabThumbnails: FC<IPicturesOfCustomersTabThumbnailsProps> = ({
    activeSlideIndex,
    handleThumbnailClick,
    images,
}) => {
    return (
        <div className='w-full flex justify-center lg:justify-start  '>
            <div className='w-fit flex flex-wrap gap-2 h-full'>
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
                            <NextImage
                                fill
                                src={item.image}
                                alt={'thumbnail image'}
                                sizes='(max-width: 640px) 40vw, (min-width: 640px) 60vw'
                            />
                        </figure>

                        {/* user avatar */}
                        <figure className={`w-6 h-6 absolute top-1 select-none rounded-md text-center`}>
                            <NextImage
                                fill
                                src={avatar.src}
                                alt={'thumbnail image'}
                                sizes='(max-width: 640px) 40vw, (min-width: 640px) 60vw'
                            />
                        </figure>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default memo(PicturesOfCustomersTabThumbnails)
