import { type FC } from 'react'
import { Button, Drawer } from '@mantine/core'
import { useMediaQuery } from '@mantine/hooks'
import { useQuery } from '@tanstack/react-query'

import { getBaseCategoriesListQueryFn } from '@api/base/get-all-categories'

import { QueryKeysEnum } from '@core/enums/query-keys'
import { type TAllCategoriesListType } from '@core/types/data/get-all-categories'

import { type THomeLayoutDrawerMenuProps } from './resources'

const HomeLayoutDrawerMenu: FC<THomeLayoutDrawerMenuProps> = ({ closeDrawer, openedDrawer }) => {
    const matches = useMediaQuery('(min-width: 1024px)')

    const { data: categoriesList, isSuccess } = useQuery<TAllCategoriesListType>({
        queryKey: [QueryKeysEnum.GetBaseCategories],
        queryFn: getBaseCategoriesListQueryFn,
    })

    if (isSuccess)
        return (
            <Drawer
                opened={matches ? false : openedDrawer}
                size={'xs'}
                onClose={closeDrawer}
                title='Categories'
                classNames={{ title: 'text-sm', close: ' focus:outline-none' }}
                overlayProps={{ backgroundOpacity: 0.5, blur: 4 }}
            >
                <div className='flex flex-col'>
                    <hr className='mb-2' />
                    {categoriesList?.data.map((menu) => (
                        <section key={menu.id}>
                            <Button color='gray' variant='subtle' className='capitalize font-medium focus:outline-none'>
                                {menu.title}
                            </Button>
                            {menu.sub_categories.length > 0 && (
                                <section className='pl-6 flex flex-col w-full justify-start '>
                                    {menu.sub_categories.map((sub) => (
                                        <Button
                                            key={sub.id}
                                            color='gray'
                                            variant='subtle'
                                            className='w-fit capitalize focus:outline-none font-medium'
                                        >
                                            {sub.title}
                                        </Button>
                                    ))}
                                </section>
                            )}
                        </section>
                    ))}
                </div>
            </Drawer>
        )
}

export default HomeLayoutDrawerMenu
