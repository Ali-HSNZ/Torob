import { type FC } from 'react'
import Image from 'next/image'
import { Modal } from '@mantine/core'
import { useDisclosure } from '@mantine/hooks'
import { IconDots } from '@tabler/icons-react'

import { type IProductImagesProps, ProductImagesModal } from './resources'

const ProductImages: FC<IProductImagesProps> = ({ productTitle, images, imageUrl }) => {
    const [opened, { open, close }] = useDisclosure(false)

    return (
        <>
            <Modal size={1000} centered opened={opened} onClose={close} withCloseButton={false}>
                <ProductImagesModal key={0} close={close} open={open} imageUrl={imageUrl} productTitle={productTitle} />
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
