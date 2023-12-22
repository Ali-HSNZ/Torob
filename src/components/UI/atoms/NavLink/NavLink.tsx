import { forwardRef } from 'react'
import { createPolymorphicComponent, NavLink, type NavLinkProps } from '@mantine/core'

const CustomNavLink = forwardRef<HTMLAnchorElement, NavLinkProps>(({ className, ...res }, ref) => {
    return <NavLink ref={ref} className={`${className}`} {...res} />
})

CustomNavLink.displayName = 'NavLink'

const CNavLink = createPolymorphicComponent<'a', NavLinkProps>(CustomNavLink)

export default CNavLink
