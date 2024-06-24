import { type FC, memo } from 'react'
import { Modal } from '@mantine/core'
import { useDisclosure } from '@mantine/hooks'
import { IconMessage } from '@tabler/icons-react'

import { CButton } from '@atoms/Button'

import { STATIC_PRODUCTS_DATA } from '@core/constants/data/products'

import { type IProductCommentsProps, ProductCommentForm, SingleComment } from './resources'

const ProductComments: FC<IProductCommentsProps> = ({ productCode }) => {
    const product = STATIC_PRODUCTS_DATA.find((e) => e.code === productCode)

    const [opened, { open, close }] = useDisclosure(false)

    if (product)
        return (
            <>
                <section id='comment-list' className='pt-4'>
                    <div className='flex justify-between items-center'>
                        <p className='text-base font-medium'>Comments</p>
                        <CButton onClick={open} variant='subtle' leftSection={<IconMessage />}>
                            Add new comment
                        </CButton>
                    </div>

                    <div className='flex justify-between'>
                        {/* comments list */}
                        <div className='flex flex-col gap-y-4'>
                            {product.comments.map((comment) => (
                                <SingleComment key={comment.id} comment={comment} />
                            ))}
                        </div>
                    </div>
                </section>

                <Modal
                    classNames={{ body: 'p-0' }}
                    centered
                    opened={opened}
                    onClose={close}
                    title='My point of view and score'
                >
                    <ProductCommentForm />
                </Modal>
            </>
        )
}

export default memo(ProductComments)
