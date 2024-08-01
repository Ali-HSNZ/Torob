import { type FC, memo, useState } from 'react'
import { Modal } from '@mantine/core'
import { useDisclosure } from '@mantine/hooks'
import { IconDots } from '@tabler/icons-react'

import { NextImage } from '@atoms/Image'

import { type IProductImagesProps, ProductImagesModal } from './resources'

const ProductImages: FC<IProductImagesProps> = ({ productTitle, images, imageUrl, productCode }) => {
    const [opened, { open, close }] = useDisclosure(false)
    const [activeSlideIndex, setActiveSlideIndex] = useState<number>(0)

    return (
        <>
            {/* modal for product image (gallery) */}
            <Modal
                size={1200}
                classNames={{ body: 'p-0' }}
                centered
                opened={opened}
                onClose={close}
                withCloseButton={false}
            >
                <ProductImagesModal
                    close={close}
                    productTitle={productTitle}
                    activeSlideIndex={activeSlideIndex}
                    images={images}
                    productCode={productCode}
                />
            </Modal>

            <div className='flex flex-row justify-center gap-x-4 '>
                {/* thumbnails */}
                <div className='flex flex-col gap-y-4'>
                    {images.slice(0, 4).map((image, index) => (
                        <div
                            key={image.id}
                            onClick={() => {
                                open()
                                setActiveSlideIndex(index === 3 ? 0 : index)
                            }}
                            className='border-2 p-0.5 relative cursor-pointer rounded-[7px] hover:border-red-400 duration-100'
                        >
                            <figure
                                className={`w-12 h-12 select-none rounded-[4px] overflow-hidden text-center relative ${
                                    index === 3 ? 'blur-sm' : ''
                                }`}
                            >
                                <NextImage
                                    sizes='(max-width: 640px) 40vw, (min-width: 640px) 60vw'
                                    fill
                                    src={image.url}
                                    alt={productTitle}
                                    priority
                                    className=''
                                />
                            </figure>
                            {index === 3 && (
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
                    className='w-80 h-80 relative cursor-pointer'
                >
                    <NextImage sizes='80vw' className='object-contain' fill src={imageUrl} alt={productTitle} />
                </figure>
            </div>
        </>
    )
}

export default memo(ProductImages)
