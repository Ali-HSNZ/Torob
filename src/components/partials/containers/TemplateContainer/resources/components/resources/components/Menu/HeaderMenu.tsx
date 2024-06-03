import Link from 'next/link'
import { useMediaQuery } from '@mantine/hooks'
import { IconChevronDown } from '@tabler/icons-react'

import { CActionIcon } from '@atoms/ActionIcon'
import { CPopover } from '@atoms/Popover'

import { STATIC_HEADER_MENU_ITEM } from '../..'

const HeaderMenu = () => {
    const matches = useMediaQuery('(min-width: 1024px)')

    return (
        <div className='hidden lg:flex gap-x-5 '>
            {STATIC_HEADER_MENU_ITEM.map((link) => (
                <CPopover
                    opened={matches ? undefined : false}
                    key={link.id}
                    radius={0}
                    classNames={{ dropdown: 'w-full' }}
                >
                    <CPopover.Target>
                        {link.sub.length > 0 ? (
                            <CActionIcon
                                size={'auto'}
                                color='dark'
                                variant='transparent'
                                className='capitalize text-sm flex items-center gap-x-1'
                            >
                                <p>{link.title}</p>
                                <IconChevronDown stroke={1.1} className='mt-0.5' />
                            </CActionIcon>
                        ) : (
                            <CActionIcon
                                size={'auto'}
                                color='dark'
                                variant='transparent'
                                href={'#'}
                                component={Link}
                                className='capitalize text-sm  '
                            >
                                {link.title}
                            </CActionIcon>
                        )}
                    </CPopover.Target>

                    <CPopover.Dropdown>
                        {/* Menu Title */}
                        <h3 className='font-medium text-sm'>{link.title}</h3>

                        {/* Simple Line */}
                        <hr className='my-4' />

                        <section className='w-full grid grid-cols-4 '>
                            {link?.sub?.map((linkSub) => (
                                <article key={linkSub.id}>
                                    <CActionIcon
                                        size={'auto'}
                                        color='dark'
                                        variant='transparent'
                                        component={Link}
                                        href={'#'}
                                        className='capitalize font-medium text-sm '
                                    >
                                        {linkSub.title}
                                    </CActionIcon>
                                    <div className='flex flex-col pl-4 mt-3 gap-y-3'>
                                        {linkSub.sub?.map((item) => (
                                            <CActionIcon
                                                size={'auto'}
                                                component={Link}
                                                href={'#'}
                                                color='dark'
                                                variant='transparent'
                                                className='capitalize w-fit text-sm'
                                                key={item.id}
                                            >
                                                {item.title}
                                            </CActionIcon>
                                        ))}
                                    </div>
                                </article>
                            ))}
                        </section>
                    </CPopover.Dropdown>
                </CPopover>
            ))}
        </div>
    )
}

export default HeaderMenu
