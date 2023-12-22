import { forwardRef } from 'react'
import { createPolymorphicComponent, RangeSlider, type RangeSliderProps } from '@mantine/core'

const CustomRangeSlider = forwardRef<HTMLDivElement, RangeSliderProps>(({ className, ...res }, ref) => {
    return <RangeSlider ref={ref} className={`${className}`} {...res} />
})

CustomRangeSlider.displayName = 'RangeSlider'

const CRangeSlider = createPolymorphicComponent<'div', RangeSliderProps>(CustomRangeSlider)

export default CRangeSlider
