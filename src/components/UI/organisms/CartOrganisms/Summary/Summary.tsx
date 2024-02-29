import { type FC } from 'react'

import { CButton } from '@atoms/Button'
import { CTextInput } from '@atoms/TextInput'

const CartSummary: FC = () => {
    return (
        <div className='py-4 flex flex-col gap-4 flex-1'>
            <p className='text-base font-bold'>Summary</p>

            <hr />

            <div className='flex h-full justify-between flex-col'>
                <div className='flex flex-col gap-y-4'>
                    <div className='flex justify-between'>
                        <p className='font-semibold text-sm'>3 ITEMS</p>
                        <p className='font-semibold text-sm'>$72.5</p>
                    </div>

                    <div className='flex justify-between'>
                        <p className='font-semibold text-sm'>Discount</p>
                        <p className='font-semibold text-sm'>$2.00</p>
                    </div>

                    <div className='flex justify-between'>
                        <p className='font-semibold text-sm'>Tax</p>
                        <p className='font-semibold text-sm'>$0.00</p>
                    </div>

                    <CTextInput label='Enter your coupon if you have one' />
                </div>
                <div className='flex flex-col gap-4'>
                    <hr />

                    <div className='flex justify-between'>
                        <p className='font-bold text-base'>TOTAL PRICE</p>
                        <p className='font-bold text-base'> $137.00</p>
                    </div>

                    <CButton fullWidth className='font-bold'>
                        CHECKOUT
                    </CButton>
                </div>
            </div>
        </div>
    )
}

export default CartSummary
