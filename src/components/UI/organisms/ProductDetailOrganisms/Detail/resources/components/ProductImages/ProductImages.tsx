import { type FC, useState } from 'react'
import Image from 'next/image'
import { Modal } from '@mantine/core'
import { useDisclosure } from '@mantine/hooks'
import { IconDots } from '@tabler/icons-react'

import { type IProductImagesProps, ProductImagesModal } from './resources'

const ProductImages: FC<IProductImagesProps> = ({ productTitle, images, imageUrl }) => {
    const [opened, { open, close }] = useDisclosure(false)
    const [activeSlideIndex, setActiveSlideIndex] = useState<number>(0)

    return (
        <>
            <Modal size={1000} centered opened={opened} onClose={close} withCloseButton={false}>
                <ProductImagesModal
                    key={0}
                    close={close}
                    open={open}
                    productTitle={productTitle}
                    activeSlideIndex={activeSlideIndex}
                    images={images}
                />
            </Modal>

            <div className='flex flex-row justify-center gap-x-4 '>
                <div className='flex flex-col gap-y-4'>
                    {images.slice(0, 3).map((image, index) => (
                        <div
                            key={image.id}
                            onClick={() => {
                                open()
                                setActiveSlideIndex(index === 2 ? 0 : index)
                            }}
                            className='border-2 p-1 relative cursor-pointer hover:border-red-400 rounded-md duration-100'
                        >
                            <figure
                                className={`w-12 h-12 select-none rounded-md text-center relative ${
                                    index === 2 ? 'blur-sm' : ''
                                }`}
                            >
                                <Image fill src={image.url} alt={productTitle} className='' />
                            </figure>
                            {index === 2 && (
                                <IconDots
                                    className='text-gray-700 absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2'
                                    stroke={2.4}
                                />
                            )}
                        </div>
                    ))}
                </div>
                <figure
                    onClick={() => {
                        open()
                        setActiveSlideIndex(0)
                    }}
                    className='w-64 h-64 relative cursor-pointer'
                >
                    <Image className='object-contain' fill src={imageUrl} alt={productTitle} />
                </figure>
            </div>
        </>
    )
}

export default ProductImages
