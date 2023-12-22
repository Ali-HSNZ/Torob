import { type FC } from 'react'
import { useMediaQuery } from '@mantine/hooks'

import { CActionIcon } from '@atoms/ActionIcon'
import { CDrawer } from '@atoms/Drawer'

import { type THeaderDrawerMenuProps } from './resources'
import { STATIC_HEADER_MENU_ITEM } from '../..'

const HeaderDrawerMenu: FC<THeaderDrawerMenuProps> = ({ closeDrawer, openedDrawer }) => {
    // tailwind --> lg
    const matches = useMediaQuery('(min-width: 1024px)')

    return (
        <CDrawer
            opened={matches ? false : openedDrawer}
            size={'xs'}
            onClose={closeDrawer}
            transitionProps={{ duration: 400 }}
            title='Categories'
            classNames={{
                title: 'text-sm  font-medium',
                close: ' focus:outline-none',
            }}
        >
            <div className='flex flex-col gap-y-4'>
                <hr className='mb-2' />
                {STATIC_HEADER_MENU_ITEM.map((menu) => (
                    <section key={menu.id}>
                        <CActionIcon
                            size={'auto'}
                            color='dark'
                            variant='transparent'
                            className='capitalize text-sm focus:outline-none font-medium'
                        >
                            {menu.title}
                        </CActionIcon>
                        {menu.sub.length > 0 && (
                            <section className='pl-6 flex flex-col gap-y-3 mt-3 w-full justify-start '>
                                {menu.sub.map((sub) => (
                                    <CActionIcon
                                        size={'auto'}
                                        key={sub.id}
                                        color='dark'
                                        variant='transparent'
                                        className='w-fit capitalize focus:outline-none text-sm '
                                    >
                                        {sub.title}
                                    </CActionIcon>
                                ))}
                            </section>
                        )}
                    </section>
                ))}
            </div>
        </CDrawer>
    )
}

export default HeaderDrawerMenu
