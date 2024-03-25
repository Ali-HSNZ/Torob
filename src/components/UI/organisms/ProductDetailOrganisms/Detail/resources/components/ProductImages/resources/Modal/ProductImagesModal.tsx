import { type FC, useState } from 'react'
import { IconX } from '@tabler/icons-react'

import { CActionIcon } from '@atoms/ActionIcon'

import {
    type IProductImagesModalProps,
    OriginalImagesTab,
    PicturesOfCustomersTab,
    type TProductImagesModalTabType,
} from './resources'

const ProductImagesModal: FC<IProductImagesModalProps> = ({
    productTitle,
    close,
    activeSlideIndex,
    images,
    productCode,
}) => {
    const [tab, setTab] = useState<TProductImagesModalTabType>('original-images')

    return (
        <section className='px-4 pb-4'>
            {/* header */}
            <div className='w-full flex sticky top-0 py-4 bg-white z-20 justify-between items-start border-b border-gray-200'>
                <div className='w-fit flex gap-x-5 relative '>
                    <CActionIcon
                        variant='transparent'
                        onClick={() => setTab('original-images')}
                        className={`text-sm bg-transparent relative top-[2px] ${
                            tab === 'original-images' ? 'text-red-500 font-bold' : 'text-gray-600 font-medium'
                        }`}
                    >
                        Original images
                    </CActionIcon>

                    <CActionIcon
                        variant='transparent'
                        onClick={() => setTab('pictures-of-customers')}
                        className={`text-sm relative top-[2px] ${
                            tab === 'pictures-of-customers' ? 'text-red-500 font-bold' : 'text-gray-600 font-medium'
                        }`}
                    >
                        Pictures of customers
                    </CActionIcon>
                </div>

                <CActionIcon variant='transparent'>
                    <IconX className='text-gray-500' stroke={1.5} onClick={close} />
                </CActionIcon>
            </div>

            {tab === 'original-images' ? (
                <OriginalImagesTab activeSlideIndex={activeSlideIndex} images={images} productTitle={productTitle} />
            ) : (
                <PicturesOfCustomersTab productCode={productCode} productTitle={productTitle} />
            )}
        </section>
    )
}

export default ProductImagesModal
