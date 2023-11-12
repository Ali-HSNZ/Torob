import { type FC } from 'react'
import Link from 'next/link'
import { Button, Popover } from '@mantine/core'
import { useDisclosure, useMediaQuery } from '@mantine/hooks'
import { IconChevronDown } from '@tabler/icons-react'
import { useQuery } from '@tanstack/react-query'

import { getBaseCategoriesListQueryFn } from '@api/base/get-all-categories'

import { QueryKeysEnum } from '@core/enums/query-keys'
import { type TAllCategoriesListType } from '@core/types/data/get-all-categories'

const HomeLayoutMenu: FC = () => {
    const matches = useMediaQuery('(min-width: 1024px)')
    const [, { toggle }] = useDisclosure(false)

    const { data: categoriesList, isSuccess } = useQuery<TAllCategoriesListType>({
        queryKey: [QueryKeysEnum.GetBaseCategories],
        queryFn: getBaseCategoriesListQueryFn,
    })
    if (isSuccess)
        return (
            <div className='hidden lg:block '>
                {categoriesList.data.map((link) => (
                    <Popover
                        opened={matches ? undefined : false}
                        key={link.id}
                        radius={0}
                        classNames={{ dropdown: 'w-full' }}
                    >
                        <Popover.Target>
                            {link.sub_categories.length > 0 ? (
                                <Button
                                    color='gray'
                                    variant='subtle'
                                    onClick={toggle}
                                    rightSection={<IconChevronDown stroke={1.5} className='text-gray-400' />}
                                    className='capitalize rounded-lg'
                                >
                                    {link.title}
                                </Button>
                            ) : (
                                <Button
                                    color='gray'
                                    variant='subtle'
                                    onClick={toggle}
                                    href={'#'}
                                    component={Link}
                                    className='capitalize rounded-lg'
                                >
                                    {link.title}
                                </Button>
                            )}
                        </Popover.Target>
                        {link.sub_categories.length > 0 && (
                            <Popover.Dropdown>
                                <h3 className='font-medium'>{link.title}</h3>
                                <hr className='my-4' />
                                <section className='w-full grid grid-cols-4 gap-1'>
                                    {link?.sub_categories?.map((linkSub) => (
                                        <article key={linkSub.id}>
                                            <Button
                                                color='gray'
                                                variant='transparent'
                                                component={Link}
                                                href={'#'}
                                                className='capitalize font-medium text-base'
                                            >
                                                {linkSub.title}
                                            </Button>
                                            <div className='flex flex-col pl-4'>
                                                {linkSub.sub_categories?.map((item) => (
                                                    <Button
                                                        component={Link}
                                                        href={'#'}
                                                        color='gray'
                                                        variant='transparent'
                                                        className='capitalize w-fit font-medium text-sm'
                                                        key={item.id}
                                                    >
                                                        {item.title}
                                                    </Button>
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

export default HomeLayoutMenu
