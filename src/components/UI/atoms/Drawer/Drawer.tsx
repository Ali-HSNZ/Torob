import { forwardRef } from 'react'
import { createPolymorphicComponent, Drawer, type DrawerProps } from '@mantine/core'

const CustomDrawer = forwardRef<HTMLDivElement, DrawerProps>(({ className, ...res }, ref) => {
    return <Drawer ref={ref} className={`${className}`} {...res} />
})

CustomDrawer.displayName = 'Drawer'

const CDrawer = createPolymorphicComponent<'div', DrawerProps>(CustomDrawer)

export default CDrawer
