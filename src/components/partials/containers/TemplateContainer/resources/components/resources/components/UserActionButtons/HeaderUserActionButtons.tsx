import React from 'react'
import Link from 'next/link'
import { Button, Popover } from '@mantine/core'
import { IconChevronDown } from '@tabler/icons-react'

const HeaderUserActionButtons = () => {
    return (
        <div>
            <Popover position='bottom' arrowSize={10} withArrow classNames={{ arrow: 'z-10 absolute' }} shadow='sm'>
                <Popover.Target>
                    <Button rightSection={<IconChevronDown stroke={1.4} />} variant='outline' color='dark'>
                        09302520508
                    </Button>
                </Popover.Target>
                <Popover.Dropdown className='text-center p-1'>
                    <Button.Group orientation='vertical' className='capitalize'>
                        {['control Panel', 'Favorites', 'Recent', 'orders', 'Logout'].map((linkName, index) => (
                            <Button
                                className='z-20 '
                                variant='subtle'
                                color='dark'
                                component={Link}
                                key={index}
                                href={'#'}
                            >
                                {linkName}
                            </Button>
                        ))}
                    </Button.Group>
                </Popover.Dropdown>
            </Popover>
        </div>
    )
}

export default HeaderUserActionButtons
