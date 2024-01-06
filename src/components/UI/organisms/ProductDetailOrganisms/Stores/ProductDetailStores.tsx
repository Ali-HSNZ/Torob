import { type FC } from 'react'
import { IconBuildingStore, IconTruckDelivery } from '@tabler/icons-react'
import { IconShieldCheck } from '@tabler/icons-react'

import { CButton } from '@atoms/Button'

const ProductDetailStores: FC = () => {
    return (
        <section id='store_list'>
            <h2 className='text-lg font-medium'>Stores</h2>
            <ul className='flex flex-col gap-y-4 mt-4'>
                {[1, 2, 3, 4, 5, 6, 7, 8].map((e) => (
                    <li key={e} className='p-4 flex items-center gap-x-4 justify-between bg-white'>
                        <div className='grid grow grid-cols-4 gap-x-4 justify-between items-center'>
                            <div className='flex  gap-2'>
                                <IconBuildingStore stroke={1} />
                                <div className='flex flex-col gap-y-1 items-start'>
                                    <p className='font-medium text-lg'>Atlas</p>
                                    <div className='flex gap-x-2'>
                                        <div className='text-xs flex gap-x-1 font-medium text-gray-500'>
                                            <p className='text-yellow-600'>50%</p>
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

                            <div className='flex bg-gradient-to-r from-white to-100% w-fit py-1 px-2 to-gray-100 rounded-r-full border-r border-gray-300 gap-x-1 text-sm items-center '>
                                <p>sent in 3 working days</p>
                                <IconTruckDelivery stroke={1} />
                            </div>

                            <div className='flex gap-x-2  items-center'>
                                <IconShieldCheck className='text-green-600 shrink-0' />
                                <p className='text-sm font-medium '>
                                    Guarantee of authenticity and physical health of goods
                                </p>
                            </div>

                            <p className='text-center text-lg font-medium'>
                                ${Intl.NumberFormat('en-us').format(654654)}
                            </p>
                        </div>
                        <CButton className='shrink-0'>Add to card </CButton>
                    </li>
                ))}
            </ul>
        </section>
    )
}

export default ProductDetailStores
