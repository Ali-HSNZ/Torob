import { type FC, useState } from 'react'
import Image from 'next/image'
import { IconMinus, IconPlus, IconTrash } from '@tabler/icons-react'

import { CActionIcon } from '@atoms/ActionIcon'

import product_image from '@public/images/products/phone_1.jpg'

const ShoppingCart: FC = () => {
    const [counter, setCounter] = useState(1)

    return (
        <div className='lg:col-span-2 bg-white border border-gray-100 rounded-l-xl overflow-hidden pb-4 px-4 flex overflow-y-auto h-full flex-col gap-4 flex-1'>
            <div className='flex flex-col z-10 pt-4 gap-4 sticky top-0 bg-white'>
                <p className='text-base font-bold'>Shopping Cart</p>
                <hr />
            </div>

            {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map((e) => (
                <div key={e} className='flex items-center'>
                    <div className='grid  lg:grid-cols-8 w-full gap-4 items-center'>
                        <div className='flex col-span-6 gap-x-4 items-center'>
                            <div className='relative shrink-0 h-16 w-16'>
                                <Image
                                    src={product_image.src}
                                    fill
                                    className='object-contain  aspect-square'
                                    alt='product title'
                                />
                            </div>
                            <div>
                                <p className='text-xs'>Smart Phone</p>
                                <p className='text-sm font-medium'>
                                    TCL model 30 SE mobile phone with 128 GB capacity and 4 GB RAM
                                </p>
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

                        <p className='font-medium  text-center text-sm'>$14.5</p>
                    </div>
                    <div className='flex justify-end'>
                        <CActionIcon variant='subtle' size={'sm'}>
                            <IconTrash size={18} />
                        </CActionIcon>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default ShoppingCart
