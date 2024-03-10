import { type FC } from 'react'

import { ShoppingCartItem, STATIC_SHOPPING_CART_DATA } from './resources'

const ShoppingCart: FC = () => {
    return (
        <div className='lg:col-span-3 bg-white border border-gray-100 rounded-l-xl overflow-hidden pb-4 px-4 flex overflow-y-auto h-full flex-col gap-4 flex-1'>
            <div className='flex flex-col z-10 pt-4 gap-4 sticky top-0 bg-white'>
                <p className='text-base font-bold'>Shopping Cart</p>
                <hr />
            </div>
            <div className='flex flex-col '>
                {STATIC_SHOPPING_CART_DATA.map((product, index) => (
                    <div key={product.id} className=''>
                        {index !== 0 && <hr />}
                        <div className={`${index === 0 ? 'pb-4' : 'py-4'}`}>
                            <ShoppingCartItem product={product} />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default ShoppingCart
