'use client'

import { type FC, useState } from 'react'
import Image from 'next/image'
import { STATIC_PRODUCT_DETAIL } from '..'
import { IconStarFilled } from '@tabler/icons-react'
import { IconDots } from '@tabler/icons-react'

import { CActionIcon } from '@atoms/ActionIcon'
import { CButton } from '@atoms/Button'

const ProductDetail: FC = () => {
    const [selectedColor, setSelectedColor] = useState(STATIC_PRODUCT_DETAIL.colors[0])

    return (
        <section className='w-full bg-white p-4 '>
            <div className='w-full flex flex-col xl:flex-row gap-x-4'>
                <div className='flex flex-row justify-center gap-x-4 '>
                    <div className='flex flex-col gap-y-4'>
                        <figure className='w-12 h-12 border rounded-md text-center relative'>
                            <Image fill src={STATIC_PRODUCT_DETAIL.image_url} alt={STATIC_PRODUCT_DETAIL.title} />
                        </figure>

                        <figure className='w-12 h-12 border rounded-md text-center relative'>
                            <Image fill src={STATIC_PRODUCT_DETAIL.image_url} alt={STATIC_PRODUCT_DETAIL.title} />
                        </figure>

                        <CButton color='dark' variant='outline' className='w-12 h-12'>
                            <IconDots stroke={2.4} />
                        </CButton>
                    </div>
                    <figure className='w-56 h-56 relative'>
                        <Image
                            className='object-contain'
                            fill
                            src={STATIC_PRODUCT_DETAIL.image_url}
                            alt={STATIC_PRODUCT_DETAIL.title}
                        />
                    </figure>
                </div>

                <div className='flex flex-col gap-y-4'>
                    <h1 className='font-semibold text-sm'>{STATIC_PRODUCT_DETAIL.title}</h1>

                    <div className='flex flex-col gap-y-4'>
                        <div className='text-sm flex items-center gap-x-1'>
                            <IconStarFilled className=' text-yellow-500' size={15} />
                            <p className='font-bold'>{STATIC_PRODUCT_DETAIL.rating.rate}</p>
                            <p className='text-gray-400'>
                                ({Intl.NumberFormat('en-es').format(STATIC_PRODUCT_DETAIL.rating.count)})
                            </p>
                        </div>

                        <div className='flex gap-x-4 text-red-600'>
                            <div className='text-sm flex gap-x-1'>
                                <p className='font-bold'>
                                    {Intl.NumberFormat('en-es').format(STATIC_PRODUCT_DETAIL.comment)}
                                </p>
                                <p>comments</p>
                            </div>

                            <div className='text-sm flex gap-x-1'>
                                <p className='font-bold'>
                                    {Intl.NumberFormat('en-es').format(STATIC_PRODUCT_DETAIL.question)}
                                </p>
                                <p>question</p>
                            </div>
                        </div>
                    </div>

                    <div>
                        <div className='flex gap-x-1 text-sm'>
                            <span className='text-sm text-gray-500'>color:</span>
                            <p className='capitalize font-bold'>{selectedColor.title}</p>
                        </div>

                        <div className='flex gap-x-3 mt-2'>
                            {STATIC_PRODUCT_DETAIL.colors.map((color) => {
                                return (
                                    <CActionIcon
                                        size={'auto'}
                                        onClick={() => setSelectedColor(color)}
                                        style={{ backgroundColor: color.hex }}
                                        key={color.id}
                                        className={`w-9 cursor-pointer h-4 ring-2 z-[1] ring-offset-2 rounded-lg ${
                                            selectedColor.title === color.title ? 'ring-gray-400' : 'ring-gray-300'
                                        }`}
                                    />
                                )
                            })}
                        </div>
                    </div>

                    <div className='flex gap-x-1 items-end'>
                        <span className='text-sm text-gray-500'>in</span>
                        <span className='font-bold text-base'>8</span>
                        <span className='text-sm text-gray-500'>stores</span>
                    </div>

                    <div className='flex gap-x-1 items-end'>
                        <span className='text-sm text-gray-500'>from</span>
                        <span className='font-bold text-base'>
                            ${Intl.NumberFormat('en-us').format(STATIC_PRODUCT_DETAIL.priceRange.min)}
                        </span>
                        <span className='text-sm text-gray-500'>to</span>

                        <span className='font-bold text-base'>
                            ${Intl.NumberFormat('en-us').format(STATIC_PRODUCT_DETAIL.priceRange.max)}
                        </span>
                    </div>
                </div>
            </div>

            <p className='font-bold text-sm mt-4 xl:mt-0'>Description:</p>
            <span className='text-sm'>{STATIC_PRODUCT_DETAIL.description}</span>
        </section>
    )
}

export default ProductDetail
