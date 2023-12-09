import { type FC } from 'react'
import { ActionIcon } from '@mantine/core'
import { IconChevronRight, IconX } from '@tabler/icons-react'

import { CButton } from '@atoms/Button'

import { type IMainFiltersProps } from './resources'

const MainFilters: FC<IMainFiltersProps> = ({ setQuery, closeDrawer, setStep }) => {
    const removeFiltersQueryParams = () => {
        setQuery({ brand: null, category: null, price: null, available: null })
    }

    return (
        <section>
            {/* head */}
            <div className='p-4 flex justify-between'>
                <ActionIcon
                    onClick={closeDrawer}
                    variant='transparent'
                    className='flex gap-x-1'
                    color='dark'
                    size='auto'
                >
                    <IconX size={20} />
                    <p className='font-medium'>Filters</p>
                </ActionIcon>

                <ActionIcon
                    onClick={removeFiltersQueryParams}
                    variant='transparent'
                    className='flex gap-x-1'
                    color='red'
                    size='auto'
                >
                    <p className='font-medium text-sm'>Remove filters</p>
                </ActionIcon>
            </div>

            <div>
                <CButton
                    justify='space-between'
                    color='dark'
                    variant='transparent'
                    className='h-12'
                    fullWidth
                    onClick={() => setStep(1)}
                    rightSection={<IconChevronRight stroke={1.5} />}
                >
                    Brands
                </CButton>

                <CButton
                    justify='space-between'
                    color='dark'
                    variant='transparent'
                    className='h-12'
                    fullWidth
                    onClick={() => setStep(2)}
                    rightSection={<IconChevronRight stroke={1.5} />}
                >
                    Categories
                </CButton>

                <CButton
                    justify='space-between'
                    color='dark'
                    variant='transparent'
                    className='h-12'
                    fullWidth
                    onClick={() => setStep(3)}
                    rightSection={<IconChevronRight stroke={1.5} />}
                >
                    Price
                </CButton>

                <CButton
                    justify='space-between'
                    color='dark'
                    variant='transparent'
                    className='h-12'
                    fullWidth
                    onClick={() => setStep(4)}
                    rightSection={<IconChevronRight stroke={1.5} />}
                >
                    Available
                </CButton>
            </div>
        </section>
    )
}

export default MainFilters
