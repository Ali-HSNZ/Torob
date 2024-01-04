'use client'

import { type FC, useState } from 'react'
import Image from 'next/image'
import { STATIC_PRODUCT_DETAIL } from '..'
import { IconPlus, IconStarFilled } from '@tabler/icons-react'

import { CButton } from '@atoms/Button'

const ProductDetail: FC = () => {
    const [minPrice, maxPrice] = STATIC_PRODUCT_DETAIL.priceRange
    const [selectedColor, setSelectedColor] = useState(STATIC_PRODUCT_DETAIL.colors[0])
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
                    <h1 className='font-semibold text-sm'>{STATIC_PRODUCT_DETAIL.title}</h1>

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
                                console.log(color.hex)

                                return (
                                    <div
                                        onClick={() => setSelectedColor(color)}
                                        style={{ backgroundColor: color.hex }}
                                        key={color.id}
                                        className={`w-9 cursor-pointer h-4 ring-2 z-[1] ring-offset-2 rounded-full ${
                                            selectedColor.title === color.title ? 'ring-gray-500' : 'ring-gray-300'
                                        }`}
                                    ></div>
                                )
                            })}
                        </div>
                    </div>
                </div>
            </div>

            <div className='w-full mt-4 bg-gray-50 p-2 rounded-lg flex items-center justify-between'>
                <div className='font-medium text-sm flex items-end gap-x-2'>
                    <span className='text-xs text-gray-600'>From</span>
                    <span className='text-lg font-medium'>${Intl.NumberFormat('en-es').format(minPrice)}</span>
                    <span className='text-xs text-gray-600'>to</span>
                    <span className='text-lg font-medium'>${Intl.NumberFormat('en-es').format(maxPrice)}</span>
                </div>
                <CButton className='px-9 h-10'>Add To Cart</CButton>
            </div>
        </section>
    )
}

export default ProductDetail
