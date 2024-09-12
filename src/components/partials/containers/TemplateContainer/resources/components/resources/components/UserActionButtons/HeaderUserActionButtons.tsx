import Link from 'next/link'
import { useMediaQuery } from '@mantine/hooks'
import {
    IconAdjustmentsAlt,
    IconChevronDown,
    IconLogout2,
    IconTruckDelivery,
    IconUser,
    IconUserCircle,
} from '@tabler/icons-react'
import { IconHeart } from '@tabler/icons-react'

import { CButton } from '@atoms/Button'
import { CMenu } from '@atoms/Menu'

import { APP_ROUTES } from '@core/routes'

const HeaderUserActionButtons = () => {
    const smMatchesMediaQuery = useMediaQuery('(min-width: 640px)')

    return (
        <div>
            <CMenu position='bottom' width={170} arrowSize={10} withArrow shadow='sm'>
                <CMenu.Target>
                    <CButton
                        rightSection={<IconChevronDown stroke={1.4} size={20} />}
                        leftSection={<IconUser stroke={1.4} size={20} />}
                        color='dark'
                        variant='outline'
                        className='text-[13px] sm:text-sm'
                    >
                        09302520508
                    </CButton>
                </CMenu.Target>
                <CMenu.Dropdown className='text-center sm:text-base'>
                    <CMenu.Label classNames={{ label: 'text-left' }}>Admin</CMenu.Label>

                    <CMenu.Item
                        className='text-sm'
                        component={Link}
                        leftSection={<IconAdjustmentsAlt stroke={1.2} size={smMatchesMediaQuery ? 20 : 17} />}
                        href={APP_ROUTES.AdminPanel}
                    >
                        Control Panel
                    </CMenu.Item>

                    <CMenu.Label classNames={{ label: 'text-left' }}>Application</CMenu.Label>

                    <CMenu.Item
                        className='text-sm'
                        leftSection={<IconHeart stroke={1.2} size={smMatchesMediaQuery ? 20 : 17} />}
                        component={Link}
                        href={APP_ROUTES.Favorites}
                    >
                        Favorites
                    </CMenu.Item>

                    <CMenu.Item
                        className='text-sm'
                        leftSection={<IconTruckDelivery stroke={1.2} size={smMatchesMediaQuery ? 20 : 17} />}
                        component={Link}
                        href={APP_ROUTES.Orders}
                    >
                        Orders
                    </CMenu.Item>

                    {/* Authentication */}
                    <CMenu.Label classNames={{ label: 'text-left' }}>Auth</CMenu.Label>

                    <CMenu.Item
                        className='text-sm'
                        leftSection={<IconUserCircle stroke={1.2} size={smMatchesMediaQuery ? 20 : 17} />}
                        component={Link}
                        href={APP_ROUTES.Orders}
                    >
                        Your profile
                    </CMenu.Item>

                    <CMenu.Item
                        color='red'
                        className='text-sm'
                        leftSection={<IconLogout2 stroke={1.2} size={smMatchesMediaQuery ? 20 : 17} />}
                    >
                        Logout
                    </CMenu.Item>
                </CMenu.Dropdown>
            </CMenu>
        </div>
    )
}

export default HeaderUserActionButtons
