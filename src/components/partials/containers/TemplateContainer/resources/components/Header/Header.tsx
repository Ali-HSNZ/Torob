import React, { type FC } from 'react'
import Image from 'next/image'
import { Button } from '@mantine/core'
import { useDisclosure } from '@mantine/hooks'
import { IconMenu2 } from '@tabler/icons-react'

import logo from '@public/images/logo.png'

import { HeaderCardButton, HeaderDrawerMenu, HeaderMenu, HeaderUserActionButtons } from '../resources'

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

                        {/* Beet Logo */}
                        <figure className='relative w-[30px] h-[35px]'>
                            <Image alt='Beet logo' priority className='h-full object-cover w-auto' fill src={logo} />
                        </figure>

                        {/* Menu Links */}
                        <HeaderMenu />
                    </section>

                    {/* Card Button And User Action Buttons Parent*/}
                    <section className='flex gap-x-4'>
                        {/* Card Button */}
                        <HeaderCardButton />

                        {/* User Action Buttons */}
                        <HeaderUserActionButtons />
                    </section>
                </div>
            </header>
        </>
    )
}

export default Header
