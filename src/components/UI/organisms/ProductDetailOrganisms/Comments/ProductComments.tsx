import { type FC, memo } from 'react'

import { STATIC_PRODUCTS_DATA } from '@core/constants/data/products'

import { type IProductCommentsProps, SingleComment } from './resources'

const ProductComments: FC<IProductCommentsProps> = ({ productCode }) => {
    const product = STATIC_PRODUCTS_DATA.find((e) => e.code === productCode)

    if (product)
        return (
            <section id='comment-list' className='pt-4'>
                <p className='text-base font-medium'>Comments</p>

                {/* comments list */}
                <div className='flex flex-col gap-y-4'>
                    {product.comments.map((comment) => (
                        <SingleComment key={comment.id} comment={comment} />
                    ))}
                </div>
            </section>
        )
}

export default memo(ProductComments)
