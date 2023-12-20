import { forwardRef } from 'react'
import { createPolymorphicComponent, TextInput, type TextInputProps } from '@mantine/core'

const CustomTextInput = forwardRef<HTMLInputElement, TextInputProps>(({ className, ...res }, ref) => {
    return <TextInput className={className} ref={ref} {...res} />
})

CustomTextInput.displayName = 'TextInput'

const CTextInput = createPolymorphicComponent<'input', TextInputProps>(CustomTextInput)

export default CTextInput
