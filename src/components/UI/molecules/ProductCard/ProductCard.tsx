import React from 'react'
import Image from 'next/image'

const ProductCard = () => {
    return (
        <section className='bg-white shadow-sm h-80 w-full p-4'>
            <div className='w-full flex justify-center items-center '>
                <figure className='h-44 w-48 relative '>
                    <Image
                        alt=''
                        fill
                        className='object-contain'
                        src={'https://image.torob.com/base/images/1W/W4/1WW4TUka-3gM1Ev6.jpg_/280x280.webp'}
                    />
                </figure>
            </div>
        </section>
    )
}

export default ProductCard
