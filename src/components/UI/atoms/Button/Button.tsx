import { forwardRef } from 'react'
import { Button, type ButtonProps, createPolymorphicComponent } from '@mantine/core'

const CustomButton = forwardRef<HTMLButtonElement, ButtonProps>(({ className, classNames, children, ...res }, ref) => {
    return (
        <Button ref={ref} classNames={{ ...classNames }} className={`b focus:outline-none ${className}`} {...res}>
            {children}
        </Button>
    )
})

CustomButton.displayName = 'Button'
const CButton = createPolymorphicComponent<'button', ButtonProps>(CustomButton)

export default CButton
