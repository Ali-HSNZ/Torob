import { type FC } from 'react'

const ProductDetailStores: FC = () => {
    return (
        <section>
            <h2 className='text-lg font-medium'>Stores</h2>
            <ul className='flex flex-col gap-y-4 mt-4'>
                <li className='p-4 bg-white'>
                    <h2>store name</h2>
                </li>
                <li className='p-4 bg-white'>
                    <h2>store name</h2>
                </li>
                <li className='p-4 bg-white'>
                    <h2>store name</h2>
                </li>
                <li className='p-4 bg-white'>
                    <h2>store name</h2>
                </li>
            </ul>
        </section>
    )
}

export default ProductDetailStores
