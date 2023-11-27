import React from 'react'
import Link from 'next/link'
import { Button, Menu } from '@mantine/core'
import { useMediaQuery } from '@mantine/hooks'
import {
    IconAdjustmentsAlt,
    IconChevronDown,
    IconHistory,
    IconLogout2,
    IconTruckDelivery,
    IconUser,
} from '@tabler/icons-react'
import { IconHeart } from '@tabler/icons-react'

const HeaderUserActionButtons = () => {
    const smMatchesMediaQuery = useMediaQuery('(min-width: 640px)')

    return (
        <div>
            <Menu position='bottom' width={170} arrowSize={10} withArrow shadow='sm'>
                <Menu.Target>
                    <Button
                        rightSection={<IconChevronDown stroke={1.4} size={20} />}
                        leftSection={<IconUser stroke={1.4} size={20} />}
                        color='dark'
                        variant='outline'
                        className='text-[13px] sm:text-sm'
                    >
                        09302520508
                    </Button>
                </Menu.Target>
                <Menu.Dropdown className='text-center sm:text-base'>
                    {/* Label */}
                    <Menu.Label classNames={{ label: 'text-left' }}>Application</Menu.Label>

                    <Menu.Item
                        className='text-xs sm:text-sm'
                        leftSection={<IconAdjustmentsAlt stroke={1.2} size={smMatchesMediaQuery ? 20 : 17} />}
                        component={Link}
                        href={'#'}
                    >
                        Control Panel
                    </Menu.Item>

                    <Menu.Item
                        className='text-xs sm:text-sm'
                        leftSection={<IconHeart stroke={1.2} size={smMatchesMediaQuery ? 20 : 17} />}
                        component={Link}
                        href={'#'}
                    >
                        Favorites
                    </Menu.Item>

                    <Menu.Item
                        className='text-xs sm:text-sm'
                        leftSection={<IconHistory stroke={1.2} size={smMatchesMediaQuery ? 20 : 17} />}
                        component={Link}
                        href={'#'}
                    >
                        Recent
                    </Menu.Item>

                    <Menu.Item
                        className='text-xs sm:text-sm'
                        leftSection={<IconTruckDelivery stroke={1.2} size={smMatchesMediaQuery ? 20 : 17} />}
                        component={Link}
                        href={'#'}
                    >
                        Orders
                    </Menu.Item>

                    {/* Authentication */}
                    <Menu.Label classNames={{ label: 'text-left' }}>Auth</Menu.Label>

                    <Menu.Item
                        color='red'
                        className='text-xs sm:text-sm'
                        leftSection={<IconLogout2 stroke={1.2} size={smMatchesMediaQuery ? 20 : 17} />}
                        component={Link}
                        href={'#'}
                    >
                        Logout
                    </Menu.Item>
                </Menu.Dropdown>
            </Menu>
        </div>
    )
}

export default HeaderUserActionButtons
