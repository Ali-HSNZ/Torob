import React, { type FC, useState } from 'react'
import Image from 'next/image'
import { Modal } from '@mantine/core'
import { useDisclosure } from '@mantine/hooks'
import { IconDots } from '@tabler/icons-react'

import { type IProductImagesProps } from './resources'

const ProductImages: FC<IProductImagesProps> = ({ productTitle, images, imageUrl }) => {
    const [opened, { open, close }] = useDisclosure(false)

    const [tab, setTab] = useState<'original-images' | 'pictures-of-buyers'>('original-images')

    return (
        <>
            <Modal size={1000} centered opened={opened} onClose={close} withCloseButton={false}>
                {/* header */}
                <section>
                    <div className='w-full flex gap-x-3 border-b-2 border-gray-200'>
                        <button
                            onClick={() => setTab('original-images')}
                            className={`text-sm bg-transparent  relative font-bold top-[2px] border-b-2 pb-2 ${
                                tab === 'original-images' ? 'text-red-500 border-red-500' : ''
                            }`}
                        >
                            Original images
                        </button>
                        <button
                            onClick={() => setTab('pictures-of-buyers')}
                            className={`text-sm bg-transparent  relative font-bold top-[2px] border-b-2 pb-2 ${
                                tab === 'pictures-of-buyers' ? 'text-red-500 border-red-500' : ''
                            }`}
                        >
                            Pictures of buyers
                        </button>
                    </div>
                </section>

                {/* content(images) */}
                <section className='w-full mt-4 flex justify-between items-start  '>
                    <div className='w-full flex flex-wrap  gap-2 h-full'>
                        {[0, 1, 2, 3, 4, 5, 6, 7].map((indx: number) => (
                            <div
                                key={indx}
                                className='w-fit border p-1 relative cursor-pointer hover:border-gray-400 rounded-md duration-100'
                            >
                                <figure className={`w-12 h-12 select-none   rounded-md text-center relative`}>
                                    <Image fill src={imageUrl} alt={productTitle} className='' />
                                </figure>
                            </div>
                        ))}
                    </div>
                    <figure onClick={open} className='w-1/2 h-96 shrink-0 relative flex items-center justify-center'>
                        <Image className='object-contain' fill src={imageUrl} alt={productTitle} />
                    </figure>
                </section>
            </Modal>

            <div className='flex flex-row justify-center gap-x-4 '>
                <div className='flex flex-col gap-y-4'>
                    {images.map((image, index) => (
                        <div
                            key={image.id}
                            onClick={open}
                            className='border p-1 relative cursor-pointer hover:border-gray-400 rounded-md duration-100'
                        >
                            <figure
                                className={`w-12 h-12 select-none rounded-md text-center relative ${
                                    index === images.length - 1 ? 'blur-sm' : ''
                                }`}
                            >
                                <Image fill src={image.url} alt={productTitle} className='' />
                            </figure>
                            {index === images.length - 1 && (
                                <IconDots
                                    className='text-white absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2'
                                    stroke={2.4}
                                />
                            )}
                        </div>
                    ))}
                </div>
                <figure onClick={open} className='w-64 h-64 relative cursor-pointer'>
                    <Image className='object-contain' fill src={imageUrl} alt={productTitle} />
                </figure>
            </div>
        </>
    )
}

export default ProductImages
