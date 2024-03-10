import { type FC, useState } from 'react'
import Image from 'next/image'
import { IconMinus, IconPlus, IconTrash } from '@tabler/icons-react'

import { CActionIcon } from '@atoms/ActionIcon'

import { type IShoppingCartItemProps } from './resources'

const ShoppingCartItem: FC<IShoppingCartItemProps> = ({ product }) => {
    const [counter, setCounter] = useState(Number(product.cart))

    return (
        <div className='flex items-center'>
            <div className='grid  lg:grid-cols-8 w-full gap-4 items-center'>
                <div className='flex col-span-6 gap-x-4 items-center'>
                    <div className='relative shrink-0 h-16 w-16'>
                        <Image src={product.image} fill className='object-contain aspect-square' alt={product.title} />
                    </div>
                    <div>
                        <p className='text-xs'>{product.category}</p>
                        <p className='text-sm font-medium'>{product.title}</p>
                    </div>
                </div>
                <div className='flex  items-center justify-center gap-1'>
                    <CActionIcon
                        size={'sm'}
                        onClick={() => setCounter((prev) => (prev >= 2 ? prev - 1 : prev))}
                        variant='subtle'
                    >
                        <IconMinus size={18} />
                    </CActionIcon>
                    <p className='font-medium w-5 text-center  text-sm px-1'>{counter}</p>
                    <CActionIcon size={'sm'} onClick={() => setCounter((prev) => prev + 1)} variant='subtle'>
                        <IconPlus size={18} />
                    </CActionIcon>
                </div>

                <p className='font-medium  text-center text-sm'>${Intl.NumberFormat('en-us').format(product.price)}</p>
            </div>
            <div className='flex justify-end'>
                <CActionIcon variant='subtle' size={'sm'}>
                    <IconTrash size={18} />
                </CActionIcon>
            </div>
        </div>
    )
}

export default ShoppingCartItem
