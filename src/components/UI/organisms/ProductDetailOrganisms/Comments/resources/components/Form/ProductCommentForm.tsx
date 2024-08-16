import { TagsInput } from '@mantine/core'

import { CButton } from '@atoms/Button'
import { CTextarea } from '@atoms/Textarea'
import { CTextInput } from '@atoms/TextInput'

const ProductCommentForm = () => {
    return (
        <section className='grid grid-cols-1 sm:grid-cols-2 px-4 gap-4 pb-4'>
            <CTextInput className='sm:col-span-2' label='Title' />

            <TagsInput label='Positive point (+)' />
            <TagsInput label='Negative point (-)' />

            <CTextarea rows={5} className='sm:col-span-2' label='Description' />
            <div className='sm:col-span-2 flex justify-end'>
                <CButton>Send</CButton>
            </div>
        </section>
    )
}

export default ProductCommentForm
