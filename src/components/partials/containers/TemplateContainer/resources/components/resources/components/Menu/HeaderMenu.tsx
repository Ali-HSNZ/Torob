import { type FC } from 'react'
import Link from 'next/link'
import { ActionIcon, Popover } from '@mantine/core'
import { useDisclosure, useMediaQuery } from '@mantine/hooks'
import { IconChevronDown } from '@tabler/icons-react'

import { STATIC_HEADER_MENU_ITEM } from '../..'

const HeaderMenu: FC = () => {
    const matches = useMediaQuery('(min-width: 1024px)')
    const [, { toggle }] = useDisclosure(false)

    return (
        <div className='hidden lg:flex gap-x-5 '>
            {STATIC_HEADER_MENU_ITEM.map((link) => (
                <Popover
                    opened={matches ? undefined : false}
                    key={link.id}
                    radius={0}
                    classNames={{ dropdown: 'w-full' }}
                >
                    <Popover.Target>
                        {link.sub.length > 0 ? (
                            <ActionIcon
                                size={'auto'}
                                color='dark'
                                variant='transparent'
                                onClick={toggle}
                                className='capitalize text-sm flex items-center gap-x-1'
                            >
                                <p>{link.title}</p>
                                <IconChevronDown stroke={1.1} className='mt-0.5' />
                            </ActionIcon>
                        ) : (
                            <ActionIcon
                                size={'auto'}
                                color='dark'
                                variant='transparent'
                                onClick={toggle}
                                href={'#'}
                                component={Link}
                                className='capitalize text-sm  '
                            >
                                {link.title}
                            </ActionIcon>
                        )}
                    </Popover.Target>

                    {link.sub.length > 0 && (
                        <Popover.Dropdown>
                            {/* Menu Title */}
                            <h3 className='font-medium text-sm'>{link.title}</h3>

                            {/* Simple Line */}
                            <hr className='my-4' />

                            <section className='w-full grid grid-cols-4 '>
                                {link?.sub?.map((linkSub) => (
                                    <article key={linkSub.id}>
                                        <ActionIcon
                                            size={'auto'}
                                            color='dark'
                                            variant='transparent'
                                            component={Link}
                                            href={'#'}
                                            className='capitalize font-medium text-sm '
                                        >
                                            {linkSub.title}
                                        </ActionIcon>
                                        <div className='flex flex-col pl-4 mt-3 gap-y-3'>
                                            {linkSub.sub?.map((item) => (
                                                <ActionIcon
                                                    size={'auto'}
                                                    component={Link}
                                                    href={'#'}
                                                    color='dark'
                                                    variant='transparent'
                                                    className='capitalize w-fit text-sm'
                                                    key={item.id}
                                                >
                                                    {item.title}
                                                </ActionIcon>
                                            ))}
                                        </div>
                                    </article>
                                ))}
                            </section>
                        </Popover.Dropdown>
                    )}
                </Popover>
            ))}
        </div>
    )
}

export default HeaderMenu
