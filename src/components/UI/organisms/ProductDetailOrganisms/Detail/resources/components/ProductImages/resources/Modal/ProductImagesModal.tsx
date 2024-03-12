import { type FC, useState } from 'react'
import Image from 'next/image'
import { IconX } from '@tabler/icons-react'

import { CActionIcon } from '@atoms/ActionIcon'

import { type IProductImagesModalProps, type TProductImagesModalTabType } from './resources'

const ProductImagesModal: FC<IProductImagesModalProps> = ({ imageUrl, productTitle, open, close }) => {
    const [tab, setTab] = useState<TProductImagesModalTabType>('original-images')

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

            {/* content(images) */}
            <div className='w-full mt-4 flex justify-between items-start'>
                <div className='w-full flex flex-wrap gap-2 h-full'>
                    {[0, 1, 2, 3, 4, 5, 6, 7].map((indx: number) => (
                        <div
                            key={indx}
                            className='w-fit border p-1 relative cursor-pointer hover:border-gray-400 rounded-md duration-100'
                        >
                            <figure className={`w-12 h-12 select-none rounded-md text-center relative`}>
                                <Image fill src={imageUrl} alt={productTitle} className='' />
                            </figure>
                        </div>
                    ))}
                </div>

                <figure onClick={open} className='w-1/2 h-96 shrink-0 relative flex items-center justify-center'>
                    <Image className='object-contain' fill src={imageUrl} alt={productTitle} />
                </figure>
            </div>
        </section>
    )
}

export default ProductImagesModal
