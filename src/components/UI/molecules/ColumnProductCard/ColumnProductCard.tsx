import React, { type FC } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { IconBell, IconHeart, IconShoppingBagPlus } from '@tabler/icons-react'
import { IconShare } from '@tabler/icons-react'

import { CActionIcon } from '@atoms/ActionIcon'
import { CButton } from '@atoms/Button'
import { CRating } from '@atoms/Rating'

import { Routes } from '@core/constants/routes'
import { textToSlug } from '@core/utils/common/textToSlug'

import { type IColumnProductCardProps } from './resources'

const ColumnProductCard: FC<IColumnProductCardProps> = ({ product }) => {
    return (
        <section className='bg-white flex flex-col justify-between items-start shadow-sm h-auto w-full p-4'>
            {/* image */}
            <Link className='flex flex-col' href={Routes.ProductDetail(product.code, textToSlug(product.title))}>
                <div className=' w-full flex justify-center items-center '>
                    <figure className='h-28 w-28 relative '>
                        <Image
                            sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
                            alt={product.title}
                            fill
                            className='object-contain'
                            src={product.image}
                        />
                    </figure>
                </div>

                <div className='w-full h-full flex justify-between flex-col '>
                    {/* name */}
                    <p className='text-sm mt-5 text-gray-700 font-bold line-clamp-3'>{product.title}</p>

                    <div className='w-full'>
                        {/* Rating */}
                        <CRating
                            className='mt-4'
                            classNames={{ label: 'cursor-pointer' }}
                            readOnly
                            value={1.5}
                            fractions={2}
                        />

                        {/* price */}
                        <p className='text-xs mt-4 text-gray-500 font-bold'>From ${product.price}</p>

                        <div className='flex mt-3 justify-between items-center'>
                            {/* store count */}
                            <p className='text-sm text-gray-400 font-medium'>in {product.storeCount} store</p>

                            {/* Actions */}
                            <div className='flex items-center gap-x-2'>
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
                        </div>
                    </div>
                </div>
            </Link>

            <CButton
                className='mt-4 text-gray-500 flex-shrink-0'
                leftSection={<IconShoppingBagPlus size={20} />}
                variant='outline'
                color='gray'
                fullWidth
            >
                Add to cart
            </CButton>
        </section>
    )
}

export default ColumnProductCard
