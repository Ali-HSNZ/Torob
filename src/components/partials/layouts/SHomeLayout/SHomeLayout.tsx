import { type FC } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Button, Popover } from '@mantine/core'
import { IconShoppingBag } from '@tabler/icons-react'

import { STATIC_HEADER_MENU_ITEM } from './resources'

const SHomeLayout: FC = () => {
    console.log('RENDER')

    return (
        <main>
            <header className='w-full bg-zinc-50 py-4 px-6  flex items-center justify-between '>
                <figure className='relative w-[35px] h-[35px]'>
                    <Image
                        alt='torob logo'
                        className='h-full w-auto'
                        fill
                        src={'https://torob.iran.liara.run/_next/static/media/torob_logo.e01c66b6.svg'}
                    />
                </figure>

                {/* Menu Links */}
                <section className='flex gap-x-4'>
                    {STATIC_HEADER_MENU_ITEM.map((link) => (
                        <Link key={link.id} href={link.href} className='capitalize  rounded-lg text-gray-700 '>
                            {link.title}
                        </Link>
                    ))}
                </section>

                <section className='flex gap-x-4'>
                    <Button
                        href={'#'}
                        component={Link}
                        className='bg-white rounded-md text-sm font-medium text-black'
                        leftSection={<IconShoppingBag className='text-gray-800' size='1.1rem' stroke={1.5} />}
                    >
                        Card
                    </Button>

                    <Popover position='bottom' arrowSize={12} withArrow shadow='xs'>
                        <Popover.Target>
                            <Button className='bg-white font-medium text-black'>09302520508</Button>
                        </Popover.Target>
                        <Popover.Dropdown className='text-center px-0'>
                            <nav>
                                {['control Panel', 'Favorites', 'Recent', 'orders', 'Logout'].map((linkName, index) => (
                                    <Link
                                        key={index}
                                        href={'#'}
                                        className='w-full capitalize block text-sm py-1.5 px-4 hover:bg-gray-50 text-center font-medium text-black'
                                    >
                                        {linkName}
                                    </Link>
                                ))}
                            </nav>
                        </Popover.Dropdown>
                    </Popover>
                </section>
            </header>
        </main>
    )
}

export default SHomeLayout
