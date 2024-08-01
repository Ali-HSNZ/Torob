import { type FC, memo } from 'react'
import { IconAlertCircleFilled } from '@tabler/icons-react'

import { STATIC_PRODUCTS_DATA } from '@core/constants/data/products'

import { type IProductDescriptionProps } from './resources'

const ProductDescription: FC<IProductDescriptionProps> = ({ productCode }) => {
    const product = STATIC_PRODUCTS_DATA.find((e) => e.code === productCode)

    if (product)
        return (
            <section className='bg-white p-4 mt-4'>
                <span className='text-sm'>{product.description}</span>

                <div className='mt-4 flex items-center bg-gray-100 p-1.5 gap-1.5'>
                    <IconAlertCircleFilled size={18} className='shrink-0 ' />
                    <div className='flex flex-col gap-y-1'>
                        <p className='text-sm font-semibold'>Mony-Back</p>
                        <p className='text-xs text-gray-800'>
                            The request to return the goods in the mouse group (consultation) with the reason of
                            cancellation of the purchase can only be approved if the goods are in their original
                            condition (if they are sealed, the goods must not have been opened).
                        </p>
                    </div>
                </div>
            </section>
        )
}

export default memo(ProductDescription)
