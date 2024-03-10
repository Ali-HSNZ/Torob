'use client'

import { type FC, useState } from 'react'
import Image from 'next/image'
import { IconAlertCircleFilled, IconStarFilled } from '@tabler/icons-react'
import { IconDots } from '@tabler/icons-react'

import { CActionIcon } from '@atoms/ActionIcon'
import { CButton } from '@atoms/Button'

import { STATIC_PRODUCTS_DATA } from '@core/constants/data/constants/products'

import { type IProductDetailProps } from './resources'

const ProductDetail: FC<IProductDetailProps> = ({ productCode }) => {
    const product = STATIC_PRODUCTS_DATA.find((e) => e.code === productCode)
    const [selectedColor, setSelectedColor] = useState(product?.colors[0])

    if (product && selectedColor)
        return (
            <section className='w-full bg-white p-4 '>
                <div className='w-full flex flex-col xl:flex-row gap-x-4'>
                    <div className='flex flex-row justify-center gap-x-4 '>
                        <div className='flex flex-col gap-y-4'>
                            <figure className='w-12 h-12 border rounded-md text-center relative'>
                                <Image fill src={product.image} alt={product.title} />
                            </figure>

                            <figure className='w-12 h-12 border rounded-md text-center relative'>
                                <Image fill src={product.image} alt={product.title} />
                            </figure>

                            <CButton color='dark' variant='outline' className='w-12 h-12'>
                                <IconDots stroke={2.4} />
                            </CButton>
                        </div>
                        <figure className='w-64 h-64 relative'>
                            <Image className='object-contain' fill src={product.image} alt={product.title} />
                        </figure>
                    </div>

                    <div className='flex flex-col gap-y-4'>
                        <h1 className='font-semibold text-sm'>{product.title}</h1>

                        <div className='flex flex-col gap-y-4'>
                            <div className='text-sm flex items-center gap-x-1'>
                                <IconStarFilled className=' text-yellow-500' size={15} />
                                <p className='font-bold'>{product.rating.rate}</p>
                                <p className='text-gray-400'>
                                    ({Intl.NumberFormat('en-es').format(product.rating.count)})
                                </p>
                            </div>

                            <div className='flex gap-x-4 text-red-600'>
                                <div className='text-sm flex gap-x-1'>
                                    <p className='font-bold'>{Intl.NumberFormat('en-es').format(product.comment)}</p>
                                    <p>comments</p>
                                </div>

                                <div className='text-sm flex gap-x-1'>
                                    <p className='font-bold'>{Intl.NumberFormat('en-es').format(product.question)}</p>
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
                                {product.colors.map((color) => {
                                    return (
                                        <CActionIcon
                                            size={'auto'}
                                            onClick={() => setSelectedColor(color)}
                                            style={{ backgroundColor: color.hex }}
                                            key={color.id}
                                            className={`w-9 cursor-pointer h-4 ring-2 z-[1] ring-offset-2  ${
                                                selectedColor.title === color.title ? 'ring-gray-500' : 'ring-gray-300'
                                            }`}
                                        />
                                    )
                                })}
                            </div>
                        </div>

                        <div className='flex gap-x-1 items-end '>
                            <span className='text-sm text-gray-500'>in</span>
                            <span className='font-bold text-base'>8</span>
                            <span className='text-sm text-gray-500'>stores</span>
                        </div>

                        <div className='flex gap-x-1 items-end'>
                            <span className='text-sm text-gray-500'>from</span>
                            <span className='font-bold text-base'>
                                ${Intl.NumberFormat('en-us').format(product.priceRange.min)}
                            </span>
                            <span className='text-sm text-gray-500'>to</span>

                            <span className='font-bold text-base'>
                                ${Intl.NumberFormat('en-us').format(product.priceRange.max)}
                            </span>
                        </div>
                    </div>
                </div>

                <div>
                    <p className='font-bold text-sm mt-4 xl:mt-0'>Description:</p>
                    <span className='text-sm'>{product.description}</span>
                </div>

                <div className='mt-4 flex items-center bg-gray-100 p-1.5 rounded-lg gap-1.5'>
                    <IconAlertCircleFilled size={17} className='shrink-0 ' />
                    <div className='flex flex-col gap-y-1'>
                        <p className='text-xs font-bold'>Mony-Back</p>
                        <p className='text-xs text-gray-500'>
                            The request to return the goods in the mouse group (consultation) with the reason of
                            cancellation of the purchase can only be approved if the goods are in their original
                            condition (if they are sealed, the goods must not have been opened).
                        </p>
                    </div>
                </div>
            </section>
        )
}

export default ProductDetail
