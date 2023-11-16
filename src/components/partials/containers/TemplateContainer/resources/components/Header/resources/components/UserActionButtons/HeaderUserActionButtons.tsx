import React from 'react'
import Link from 'next/link'
import { Button, Popover } from '@mantine/core'

const HeaderUserActionButtons = () => {
    return (
        <div>
            <Popover position='bottom' arrowSize={13} withArrow classNames={{ arrow: 'z-10 absolute' }} shadow='xs'>
                <Popover.Target>
                    <Button className='bg-white font-medium text-black'>09302520508</Button>
                </Popover.Target>
                <Popover.Dropdown className='text-center px-0'>
                    <Button.Group orientation='vertical' className='capitalize'>
                        {['control Panel', 'Favorites', 'Recent', 'orders', 'Logout'].map((linkName, index) => (
                            <Button
                                className='z-20 '
                                variant='subtle'
                                color='gray'
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
