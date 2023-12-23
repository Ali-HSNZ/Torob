import { type FC } from 'react'
import { Popover, type PopoverTargetProps } from '@mantine/core'

const PopoverTarget: FC<PopoverTargetProps> = ({ children, ...res }) => {
    return <Popover.Target {...res}>{children}</Popover.Target>
}

export default PopoverTarget
