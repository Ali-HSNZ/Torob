import { type FC, memo, useState } from 'react'
import Image from 'next/image'

import { CKeenSlider } from '@molecules/KeenSlider'

import { STATIC_PRODUCTS_DATA } from '@core/constants/data/constants/products'

import {
    type IPicturesOfBuyersTabProps,
    PicturesOfBuyersTabDetail,
    PicturesOfBuyersTabThumbnails,
    PicturesOfBuyersTabUserDetail,
    type TActiveSlideType,
} from './resources'

const PicturesOfBuyersTab: FC<IPicturesOfBuyersTabProps> = ({ productTitle, productCode }) => {
    // active slide
    const [activeSlide, setActiveSlide] = useState<TActiveSlideType>({ index: 0, isDetail: false })

    // find current user data
    const picturesOfBuyers = STATIC_PRODUCTS_DATA.find((product) => product.code === productCode)?.picturesOfBuyers
    const currentUser = picturesOfBuyers ? picturesOfBuyers[activeSlide.index] : undefined

    // handle each slider thumbnail clicked
    const handleThumbnailClick = (index: number): void => setActiveSlide({ index, isDetail: false })

    // handle 'more detail' button clicked
    const handleMoreDetailClick = (): void => setActiveSlide({ index: activeSlide.index, isDetail: true })

    // handle 'point of view' button clicked
    const handlePointOfViewClick = (): void => setActiveSlide({ index: activeSlide.index, isDetail: false })

    // render 'UserDetail' component when clicked on 'more detail' button
    if (activeSlide.isDetail) {
        return <PicturesOfBuyersTabUserDetail handlePointOfViewClick={handlePointOfViewClick} data={currentUser} />
    }

    // else render default component when access 'picturesOfBuyers'
    if (picturesOfBuyers) {
        return (
            <div className='w-full mt-4 flex flex-col-reverse gap-4 lg:flex-row justify-between items-start'>
                <div className='w-full lg:w-1/2'>
                    {/* thumbnails */}
                    <PicturesOfBuyersTabThumbnails
                        activeSlideIndex={activeSlide.index}
                        handleThumbnailClick={handleThumbnailClick}
                        images={picturesOfBuyers || []}
                    />

                    {/* details */}
                    <PicturesOfBuyersTabDetail
                        handleMoreDetailClick={handleMoreDetailClick}
                        images={currentUser?.images}
                        moreDetail={currentUser?.moreDetail}
                    />
                </div>

                {/* Slider Image */}
                <div className='w-full lg:w-1/2 relative'>
                    <CKeenSlider
                        drag={false}
                        activeSlide={activeSlide.index}
                        setActiveSlide={(currentIndex) => setActiveSlide({ index: currentIndex })}
                    >
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
}

export default memo(PicturesOfBuyersTab)
