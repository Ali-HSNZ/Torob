import { type FC } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useDisclosure } from '@mantine/hooks'
import { IconMenu2 } from '@tabler/icons-react'

import { CButton } from '@atoms/Button'

import { HeaderCardButton, HeaderDrawerMenu, HeaderMenu, HeaderUserActionButtons } from '../resources'

const Header: FC = () => {
    const [openedDrawer, { toggle: toggleDrawer }] = useDisclosure(false)

    return (
        <>
            {/* Sidebar Menu  */}
            <HeaderDrawerMenu closeDrawer={toggleDrawer} openedDrawer={openedDrawer} />

            {/* Main Header */}
            <header className='w-full gap-y-4 shadow-sm bg-gray-50 py-4 px-6 flex flex-col relative z-50 '>
                <div className='w-full flex items-center justify-between '>
                    {/* Left Section */}
                    <section className='flex gap-x-3'>
                        {/* Menu Button --> Showed in responsive   */}
                        <CButton
                            onClick={toggleDrawer}
                            color='red'
                            variant='transparent'
                            className='px-0 focus:outline-none lg:hidden'
                        >
                            <IconMenu2 className='text-gray-700' />
                        </CButton>

                        {/* Torob Logo */}
                        <Link href={'/'}>
                            <figure className='relative w-[40px] h-[35px]'>
                                <Image
                                    alt='Torob logo'
                                    priority
                                    className='h-full object-cover w-auto'
                                    fill
                                    src={'https://torob.com/static/images/torob_logo.svg'}
                                />
                            </figure>
                        </Link>

                        {/* Menu Links */}
                        <HeaderMenu />
                    </section>

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
