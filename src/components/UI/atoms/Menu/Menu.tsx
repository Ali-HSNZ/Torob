import { Menu } from '@mantine/core'

import { CMenuDropdown, CMenuItem, CMenuLabel, CMenuTarget, type TMenuType } from './resources'

const CustomMenu: TMenuType = ({ classNames, children, ...res }) => {
    return (
        <Menu classNames={{ ...classNames }} {...res}>
            {children}
        </Menu>
    )
}
CustomMenu.Dropdown = CMenuDropdown
CustomMenu.Item = CMenuItem
CustomMenu.Target = CMenuTarget
CustomMenu.Label = CMenuLabel

export default CustomMenu
