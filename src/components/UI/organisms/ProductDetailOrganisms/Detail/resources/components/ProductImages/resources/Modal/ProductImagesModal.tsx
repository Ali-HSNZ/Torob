import { type FC, useState } from 'react'
import Image from 'next/image'
import { IconX } from '@tabler/icons-react'

import { CKeenSlider } from '@molecules/KeenSlider'

import { CActionIcon } from '@atoms/ActionIcon'

import { type IProductImagesModalProps, type TProductImagesModalTabType } from './resources'

const ProductImagesModal: FC<IProductImagesModalProps> = ({ productTitle, open, close, activeSlideIndex, images }) => {
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

            <div className='w-full mt-4 flex justify-between items-start'>
                {/* Dots */}
                <div className='w-full flex flex-wrap gap-2 h-full'>
                    {images.map((image, index) => (
                        <div
                            onClick={() => setActiveSlide(index)}
                            key={image.id}
                            className={`w-fit border-2 p-1 relative cursor-pointer rounded-md duration-100 ${
                                index === activeSlide ? 'border-red-400' : 'hover:border-red-300 '
                            }`}
                        >
                            <figure className={`w-12 h-12 select-none rounded-md text-center relative`}>
                                <Image fill src={image.url} alt={productTitle} className='' />
                            </figure>
                        </div>
                    ))}
                </div>

                {/* Sliders Image */}
                <div className='w-1/2'>
                    <CKeenSlider height={400} activeSlide={activeSlide} setActiveSlide={setActiveSlide}>
                        {images.map((image) => (
                            <figure
                                key={image.id}
                                onClick={open}
                                className='keen-slider__slide h-96 !w-[200px]  shrink-0 relative  flex items-center justify-center'
                            >
                                <Image className='object-contain' fill src={image.url} alt={productTitle} />
                            </figure>
                        ))}
                    </CKeenSlider>
                </div>
            </div>
        </section>
    )
}

export default ProductImagesModal
