import { type FC } from 'react'
import { Button, Drawer } from '@mantine/core'
import { useMediaQuery } from '@mantine/hooks'

import { type THomeLayoutDrawerMenuProps } from './resources'
import { STATIC_HEADER_MENU_ITEM } from '../..'

const HomeLayoutDrawerMenu: FC<THomeLayoutDrawerMenuProps> = ({ closeDrawer, openedDrawer }) => {
    const matches = useMediaQuery('(min-width: 1024px)')

    return (
        <Drawer
            opened={matches ? false : openedDrawer}
            size={'xs'}
            onClose={closeDrawer}
            title='Categories'
            classNames={{ title: 'text-sm' }}
            overlayProps={{ backgroundOpacity: 0.5, blur: 4 }}
        >
            <div className='flex flex-col'>
                <hr className='mb-2' />
                {STATIC_HEADER_MENU_ITEM.map((menu) => (
                    <section key={menu.id}>
                        <Button color='gray' variant='subtle' className='font-medium'>
                            {menu.title}
                        </Button>
                        {menu.sub && menu.sub.length > 0 ? (
                            <section className='pl-6 flex flex-col w-full justify-start '>
                                {menu.sub.map((sub) => (
                                    <Button key={sub.id} color='gray' variant='subtle' className='w-fit font-medium'>
                                        {sub.title}
                                    </Button>
                                ))}
                            </section>
                        ) : (
                            <></>
                        )}
                    </section>
                ))}
            </div>
        </Drawer>
    )
}

export default HomeLayoutDrawerMenu
