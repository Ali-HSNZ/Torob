import { ShoppingCartItem, STATIC_SHOPPING_CART_DATA } from './resources'

const ShoppingCart = () => {
    return (
        <div className='lg:col-span-3 bg-white border border-gray-100 rounded-l-xl overflow-hidden pb-4 px-4 flex overflow-y-auto h-full flex-col gap-4 flex-1'>
            <div className='flex flex-col z-10 pt-4 gap-4 sticky top-0 bg-white'>
                <p className='text-base font-bold'>Shopping Cart</p>
                <hr />
            </div>
            <div className='flex flex-col gap-y-4 divide-y divide-gray-200'>
                {STATIC_SHOPPING_CART_DATA.map((product) => (
                    <ShoppingCartItem key={product.id} product={product} className='last:pt-4' />
                ))}
            </div>
        </div>
    )
}

export default ShoppingCart
