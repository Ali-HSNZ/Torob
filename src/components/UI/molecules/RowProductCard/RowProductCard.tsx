import React, { type FC } from 'react'
import Link from 'next/link'
import { IconBell, IconHeart, IconShoppingBagPlus } from '@tabler/icons-react'
import { IconShare } from '@tabler/icons-react'

import { CActionIcon } from '@atoms/ActionIcon'
import { CButton } from '@atoms/Button'
import { NextImage } from '@atoms/Image'
import { CRating } from '@atoms/Rating'

import { Routes } from '@core/constants/routes'
import { textToSlug } from '@core/utils/common/textToSlug'

import { type IRowProductCardProps } from './resources'

const RowProductCard: FC<IRowProductCardProps> = ({ product }) => {
    return (
        <section className='bg-white flex flex-col gap-x-4 gap-y-2 justify-between items-start shadow-sm h-auto w-full p-4'>
            <div className='w-full flex justify-between gap-x-4'>
                {/* image */}
                <div className=' w-fit flex justify-center items-center '>
                    <figure className='h-24 w-28 relative '>
                        <NextImage
                            sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
                            alt={product.title}
                            fill
                            className='object-contain'
                            src={product.image}
                        />
                    </figure>
                </div>

                <Link
                    href={Routes.ProductDetail(product.code, textToSlug(product.title))}
                    className='w-full flex flex-col gap-y-2'
                >
                    <div className='w-full h-full flex justify-between flex-col '>
                        {/* name */}
                        <p className='text-sm text-gray-700 font-bold line-clamp-3'>{product.title}</p>

                        <div className='w-full mt-2'>
                            {/* price */}
                            <p className='text-xs text-gray-500 font-bold'>From ${product.price}</p>

                            {/* store count */}
                            <p className='text-sm text-gray-400 mt-1 font-medium'>in {product.storeCount} store</p>
                        </div>
                        <CRating className='mt-2' readOnly value={1.5} fractions={2} />
                    </div>
                </Link>
            </div>

            {/* Actions */}
            <div className='flex w-full justify-between  flex-row items-end gap-x-2'>
                <div className='flex justify-end gap-x-2'>
                    {/* Share */}
                    <CActionIcon size={'sm'} className='text-gray-400' variant='transparent' color='dark'>
                        <IconShare />
                    </CActionIcon>

                    {/* Like */}
                    <CActionIcon size={'sm'} className='text-gray-400' variant='transparent' color='dark'>
                        <IconHeart />
                    </CActionIcon>

                    {/* Analyze */}
                    <CActionIcon size={'sm'} className='text-gray-400' variant='transparent' color='dark'>
                        <IconBell />
                    </CActionIcon>
                </div>

                <CButton
                    className='text-gray-500'
                    leftSection={<IconShoppingBagPlus size={20} />}
                    variant='outline'
                    color='gray'
                >
                    Add to cart
                </CButton>
            </div>
        </section>
    )
}

export default RowProductCard
