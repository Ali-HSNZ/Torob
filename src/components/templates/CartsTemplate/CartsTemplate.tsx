import { type FC } from 'react'

import { ShoppingCart } from '@organisms/CartOrganisms/ShoppingCart'
import { CartSummary } from '@organisms/CartOrganisms/Summary'

const CartsTemplate: FC = () => {
    return (
        <main className='w-full grid grid-cols-3 gap-4 p-4 h-[calc(100%-117px)]'>
            <ShoppingCart />
            <CartSummary />
        </main>
    )
}

export default CartsTemplate
