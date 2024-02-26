import { type FC } from 'react'

const ProductProperties: FC = () => {
    return (
        <section id='product_properties_list'>
            <h2 className='text-base font-medium'>Properties</h2>

            <div className='mt-4 text-sm grid gap-2'>
                <div className='w-full grid grid-cols-2'>
                    <div className='w-full p-4 border border-gray-100 border-r-0 bg-gray-50'>weight</div>
                    <div className='w-full p-4 bg-white'>2.320</div>
                </div>
                <div className='w-full grid grid-cols-2'>
                    <div className='w-full p-4 border border-gray-100 border-r-0 bg-gray-50'>Dimensions</div>
                    <div className='w-full p-4 bg-white'>19.9 x 235 x 360 mm</div>
                </div>
                <div className='w-full grid grid-cols-2'>
                    <div className='w-full p-4 border border-gray-100 border-r-0 bg-gray-50'>
                        Processor manufacturer
                    </div>
                    <div className='w-full p-4 bg-white'>Intel</div>
                </div>
                <div className='w-full grid grid-cols-2'>
                    <div className='w-full p-4 border border-gray-100 border-r-0 bg-gray-50'>Processor series</div>
                    <div className='w-full p-4 bg-white'>Core i7</div>
                </div>
                <div className='w-full grid grid-cols-2'>
                    <div className='w-full p-4 border border-gray-100 border-r-0 bg-gray-50'>Processor model</div>
                    <div className='w-full p-4 bg-white'>1165G7</div>
                </div>
                <div className='w-full grid grid-cols-2'>
                    <div className='w-full p-4 border border-gray-100 border-r-0 bg-gray-50'>Processor speed range</div>
                    <div className='w-full p-4 bg-white'>2.8 GHz and above</div>
                </div>
                <div className='w-full grid grid-cols-2'>
                    <div className='w-full p-4 border border-gray-100 border-r-0 bg-gray-50'>Processor frequency</div>
                    <div className='w-full p-4 bg-white'>2.8 to 4.8 GHz</div>
                </div>
            </div>
        </section>
    )
}

export default ProductProperties
