import React, { type FC } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Button, Input, Popover } from '@mantine/core'
import { useDisclosure, useElementSize, useMediaQuery } from '@mantine/hooks'
import { IconMenu2, IconShoppingBag } from '@tabler/icons-react'
import { IconSearch } from '@tabler/icons-react'

import { HeaderDrawerMenu, HeaderMenu, HeaderUserActionButtons } from './resources'

const HeaderWithSearchbar: FC = () => {
    const [openedDrawer, { toggle: toggleDrawer }] = useDisclosure(false)

    // tailwind -> lg media query
    const lgMatchesMediaQuery = useMediaQuery('(min-width: 1024px)')

    // Get Search Input Width For Handling Popup Dropdown Width And Position
    const { ref: inputRef, width: searchInputWidth } = useElementSize()

    // Get Responsive Search Input Width For Handling Popup Dropdown Width And Position
    const { ref: responsiveInputRef, width: responsiveSearchInputWidth } = useElementSize()

    return (
        <>
            {/* Drawer Sidebar Menu  */}
            <HeaderDrawerMenu closeDrawer={toggleDrawer} openedDrawer={openedDrawer} />

            <header className='w-full gap-y-4 bg-zinc-100 py-4 px-6 flex flex-col relative z-50 '>
                <div className='w-full flex items-center justify-between '>
                    {/* Left Section */}
                    <section className='flex items-center gap-x-3'>
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

                        {/* Torob Title */}
                        <h3 className='text-2xl hidden sm:block text-red-600 font-bold'>Torob</h3>

                        {/* Search Input */}
                        <section ref={inputRef} className='ml-4 w-[460px] relative hidden lg:flex flex-col gap-y-4'>
                            <Popover
                                opened={lgMatchesMediaQuery ? undefined : false}
                                disabled={lgMatchesMediaQuery ? false : true}
                                offset={5}
                                width={searchInputWidth}
                                position='bottom'
                                shadow='md'
                            >
                                <Popover.Target>
                                    <Input
                                        placeholder='search products...'
                                        classNames={{ input: 'py-5 ' }}
                                        leftSection={<IconSearch size={'1.2rem'} />}
                                    />
                                </Popover.Target>
                                <Popover.Dropdown>
                                    <p>This is uncontrolled popover, it is opened when button is clicked</p>
                                </Popover.Dropdown>
                            </Popover>
                        </section>
                    </section>

                    {/* Card Button And User Action Buttons Parent */}
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

                {/* Searchbar ---> Responsive */}
                <section
                    ref={responsiveInputRef}
                    className='w-full sm:w-[460px] relative flex lg:hidden flex-col gap-y-4'
                >
                    <Popover
                        opened={lgMatchesMediaQuery ? false : undefined}
                        disabled={lgMatchesMediaQuery ? true : false}
                        offset={5}
                        width={responsiveSearchInputWidth}
                        position='bottom'
                        shadow='md'
                    >
                        <Popover.Target>
                            <Input
                                placeholder='search products...'
                                classNames={{ input: 'py-5 ' }}
                                leftSection={<IconSearch size={'1.2rem'} />}
                            />
                        </Popover.Target>
                        <Popover.Dropdown>
                            <p>This is uncontrolled popover, it is opened when button is clicked</p>
                        </Popover.Dropdown>
                    </Popover>
                </section>

                {/* Menu Links */}
                <HeaderMenu />
            </header>
        </>
    )
}

export default HeaderWithSearchbar
