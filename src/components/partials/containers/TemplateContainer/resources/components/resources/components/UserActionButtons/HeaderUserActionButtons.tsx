import Link from 'next/link'
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

import { CButton } from '@atoms/Button'
import { CMenu } from '@atoms/Menu'

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
                    {/* Label */}
                    <CMenu.Label classNames={{ label: 'text-left' }}>Application</CMenu.Label>

                    <CMenu.Item
                        className='text-sm'
                        leftSection={<IconAdjustmentsAlt stroke={1.2} size={smMatchesMediaQuery ? 20 : 17} />}
                        href={'#'}
                    >
                        Control Panel
                    </CMenu.Item>

                    <CMenu.Item
                        className='text-sm'
                        leftSection={<IconHeart stroke={1.2} size={smMatchesMediaQuery ? 20 : 17} />}
                        component={Link}
                        href={'#'}
                    >
                        Favorites
                    </CMenu.Item>

                    <CMenu.Item
                        className='text-sm'
                        leftSection={<IconHistory stroke={1.2} size={smMatchesMediaQuery ? 20 : 17} />}
                        component={Link}
                        href={'#'}
                    >
                        Recent
                    </CMenu.Item>

                    <CMenu.Item
                        className='text-sm'
                        leftSection={<IconTruckDelivery stroke={1.2} size={smMatchesMediaQuery ? 20 : 17} />}
                        component={Link}
                        href={'#'}
                    >
                        Orders
                    </CMenu.Item>

                    {/* Authentication */}
                    <CMenu.Label classNames={{ label: 'text-left' }}>Auth</CMenu.Label>

                    <CMenu.Item
                        color='red'
                        className='text-sm'
                        leftSection={<IconLogout2 stroke={1.2} size={smMatchesMediaQuery ? 20 : 17} />}
                        component={Link}
                        href={'#'}
                    >
                        Logout
                    </CMenu.Item>
                </CMenu.Dropdown>
            </CMenu>
        </div>
    )
}

export default HeaderUserActionButtons
