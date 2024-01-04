'use client'

import { type FC, useState } from 'react'
import Image from 'next/image'
import { STATIC_PRODUCT_DETAIL } from '..'
import { IconStarFilled } from '@tabler/icons-react'
import { IconDots } from '@tabler/icons-react'

import { CButton } from '@atoms/Button'

const ProductDetail: FC = () => {
    const [selectedColor, setSelectedColor] = useState(STATIC_PRODUCT_DETAIL.colors[0])

    return (
        <section className='w-full bg-white p-4 '>
            <div className='w-full flex gap-x-4'>
                <div className='flex h-60 gap-x-4 '>
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
                    <figure className='h-full w-56 aspect-square relative'>
                        <Image
                            className='object-contain'
                            fill
                            src={STATIC_PRODUCT_DETAIL.image_url}
                            alt={STATIC_PRODUCT_DETAIL.title}
                        />
                    </figure>
                </div>

                <div className='flex flex-col gap-y-4'>
                    <h1 className='font-semibold'>{STATIC_PRODUCT_DETAIL.title}</h1>

                    <div className='flex flex-col gap-y-4'>
                        <div className='text-sm flex items-center gap-x-1'>
                            <IconStarFilled className=' text-yellow-500' size={15} />
                            <p className='font-semibold'>{STATIC_PRODUCT_DETAIL.rating.rate}</p>
                            <p className='text-gray-400'>
                                ({Intl.NumberFormat('en-es').format(STATIC_PRODUCT_DETAIL.rating.count)})
                            </p>
                        </div>

                        <div className='flex gap-x-4'>
                            <div className='text-sm text-red-600 flex gap-x-1'>
                                <p className='font-semibold'>
                                    {Intl.NumberFormat('en-es').format(STATIC_PRODUCT_DETAIL.comment)}
                                </p>
                                <p>comments</p>
                            </div>

                            <div className='text-sm text-red-600 flex gap-x-1'>
                                <p className='font-semibold'>
                                    {Intl.NumberFormat('en-es').format(STATIC_PRODUCT_DETAIL.question)}
                                </p>
                                <p>question</p>
                            </div>
                        </div>
                    </div>

                    <div>
                        <div className='flex font-semibold gap-x-1'>
                            <p>color:</p>
                            <p className='capitalize'>{selectedColor.title}</p>
                        </div>

                        <div className='flex gap-x-3 mt-3'>
                            {STATIC_PRODUCT_DETAIL.colors.map((color) => {
                                return (
                                    <div
                                        onClick={() => setSelectedColor(color)}
                                        style={{ backgroundColor: color.hex }}
                                        key={color.id}
                                        className={`w-9 cursor-pointer h-4 ring-2 z-[1] ring-offset-2 rounded-full ${
                                            selectedColor.title === color.title ? 'ring-gray-400' : 'ring-gray-300'
                                        }`}
                                    ></div>
                                )
                            })}
                        </div>
                    </div>

                    <div className='flex gap-x-1 items-end'>
                        <span className='text-sm text-gray-500'>in</span>
                        <span className='font-medium text-xl'>8</span>
                        <span className='text-sm text-gray-500'>stores</span>
                    </div>

                    <div className='flex gap-x-1 items-end'>
                        <span className='text-sm text-gray-500'>from</span>
                        <span className='font-medium text-xl'>
                            ${Intl.NumberFormat('en-us').format(STATIC_PRODUCT_DETAIL.priceRange.min)}
                        </span>

                        <span className='text-sm text-gray-500'>to</span>

                        <span className='font-medium text-xl'>
                            ${Intl.NumberFormat('en-us').format(STATIC_PRODUCT_DETAIL.priceRange.max)}
                        </span>
                    </div>
                </div>
            </div>

            <p className='font-semibold'>Description:</p>
            <span className='text-sm'>{STATIC_PRODUCT_DETAIL.description}</span>
        </section>
    )
}

export default ProductDetail
