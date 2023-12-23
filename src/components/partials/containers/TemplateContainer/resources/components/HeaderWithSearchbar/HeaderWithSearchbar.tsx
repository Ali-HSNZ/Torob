import { type FC } from 'react'
import Image from 'next/image'
import { useDisclosure, useElementSize } from '@mantine/hooks'
import { IconMenu2 } from '@tabler/icons-react'
import { IconSearch } from '@tabler/icons-react'

import { CButton } from '@atoms/Button'
import { CPopover } from '@atoms/Popover'
import { CTextInput } from '@atoms/TextInput'

import { HeaderCardButton, HeaderDrawerMenu, HeaderMenu, HeaderUserActionButtons } from '../resources'

const HeaderWithSearchbar: FC = () => {
    const [openedDrawer, { toggle: toggleDrawer }] = useDisclosure(false)

    // Get Search Input Width For Handling Popup Dropdown Width And Position
    const { ref: inputRef, width: searchInputWidth } = useElementSize()

    return (
        <>
            {/* Drawer Sidebar Menu  */}
            <HeaderDrawerMenu closeDrawer={toggleDrawer} openedDrawer={openedDrawer} />

            <header className='w-full gap-y-4 shadow-sm bg-gray-50 py-4 px-6 flex flex-col relative z-50 '>
                <section className='w-full flex gap-y-4 justify-between lg:gap-y-0 flex-wrap lg:flex-nowrap  items-center gap-x-3'>
                    <div className='flex items-center order-1'>
                        {/* Menu Button --> Showed in responsive   */}
                        <CButton
                            onClick={toggleDrawer}
                            color='red'
                            variant='transparent'
                            className='px-0 focus:outline-none mr-4 lg:hidden'
                        >
                            <IconMenu2 className='text-gray-700' />
                        </CButton>
                        {/* Torob Logo */}
                        <figure className='relative w-[40px] h-[35px]'>
                            <Image
                                alt='Torob logo'
                                priority
                                className='h-full object-cover w-auto'
                                fill
                                src={'https://torob.com/static/images/torob_logo.svg'}
                            />
                        </figure>

                        {/* Torob Title */}
                        <h3 className='text-2xl hidden sm:block text-red-500 font-bold'>Torob</h3>
                    </div>

                    {/* Search Input */}
                    <div className='w-full order-4 lg:order-2 '>
                        <section ref={inputRef} className='xl:ml-2 w-full sm:w-[460px] relative   flex-col gap-y-4'>
                            <CPopover
                                opened={undefined}
                                offset={5}
                                width={searchInputWidth}
                                position='bottom'
                                shadow='md'
                            >
                                <CPopover.Target>
                                    <CTextInput
                                        placeholder='search products...'
                                        classNames={{ input: 'py-5 ' }}
                                        leftSection={<IconSearch size={'1.2rem'} />}
                                    />
                                </CPopover.Target>
                                <CPopover.Dropdown>
                                    <p>This is uncontrolled popover, it is opened when button is clicked</p>
                                </CPopover.Dropdown>
                            </CPopover>
                        </section>
                    </div>

                    <section className='flex gap-x-4  order-3'>
                        {/* Card Button */}
                        <HeaderCardButton />

                        {/* User Action Buttons */}
                        <HeaderUserActionButtons />
                    </section>
                </section>

                {/* Menu Links */}
                <HeaderMenu />
            </header>
        </>
    )
}

export default HeaderWithSearchbar
