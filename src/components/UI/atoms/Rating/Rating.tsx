import { forwardRef } from 'react'
import { createPolymorphicComponent, Rating, type RatingProps } from '@mantine/core'

const CustomRating = forwardRef<HTMLDivElement, RatingProps>(({ className, ...res }, ref) => {
    return <Rating ref={ref} className={`${className}`} {...res} />
})

CustomRating.displayName = 'Rating'

const CRating = createPolymorphicComponent<'div', RatingProps>(CustomRating)

export default CRating
