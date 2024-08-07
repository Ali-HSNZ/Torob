import { type FC, memo } from 'react'
import { IconBuildingStore, IconTruckDelivery, IconUser } from '@tabler/icons-react'
import { IconShieldCheck } from '@tabler/icons-react'
import { IconShoppingBag } from '@tabler/icons-react'

import { CButton } from '@atoms/Button'

import { type IProductDetailStoresProps } from './resources'

const ProductDetailStores: FC<IProductDetailStoresProps> = () => {
    return (
        <section id='store_list' className='pt-4'>
            <p className='text-base font-medium'>Stores</p>
            <ul className='flex flex-col gap-y-4 mt-4'>
                {[1, 2, 3, 4].map((e) => (
                    <li key={e} className='p-4 flex h-full flex-col sm:flex-row  gap-4 justify-between bg-white'>
                        <div className='grid  w-full grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4 justify-between items-center'>
                            <div className='flex gap-2'>
                                <IconBuildingStore className='shrink-0' stroke={1} />
                                <div className='flex flex-col gap-y-1 items-start'>
                                    <p className='font-medium text-sm'>Atlas</p>
                                    <div className='flex gap-x-1'>
                                        <div className='text-xs flex gap-x-1 font-medium text-gray-500'>
                                            <p className='text-green-600'>91%</p>
                                            <p>Satisfaction</p>
                                        </div>
                                        <div className='text-xs flex gap-x-1 font-medium text-gray-500'>
                                            <p className='text-green-600'>Excellent</p>
                                            <p>performance</p>
                                        </div>
                                    </div>
                                    <p className='font-medium text-xs text-gray-500'>5 pieces in stock</p>
                                </div>
                            </div>

                            <div>
                                <div className='flex gap-1.5 text-sm h-full md:justify-start xl:items-center '>
                                    <IconTruckDelivery size={20} stroke={1} />
                                    <p className='pb-1.5'>sending torob in 1 working days</p>
                                </div>
                                <div className='flex gap-1.5 text-sm h-full md:justify-start xl:items-center '>
                                    <IconUser size={20} stroke={1} />
                                    <p className='pb-1.5'>sending seller</p>
                                </div>
                            </div>

                            <div className='flex gap-x-2 lg:col-span-2 xl:col-span-1 items-center'>
                                <IconShieldCheck size={20} stroke={2} className='text-green-600 shrink-0' />
                                <p className='text-sm'>Guarantee of authenticity and physical health of goods</p>
                            </div>
                        </div>

                        <div className='flex flex-col-reverse sm:flex-col items-start sm:items-center gap-y-4'>
                            <CButton leftSection={<IconShoppingBag />} className='shrink-0 w-full sm:w-fit'>
                                Add to cart
                            </CButton>
                            <span className='font-semibold text-sm'>${Intl.NumberFormat('en-us').format(654654)}</span>
                        </div>
                    </li>
                ))}
            </ul>
        </section>
    )
}

export default memo(ProductDetailStores)
