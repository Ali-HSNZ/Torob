import { type FC, useState } from 'react'
import Image from 'next/image'
import { IconX } from '@tabler/icons-react'

import { CKeenSlider } from '@molecules/KeenSlider'

import { CActionIcon } from '@atoms/ActionIcon'

import { type IProductImagesModalProps, type TProductImagesModalTabType } from './resources'

const ProductImagesModal: FC<IProductImagesModalProps> = ({ productTitle, close, activeSlideIndex, images }) => {
    const [tab, setTab] = useState<TProductImagesModalTabType>('original-images')

    const [activeSlide, setActiveSlide] = useState<number>(activeSlideIndex)

    return (
        <section>
            {/* header */}
            <div className='w-full flex justify-between items-start border-b border-gray-200'>
                <div className='w-fit flex gap-x-5 relative '>
                    <CActionIcon
                        variant='transparent'
                        onClick={() => setTab('original-images')}
                        className={`text-sm bg-transparent relative top-[2px] pb-3 ${
                            tab === 'original-images' ? 'text-red-500 font-bold' : 'text-gray-600 font-medium'
                        }`}
                    >
                        Original images
                    </CActionIcon>

                    <CActionIcon
                        variant='transparent'
                        onClick={() => setTab('pictures-of-buyers')}
                        className={`text-sm relative top-[2px] pb-3 ${
                            tab === 'pictures-of-buyers' ? 'text-red-500 font-bold' : 'text-gray-600 font-medium'
                        }`}
                    >
                        Pictures of buyers
                    </CActionIcon>
                </div>

                <CActionIcon variant='transparent'>
                    <IconX className='text-gray-500' stroke={1.5} onClick={close} />
                </CActionIcon>
            </div>

            <div className='w-full mt-4 flex flex-col gap-y-4 lg:flex-row justify-between items-start'>
                {/* thumbnails */}
                <div className='lg:w-1/2 flex flex-wrap gap-2 h-full'>
                    {images.map((image, index) => (
                        <div
                            onClick={() => setActiveSlide(index)}
                            key={image.id}
                            className={`w-fit border-2 p-1 relative cursor-pointer rounded-md duration-100 ${
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
                                    sizes='(max-width: 640px) 40vw, (min-width: 640px) 60vw'
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
        </section>
    )
}

export default ProductImagesModal
