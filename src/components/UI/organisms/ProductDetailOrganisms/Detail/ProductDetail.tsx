import { type FC } from 'react'
import { ActionIcon } from '@mantine/core'
import { IconBell, IconHeart, IconShare } from '@tabler/icons-react'

import { CButton } from '@atoms/Button'

const ProductDetail: FC = () => {
    return (
        <section className='w-full bg-white p-4 '>
            <div className='w-full flex gap-x-4'>
                <div className='flex h-60 gap-x-4 '>
                    <div className='flex flex-col gap-y-4'>
                        <div className='w-14 h-14 rounded-md text-center border'>1</div>
                        <div className='w-14 h-14 rounded-md text-center border'>2</div>
                        <div className='w-14 h-14 rounded-md text-center border'>+</div>
                    </div>
                    <div className='h-full w-72 border text-center rounded-sm'>photo</div>
                </div>

                <div className='flex flex-col gap-y-4'>
                    <h1 className='font-medium text-lg'>xioaomi x22 pro</h1>

                    <div className='flex gap-x-1'>
                        <span className='font-medium'>Brand:</span>
                        <span>Samsung</span>
                    </div>

                    <div className='flex gap-x-1'>
                        <span className='font-medium'>Category: </span>
                        <span>Digital / Mobile</span>
                    </div>

                    <h5 className='font-medium'> In 4 Stores</h5>

                    {/* Actions */}
                    <div className='flex items-center gap-x-2'>
                        {/* Share */}
                        <ActionIcon size={'sm'} className='text-gray-400' variant='transparent' color='dark'>
                            <IconShare />
                        </ActionIcon>

                        {/* Like */}
                        <ActionIcon size={'sm'} className='text-gray-400' variant='transparent' color='dark'>
                            <IconHeart />
                        </ActionIcon>

                        {/* Analyze */}
                        <ActionIcon size={'sm'} className='text-gray-400' variant='transparent' color='dark'>
                            <IconBell />
                        </ActionIcon>
                    </div>
                </div>
            </div>
            <div className='mt-4'>
                <p className='font-medium'>Description:</p>
                <h3 className=' mt-1 text-sm'>
                    t is a long established fact that a reader will be distracted by the readable content of a page when
                    looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal
                    distribution of letters, as opposed to using Content here, content here, making it look like
                    readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their
                    default model text, and a search for lorem ipsum will uncover many web sites still in their infancy.
                    Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected
                    humour and the like).
                </h3>
            </div>

            <div className='w-full mt-4 flex justify-between'>
                <span className='font-medium'>From 500 to 834</span>
                <CButton>Add To Cart</CButton>
            </div>
        </section>
    )
}

export default ProductDetail
