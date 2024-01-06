import { forwardRef } from 'react'
import { ActionIcon, type ActionIconProps, createPolymorphicComponent } from '@mantine/core'

const CustomActionIcon = forwardRef<HTMLButtonElement, ActionIconProps>(({ children, className = '', ...res }, ref) => {
    return (
        <ActionIcon className={`focus:outline-none ${className}`} {...res} ref={ref}>
            {children}
        </ActionIcon>
    )
})

CustomActionIcon.displayName = 'ActionIcon'

const CActionIcon = createPolymorphicComponent<'button', ActionIconProps>(CustomActionIcon)

export default CActionIcon
