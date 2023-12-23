import { type FC } from 'react'
import { Popover, type PopoverDropdownProps } from '@mantine/core'

const PopoverDropdown: FC<PopoverDropdownProps> = ({ children, ...res }) => {
    return <Popover.Dropdown {...res}>{children}</Popover.Dropdown>
}

export default PopoverDropdown
