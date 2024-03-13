import { type FC, useState } from 'react'
import Image from 'next/image'
import { IconBuildingStore, IconUser } from '@tabler/icons-react'
import { IconChevronRight } from '@tabler/icons-react'

import { CKeenSlider } from '@molecules/KeenSlider'

import { CButton } from '@atoms/Button'

import avatar from '@public/images/user-avatar.png'

import { type TProductImageModalTab } from '../..'

const PicturesOfBuyersTab: FC<{
    images: TProductImageModalTab
    productTitle: string
    activeSlideIndex: number
}> = ({ images, productTitle, activeSlideIndex }) => {
    const [activeSlide, setActiveSlide] = useState<number>(activeSlideIndex)

    return (
        <div className='w-full mt-4 flex flex-col gap-y-4 lg:flex-row justify-between items-start'>
            <div className='w-full lg:w-1/2'>
                {/* thumbnails */}
                <div className='  w-full flex flex-wrap gap-2 h-full'>
                    {images.map((image, index) => (
                        <div
                            onClick={() => setActiveSlide(index)}
                            key={image.id}
                            className={`w-fit border-2 p-1 relative cursor-pointer rounded-md duration-300 ${
                                index === activeSlide ? 'border-red-400' : 'sm:hover:border-red-200'
                            }`}
                        >
                            <figure className={`w-14 h-14 select-none rounded-md text-center relative`}>
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
                            <figure className={`w-6 h-6 absolute top-1 select-none rounded-md text-center`}>
                                <Image
                                    fill
                                    src={avatar.src}
                                    alt={productTitle}
                                    sizes='(max-width: 640px) 40vw, (min-width: 640px) 60vw'
                                    loading='lazy'
                                />
                            </figure>
                        </div>
                    ))}
                </div>
                <div className='mt-4'>
                    <p className='text-xs text-gray-500'>More Detail</p>
                    <div className='px-4 text-sm  font-medium flex items-center justify-between gap-y-1'>
                        <div>
                            <div className='flex text-gray-700 gap-x-1 items-center'>
                                <IconUser size={18} />
                                <p>Ali hassanzadeh</p>
                            </div>
                            <div className='flex text-gray-700 gap-x-1 items-center'>
                                <IconBuildingStore size={18} />
                                <p>Alex Store</p>
                            </div>
                        </div>
                        <CButton
                            size='xs'
                            rightSection={<IconChevronRight stroke={1} size={20} />}
                            variant='transparent'
                            classNames={{ label: 'p-0', section: 'p-0 m-0' }}
                            color='dark'
                        >
                            More Detail
                        </CButton>
                    </div>
                </div>
            </div>

            {/* Sliders Image */}
            <div className='w-full lg:w-1/2 relative'>
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

export default PicturesOfBuyersTab
