import { type FC } from 'react'
import { STATIC_PRODUCT_DETAIL } from '..'

const ProductDescription: FC = () => {
    return (
        <section className='w-full bg-white p-4 flex flex-col gap-y-1'>
            <p className='font-medium'>Description:</p>
            <span className='text-sm'>{STATIC_PRODUCT_DETAIL.description}</span>
        </section>
    )
}

export default ProductDescription
