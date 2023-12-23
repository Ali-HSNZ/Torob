import { Popover } from '@mantine/core'

import { CPopoverDropdown, CPopoverTarget, type TPopoverType } from './resources'

const CustomPopover: TPopoverType = ({ classNames, children, ...res }) => {
    return (
        <Popover classNames={{ ...classNames }} {...res}>
            {children}
        </Popover>
    )
}
CustomPopover.Dropdown = CPopoverDropdown
CustomPopover.Target = CPopoverTarget

export default CustomPopover
