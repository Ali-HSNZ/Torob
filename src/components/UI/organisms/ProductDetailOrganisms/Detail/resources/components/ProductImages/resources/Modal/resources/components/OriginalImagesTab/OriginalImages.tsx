import { type FC, useState } from 'react'
import Image from 'next/image'

import { CKeenSlider } from '@molecules/KeenSlider'

import { type TProductImageModalTab } from '../..'

const OriginalImagesTab: FC<{
    images: TProductImageModalTab
    productTitle: string
    activeSlideIndex: number
}> = ({ images, productTitle, activeSlideIndex }) => {
    const [activeSlide, setActiveSlide] = useState<number>(activeSlideIndex)

    return (
        <div className='w-full mt-4 flex flex-col gap-y-4 lg:flex-row justify-between items-start'>
            {/* thumbnails */}
            <div className='lg:w-1/2 flex flex-wrap gap-2 h-full'>
                {images.map((image, index) => (
                    <div
                        onClick={() => setActiveSlide(index)}
                        key={image.id}
                        className={`w-fit border-2 p-1 relative cursor-pointer rounded-md duration-300 ${
                            index === activeSlide ? 'border-red-400' : 'sm:hover:border-red-200'
                        }`}
                    >
                        <figure className={`w-12 h-12 select-none rounded-md text-center relative`}>
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

            {/* Sliders Image */}
            <div className='w-full lg:w-1/2'>
                <CKeenSlider activeSlide={activeSlide} setActiveSlide={setActiveSlide}>
                    {images.map((image) => (
                        <figure
                            key={image.id}
                            className={`keen-slider__slide h-[400px] lg:h-[550px] !w-[100%] shrink-0 relative flex items-center justify-center`}
                        >
                            <Image
                                sizes='80vw'
                                className='object-contain'
                                fill
                                placeholder={`data:image/${image.url}`}
                                blurDataURL={image.url}
                                src={image.url}
                                loading='lazy'
                                alt={productTitle}
                            />
                        </figure>
                    ))}
                </CKeenSlider>
            </div>
        </div>
    )
}

export default OriginalImagesTab
