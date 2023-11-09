import { type FC } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@mantine/core'
import { useDisclosure } from '@mantine/hooks'
import { IconMenu2, IconShoppingBag } from '@tabler/icons-react'

import { type ILayoutProps } from '@core/types/layouts/layouts.type'

import { HomeLayoutDrawerMenu, HomeLayoutMenu, HomeLayoutUserActionButtons } from './resources'

const HomeLayout: FC<ILayoutProps> = ({ children }) => {
    const [openedDrawer, { open: openDrawer, close: closeDrawer }] = useDisclosure(false)

    return (
        <>
            {/* Sidebar Menu  */}
            <HomeLayoutDrawerMenu closeDrawer={closeDrawer} openedDrawer={openedDrawer} />
            <main>
                <header className='w-full gap-y-4 bg-zinc-100 py-4 px-6 flex flex-col relative z-50 '>
                    <div className='w-full flex items-center justify-between '>
                        {/* Left Section */}
                        <section className='flex gap-x-3'>
                            {/* Menu Button --> Showed in responsive   */}
                            <Button
                                onClick={openDrawer}
                                color='red'
                                variant='subtle'
                                className='px-0 focus:outline-none lg:hidden'
                            >
                                <IconMenu2 className='text-gray-700' />
                            </Button>

                            {/* Avatar Image */}
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
                            <HomeLayoutMenu />
                        </section>

                        {/* Right Section */}
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
                            <HomeLayoutUserActionButtons />
                        </section>
                    </div>
                </header>
                {/* -> Layout Children <- */}
                {children}
            </main>
        </>
    )
}

export default HomeLayout
