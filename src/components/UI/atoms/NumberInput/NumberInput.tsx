import { forwardRef } from 'react'
import { createPolymorphicComponent, NumberInput, type NumberInputProps } from '@mantine/core'

const CustomNumberInput = forwardRef<HTMLInputElement, NumberInputProps>(({ className, ...res }, ref) => {
    return <NumberInput ref={ref} className={`${className}`} {...res} />
})

CustomNumberInput.displayName = 'NumberInput'

const CNumberInput = createPolymorphicComponent<'input', NumberInputProps>(CustomNumberInput)

export default CNumberInput
