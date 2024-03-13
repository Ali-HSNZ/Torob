import { type FC, useState } from 'react'
import { IconX } from '@tabler/icons-react'

import { CActionIcon } from '@atoms/ActionIcon'

import {
    type IProductImagesModalProps,
    OriginalImagesTab,
    PicturesOfBuyersTab,
    type TProductImagesModalTabType,
} from './resources'

const ProductImagesModal: FC<IProductImagesModalProps> = ({
    productTitle,
    close,
    activeSlideIndex,
    images,
    picturesOfBuyers,
}) => {
    const [tab, setTab] = useState<TProductImagesModalTabType>('original-images')

    console.log('picturesOfBuyers: ', picturesOfBuyers)
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

            {tab === 'original-images' ? (
                <OriginalImagesTab activeSlideIndex={activeSlideIndex} images={images} productTitle={productTitle} />
            ) : (
                <PicturesOfBuyersTab activeSlideIndex={activeSlideIndex} images={images} productTitle={productTitle} />
            )}
            {/* <PicturesOfBuyersTab activeSlideIndex={activeSlideIndex} images={images} productTitle={productTitle} /> */}
        </section>
    )
}

export default ProductImagesModal
