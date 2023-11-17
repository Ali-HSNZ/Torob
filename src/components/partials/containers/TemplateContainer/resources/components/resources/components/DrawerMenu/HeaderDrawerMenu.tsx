import { type FC } from 'react'
import { ActionIcon, Drawer } from '@mantine/core'
import { useMediaQuery } from '@mantine/hooks'

import { type THeaderDrawerMenuProps } from './resources'
import { STATIC_HEADER_MENU_ITEM } from '../..'

const HeaderDrawerMenu: FC<THeaderDrawerMenuProps> = ({ closeDrawer, openedDrawer }) => {
    // tailwind --> lg
    const matches = useMediaQuery('(min-width: 1024px)')

    return (
        <Drawer
            opened={matches ? false : openedDrawer}
            size={'xs'}
            onClose={closeDrawer}
            title='Categories'
            classNames={{ title: 'text-sm', close: ' focus:outline-none' }}
            overlayProps={{ backgroundOpacity: 0.5, blur: 4 }}
        >
            <div className='flex flex-col gap-y-4'>
                <hr className='mb-2' />
                {STATIC_HEADER_MENU_ITEM.map((menu) => (
                    <section key={menu.id}>
                        <ActionIcon
                            size={'auto'}
                            color='dark'
                            variant='transparent'
                            className='capitalize focus:outline-none text-sm font-medium'
                        >
                            {menu.title}
                        </ActionIcon>
                        {menu.sub.length > 0 && (
                            <section className='pl-6 flex flex-col gap-y-3 mt-3 w-full justify-start '>
                                {menu.sub.map((sub) => (
                                    <ActionIcon
                                        size={'auto'}
                                        key={sub.id}
                                        color='dark'
                                        variant='transparent'
                                        className='w-fit capitalize focus:outline-none text-sm '
                                    >
                                        {sub.title}
                                    </ActionIcon>
                                ))}
                            </section>
                        )}
                    </section>
                ))}
            </div>
        </Drawer>
    )
}

export default HeaderDrawerMenu
