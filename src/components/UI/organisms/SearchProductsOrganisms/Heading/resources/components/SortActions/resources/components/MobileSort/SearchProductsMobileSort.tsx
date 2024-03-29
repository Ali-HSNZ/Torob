import { type FC, useEffect } from 'react'
import { useDisclosure, useMediaQuery } from '@mantine/hooks'
import { IconCheck, IconSortDescending } from '@tabler/icons-react'

import { CActionIcon } from '@atoms/ActionIcon'
import { CButton } from '@atoms/Button'
import { CDrawer } from '@atoms/Drawer'

import type ISearchProductsMobileSortProps from './types/type'
import { STATIC_SORT_LIST } from '../..'

const SearchProductsMobileSort: FC<ISearchProductsMobileSortProps> = ({ sort, setQuery }) => {
    const lgMatches = useMediaQuery('(min-width: 1024px)')

    const [openedDrawer, { open, close }] = useDisclosure()

    // close drawer if sort changed
    useEffect(() => {
        close()
    }, [close, sort])

    return (
        <div className=' lg:hidden'>
            <CActionIcon variant='transparent' size={'auto'} color='dark' onClick={open} className='  space-x-1  p-0  '>
                <IconSortDescending size={24} stroke={1.7} />
                <p className='text-sm font-medium capitalize'>{sort}</p>
            </CActionIcon>

            <CDrawer
                radius={'10px 10px 0 0'}
                transitionProps={{
                    duration: 400,
                }}
                opened={lgMatches ? false : openedDrawer}
                classNames={{ title: 'text-sm' }}
                onClose={close}
                withCloseButton={false}
                size={'xs'}
                position='bottom'
                title=''
            >
                {/* Drawer content */}
                <div className='w-full flex flex-col gap-y-2'>
                    {STATIC_SORT_LIST.map((item) => (
                        <CButton
                            rightSection={sort === item.label ? <IconCheck stroke={1.1} color='gray' /> : undefined}
                            key={item.id}
                            fullWidth
                            justify='space-between'
                            color='dark'
                            className={`p-0 text-sm ${sort === item.label ? 'text-red-600' : 'text-gray-600'}`}
                            variant='transparent'
                            size={'auto'}
                            onClick={() => setQuery(item.label)}
                        >
                            {item.label}
                        </CButton>
                    ))}
                </div>
            </CDrawer>
        </div>
    )
}

export default SearchProductsMobileSort
