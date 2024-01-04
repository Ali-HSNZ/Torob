import { forwardRef } from 'react'
import { createPolymorphicComponent, Tooltip, type TooltipProps } from '@mantine/core'

const CustomTooltip = forwardRef<HTMLDivElement, TooltipProps>(({ className, ...res }, ref) => {
    return <Tooltip ref={ref} className={`${className}`} {...res} />
})

CustomTooltip.displayName = 'Tooltip'

const CTooltip = createPolymorphicComponent<'div', TooltipProps>(CustomTooltip)

export default CTooltip
