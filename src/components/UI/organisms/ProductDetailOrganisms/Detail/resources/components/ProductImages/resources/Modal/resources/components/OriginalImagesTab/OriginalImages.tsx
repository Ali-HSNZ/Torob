import { type FC, memo, useState } from 'react'
import Image from 'next/image'

import { CKeenSlider } from '@molecules/KeenSlider'

import { type IOriginalImagesTabProps } from './resources'

const OriginalImagesTab: FC<IOriginalImagesTabProps> = ({ images, productTitle, activeSlideIndex }) => {
    const [activeSlide, setActiveSlide] = useState<number>(activeSlideIndex)

    return (
        <div className='w-full mt-4 flex flex-col-reverse gap-y-4 lg:flex-row justify-between items-start'>
            {/* thumbnails */}
            <div className='w-full lg:w-1/2 flex justify-center lg:justify-start  '>
                <div className=' flex flex-wrap gap-2 h-full'>
                    {images.map((image, index) => (
                        <div
                            onClick={() => setActiveSlide(index)}
                            key={image.id}
                            className={`w-fit border-2 p-0.5 relative cursor-pointer rounded-[7px] duration-300 ${
                                index === activeSlide ? 'border-red-400' : 'sm:hover:border-red-200'
                            }`}
                        >
                            <figure
                                className={`w-12 h-12 select-none rounded-[4px] overflow-hidden text-center relative`}
                            >
                                <Image
                                    blurDataURL={image.url}
                                    placeholder='blur'
                                    fill
                                    src={image.url}
                                    alt={productTitle}
                                    sizes='(max-width: 640px) 40vw, (min-width: 640px) 50vw'
                                    className=''
                                    loading='lazy'
                                />
                            </figure>
                        </div>
                    ))}
                </div>
            </div>

            {/* Sliders Image */}
            <div className='w-full lg:w-1/2'>
                <CKeenSlider drag={false} activeSlide={activeSlide} setActiveSlide={setActiveSlide}>
                    {images.map((image) => (
                        <figure
                            key={image.id}
                            className={`keen-slider__slide h-[400px] lg:h-[550px] !w-[100%] shrink-0 relative flex items-center justify-center`}
                        >
                            <Image
                                sizes='80vw'
                                className='object-contain'
                                fill
                                blurDataURL={image.url}
                                src={image.url}
                                alt={productTitle}
                            />
                        </figure>
                    ))}
                </CKeenSlider>
            </div>
        </div>
    )
}

export default memo(OriginalImagesTab)
