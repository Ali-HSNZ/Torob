import { type FC, useState } from 'react'
import { IconMinus, IconPlus, IconTrash } from '@tabler/icons-react'

import { CActionIcon } from '@atoms/ActionIcon'
import { NextImage } from '@atoms/Image'

import { type IShoppingCartItemProps } from './resources'

const ShoppingCartItem: FC<IShoppingCartItemProps> = ({ product, className }) => {
    const [counter, setCounter] = useState(Number(product.cart))
    return (
        <div className={`flex flex-col gap-y-4 ${className}`}>
            <div className=' w-full gap-4 items-center'>
                <div className='flex gap-4 flex-col sm:flex-row items-center'>
                    <div className='relative shrink-0 h-16 w-16'>
                        <NextImage
                            src={product.image}
                            fill
                            className='object-contain aspect-square'
                            alt={product.title}
                        />
                    </div>
                    <div className='flex w-full flex-col gap-y-1 '>
                        <div className='flex justify-between'>
                            <p className='text-sm sm:text-base font-bold'>{product.title}</p>
                            <CActionIcon size={'sm'} variant='subtle'>
                                <IconTrash />
                            </CActionIcon>
                        </div>
                        {product.moreDetail.map((item, index) => (
                            <div key={index} className='flex gap-x-1 items-center'>
                                <span className='text-[10px] capitalize'>{item.label}:</span>
                                <span className='text-xs font-semibold lowercase'>{item.value}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <div className='flex gap-x-6  w-full  items-center justify-between'>
                <div className='flex items-end '>
                    <p
                        className={` text-center duration-200 text-xs sm:text-sm font-semibold ${
                            counter > 1 ? 'scale-75' : 'scale-100'
                        }`}
                    >
                        ${Intl.NumberFormat('en-us').format(product.price)}
                    </p>

                    <p
                        className={`font-semibold duration-200 text-center text-xs sm:text-sm ${
                            counter > 1 ? 'scale-105' : 'scale-0'
                        }`}
                    >
                        (${Intl.NumberFormat('en-us').format(counter * product.price)})
                    </p>
                </div>

                <div className='flex  items-center justify-center gap-1'>
                    <CActionIcon
                        size={'sm'}
                        onClick={() => setCounter((prev) => (prev >= 2 ? prev - 1 : prev))}
                        variant='subtle'
                    >
                        <IconMinus size={22} />
                    </CActionIcon>
                    <p className='font-medium w-5 text-center  text-sm sm:text-base px-1'>{counter}</p>
                    <CActionIcon size={'sm'} onClick={() => setCounter((prev) => prev + 1)} variant='subtle'>
                        <IconPlus size={22} />
                    </CActionIcon>
                </div>
            </div>
        </div>
    )
}

export default ShoppingCartItem
