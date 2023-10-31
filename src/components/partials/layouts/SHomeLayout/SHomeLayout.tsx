import { type FC } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Button, Input, Popover } from '@mantine/core'
import { IconCategory, IconChevronDown, IconSearch, IconShoppingBag } from '@tabler/icons-react'
import { IconChevronRight } from '@tabler/icons-react'

import { type ILayoutProps } from '@core/types/layouts/layouts.type'

import { STATIC_HEADER_MENU_ITEM } from './resources'

const SHomeLayout: FC<ILayoutProps> = ({ children }) => {
    return (
        <main>
            <header className='w-full gap-y-4 bg-zinc-50 py-4 px-6 flex flex-col relative z-50 '>
                <div className='w-full flex items-center justify-between '>
                    <figure className='relative w-[35px] h-[35px]'>
                        <Image
                            alt='torob logo'
                            className='h-full w-auto'
                            fill
                            src={'https://torob.iran.liara.run/_next/static/media/torob_logo.e01c66b6.svg'}
                        />
                    </figure>
                    <Popover offset={5} classNames={{ dropdown: 'w-full sm:w-[460px]' }} position='bottom' shadow='md'>
                        <Popover.Target>
                            <Input
                                placeholder='search products...'
                                classNames={{ input: 'py-4 text-sm w-full sm:w-[460px]' }}
                                leftSection={<IconSearch size={'1.2rem'} />}
                            />
                        </Popover.Target>
                        <Popover.Dropdown>
                            <p>This is uncontrolled popover, it is opened when button is clicked</p>
                        </Popover.Dropdown>
                    </Popover>

                    <section>
                        {' '}
                        <Popover position='bottom' arrowSize={12} withArrow shadow='xs'>
                            <Popover.Target>
                                <Button className='bg-white font-medium text-black'>09302520508</Button>
                            </Popover.Target>
                            <Popover.Dropdown className='text-center px-0'>
                                <nav>
                                    {['control Panel', 'Favorites', 'Recent', 'orders', 'Logout'].map(
                                        (linkName, index) => (
                                            <Link
                                                key={index}
                                                href={'#'}
                                                className='w-full capitalize block text-sm py-1.5 px-4 hover:bg-gray-50 text-center font-medium text-black'
                                            >
                                                {linkName}
                                            </Link>
                                        )
                                    )}
                                </nav>
                            </Popover.Dropdown>
                        </Popover>
                    </section>
                </div>
                <div className='w-full justify-between flex'>
                    {/* Menu Links */}
                    <div>
                        {STATIC_HEADER_MENU_ITEM.map((link) => (
                            <Popover key={link.id} classNames={{ dropdown: 'w-full' }}>
                                <Popover.Target>
                                    <Button
                                        color='#ccc'
                                        variant='subtle'
                                        rightSection={
                                            link.sub ? (
                                                <IconChevronDown stroke={1.5} className='text-gray-400' />
                                            ) : undefined
                                        }
                                        className='capitalize  rounded-lg text-gray-700 '
                                    >
                                        {link.title}
                                    </Button>
                                </Popover.Target>
                                {link.sub ? (
                                    <Popover.Dropdown
                                        style={{
                                            position: 'fixed',
                                            top: '15%',
                                            left: 0,
                                            right: 0,
                                        }}
                                    >
                                        <h3 className='font-medium'>{link.title}</h3>
                                        <hr className='my-4' />
                                        <section className='w-full grid grid-cols-2 gap-1'>
                                            {link?.sub?.map((linkSub) => (
                                                <article
                                                    className='p-3 hover:bg-[#fdf6f6] transition-all duration-200 shadow-sm font-semibold hover:shadow-md rounded-md cursor-pointer'
                                                    key={linkSub.id}
                                                >
                                                    <div className='flex w-full justify-between items-center gap-x-2 '>
                                                        <div className='flex items-center gap-x-2'>
                                                            <IconCategory
                                                                stroke={1.2}
                                                                size={'1.4rem'}
                                                                className='text-red-400  rounded-md  '
                                                            />
                                                            <h3 className='font-medium'>{linkSub.title}</h3>
                                                        </div>
                                                        <IconChevronRight stroke={1.2} className='text-red-400' />
                                                    </div>
                                                    <div className='flex gap-x-2'>
                                                        <h6 className='text-gray-500 font-normal text-sm'>
                                                            {linkSub.sub?.map((item) => item.title).join(', ')}
                                                        </h6>
                                                    </div>
                                                </article>
                                            ))}
                                        </section>
                                    </Popover.Dropdown>
                                ) : (
                                    <></>
                                )}
                            </Popover>
                        ))}
                    </div>
                    <Button
                        href={'#'}
                        component={Link}
                        className='bg-white rounded-md text-sm font-medium text-black'
                        leftSection={<IconShoppingBag className='text-gray-800' size='1.1rem' stroke={1.5} />}
                    >
                        Card
                    </Button>
                </div>
            </header>
            {children}
        </main>
    )
}

export default SHomeLayout