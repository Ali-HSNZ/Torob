import { type FC } from 'react'

import { ShoppingCartItem, STATIC_SHOPPING_CART_DATA } from './resources'

const ShoppingCart: FC = () => {
    return (
        <div className='lg:col-span-2 bg-white border border-gray-100 rounded-l-xl overflow-hidden pb-4 px-4 flex overflow-y-auto h-full flex-col gap-4 flex-1'>
            <div className='flex flex-col z-10 pt-4 gap-4 sticky top-0 bg-white'>
                <p className='text-base font-bold'>Shopping Cart</p>
                <hr />
            </div>

            {STATIC_SHOPPING_CART_DATA.map((product) => (
                <ShoppingCartItem key={product.id} product={product} />
            ))}
        </div>
    )
}

export default ShoppingCart
