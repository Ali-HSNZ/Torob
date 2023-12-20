import { type FC } from 'react'
import Image from 'next/image'
import { ActionIcon } from '@mantine/core'
import { STATIC_PRODUCT_DETAIL } from '..'
import { IconBell, IconHeart, IconPlus, IconShare } from '@tabler/icons-react'

import { CButton } from '@atoms/Button'

const ProductDetail: FC = () => {
    const [minPrice, maxPrice] = STATIC_PRODUCT_DETAIL.priceRange

    return (
        <section className='w-full bg-white p-4'>
            <div className='w-full flex gap-x-4'>
                <div className='flex h-60 gap-x-4 '>
                    <div className='flex flex-col gap-y-4'>
                        <figure className='w-14 h-14  rounded-md text-center relative'>
                            <Image fill src={STATIC_PRODUCT_DETAIL.image_url} alt={STATIC_PRODUCT_DETAIL.title} />
                        </figure>

                        <figure className='w-14 h-14  rounded-md text-center relative'>
                            <Image fill src={STATIC_PRODUCT_DETAIL.image_url} alt={STATIC_PRODUCT_DETAIL.title} />
                        </figure>

                        <CButton color='dark' variant='outline' className='w-14 h-14'>
                            <IconPlus size={20} stroke={1.4} />
                        </CButton>
                    </div>
                    <figure className='h-full w-72 relative'>
                        <Image
                            className='object-contain'
                            fill
                            src={STATIC_PRODUCT_DETAIL.image_url}
                            alt={STATIC_PRODUCT_DETAIL.title}
                        />
                    </figure>
                </div>

                <div className='flex flex-col gap-y-4'>
                    <h1 className='font-medium text-lg'>{STATIC_PRODUCT_DETAIL.title}</h1>

                    <div className='flex gap-x-1'>
                        <span className='font-medium'>Brand:</span>
                        <span>{STATIC_PRODUCT_DETAIL.brand}</span>
                    </div>

                    <div className='flex gap-x-1'>
                        <span className='font-medium'>Category: </span>
                        <span>{STATIC_PRODUCT_DETAIL.categories.map((e) => e.title).join('/ ')}</span>
                    </div>

                    <h5 className='font-medium'> In {STATIC_PRODUCT_DETAIL.storeCount} Stores</h5>

                    {/* Actions */}
                    <div className='flex  '>
                        {/* Share */}
                        <ActionIcon size={'lg'} className='text-gray-400' variant='transparent' color='dark'>
                            <IconShare />
                        </ActionIcon>

                        {/* Like */}
                        <ActionIcon size={'lg'} className='text-gray-400' variant='transparent' color='dark'>
                            <IconHeart />
                        </ActionIcon>

                        {/* Analyze */}
                        <ActionIcon size={'lg'} className='text-gray-400' variant='transparent' color='dark'>
                            <IconBell />
                        </ActionIcon>
                    </div>
                </div>
            </div>

            <div className='w-full mt-4 flex items-center justify-between'>
                <span className='font-medium'>
                    From {Intl.NumberFormat('en-es').format(minPrice)}$ to {Intl.NumberFormat('en-es').format(maxPrice)}
                    $
                </span>
                <CButton className='px-9 h-10'>Add To Cart</CButton>
            </div>
        </section>
    )
}

export default ProductDetail
