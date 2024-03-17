import { type FC, useState } from 'react'
import Image from 'next/image'
import { IconBuildingStore, IconUser } from '@tabler/icons-react'
import { IconChevronRight } from '@tabler/icons-react'

import { CKeenSlider } from '@molecules/KeenSlider'

import { CButton } from '@atoms/Button'

import { STATIC_PRODUCTS_DATA } from '@core/constants/data/constants/products'

import avatar from '@public/images/user-avatar.png'

const PicturesOfBuyersTab: FC<{
    productTitle: string
    productCode: string
}> = ({ productTitle, productCode }) => {
    // active slider
    const [activeSlide, setActiveSlide] = useState<number>(0)

    const picturesOfBuyers = STATIC_PRODUCTS_DATA.find((product) => product.code === productCode)?.picturesOfBuyers

    const currentUser = picturesOfBuyers ? picturesOfBuyers[activeSlide] : undefined

    if (picturesOfBuyers)
        return (
            <div className='w-full mt-4 flex flex-col gap-y-4 lg:flex-row justify-between items-start'>
                <div className='w-full lg:w-1/2'>
                    {/* thumbnails */}
                    <div className='w-full flex flex-wrap gap-2 h-full'>
                        {picturesOfBuyers.map((image, index) => (
                            <div
                                onClick={() => setActiveSlide(index)}
                                key={image.id}
                                className={`w-fit border-2 p-0.5 relative cursor-pointer rounded-[7px] duration-300 ${
                                    index === activeSlide ? 'border-red-400' : 'sm:hover:border-red-300'
                                }`}
                            >
                                <figure
                                    className={`w-14 h-14 select-none rounded-[4px] overflow-hidden text-center relative`}
                                >
                                    <Image
                                        blurDataURL={image.image}
                                        placeholder='blur'
                                        fill
                                        src={image.image}
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
                        <p className='text-xs text-gray-500'>Detail</p>
                        <div className='px-4 text-sm  font-medium flex items-start justify-between gap-y-1'>
                            <div className='flex flex-col mt-1 text-xs gap-y-2'>
                                <div className='flex text-gray-700 gap-x-1 items-center'>
                                    <IconUser size={18} />
                                    <p>
                                        {currentUser?.moreDetail?.user.name} {currentUser?.moreDetail?.user.lastName}
                                    </p>
                                </div>
                                <div className='flex gap-1.5'>
                                    {currentUser?.moreDetail?.isBuyer && (
                                        <p className='text-green-600 bg-green-100 px-0.5 w-fit rounded-sm'>#Buyer</p>
                                    )}
                                    <p className='text-green-600 bg-green-100 px-0.5 w-fit rounded-sm'>#Suggest</p>
                                </div>
                                <div className='flex text-gray-700 gap-x-1 items-center'>
                                    <IconBuildingStore size={18} />
                                    <p>{currentUser?.moreDetail?.storeName}</p>
                                </div>

                                <div className='flex gap-x-1.5'>
                                    {currentUser?.images.map((image) => (
                                        <div key={image.id} className={`w-fit  relative rounded-sm overflow-hidden `}>
                                            <figure className={`w-6 h-6 select-none rounded-md text-center relative`}>
                                                <Image
                                                    blurDataURL={image.url}
                                                    placeholder='blur'
                                                    fill
                                                    src={image.url}
                                                    alt={productTitle}
                                                    sizes='(max-width: 640px) 40vw, (min-width: 640px) 20vw'
                                                    className=''
                                                    loading='lazy'
                                                />
                                            </figure>
                                        </div>
                                    ))}
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
                        {picturesOfBuyers.map((image, index) => (
                            <figure
                                key={index}
                                className={`keen-slider__slide h-[400px] lg:h-[550px] !w-[100%] shrink-0 relative flex items-center justify-center`}
                            >
                                <Image
                                    sizes='80vw'
                                    className='object-contain'
                                    fill
                                    blurDataURL={image.image}
                                    src={image.image}
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
