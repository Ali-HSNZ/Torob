import { forwardRef } from 'react'
import { Checkbox, type CheckboxProps, createPolymorphicComponent } from '@mantine/core'

const CustomCheckbox = forwardRef<HTMLInputElement, CheckboxProps>(({ className, ...res }, ref) => {
    return <Checkbox className={className} ref={ref} {...res} />
})

CustomCheckbox.displayName = 'Checkbox'

const CCheckbox = createPolymorphicComponent<'input', CheckboxProps>(CustomCheckbox)

export default CCheckbox
