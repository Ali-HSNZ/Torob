import React, { type FC } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@mantine/core'
import { useDisclosure } from '@mantine/hooks'
import { IconMenu2, IconShoppingBag } from '@tabler/icons-react'

import { HeaderDrawerMenu, HeaderMenu, HeaderUserActionButtons } from './resources'

const Header: FC = () => {
    const [openedDrawer, { toggle: toggleDrawer }] = useDisclosure(false)

    return (
        <>
            {/* Sidebar Menu  */}
            <HeaderDrawerMenu closeDrawer={toggleDrawer} openedDrawer={openedDrawer} />

            {/* Main Header */}
            <header className='w-full gap-y-4 bg-zinc-100 py-4 px-6 flex flex-col relative z-50 '>
                <div className='w-full flex items-center justify-between '>
                    {/* Left Section */}
                    <section className='flex gap-x-3'>
                        {/* Menu Button --> Showed in responsive   */}
                        <Button
                            onClick={toggleDrawer}
                            color='red'
                            variant='transparent'
                            className='px-0 focus:outline-none lg:hidden'
                        >
                            <IconMenu2 className='text-gray-700' />
                        </Button>

                        {/* Torob Logo */}
                        <figure className='relative w-[35px] h-[35px]'>
                            <Image
                                alt='torob logo'
                                priority
                                className='h-full w-auto'
                                fill
                                src={'https://torob.iran.liara.run/_next/static/media/torob_logo.e01c66b6.svg'}
                            />
                        </figure>

                        {/* Menu Links */}
                        <HeaderMenu />
                    </section>

                    {/* Card Button And User Action Buttons Parent*/}
                    <section className='flex gap-x-4'>
                        {/* Card Button */}
                        <Button
                            href={'#'}
                            component={Link}
                            className='bg-white rounded-md text-sm font-medium text-black'
                            leftSection={<IconShoppingBag className='text-gray-800' size='1.1rem' stroke={1.5} />}
                        >
                            Card
                        </Button>

                        {/* User Action Buttons */}
                        <HeaderUserActionButtons />
                    </section>
                </div>
            </header>
        </>
    )
}

export default Header
