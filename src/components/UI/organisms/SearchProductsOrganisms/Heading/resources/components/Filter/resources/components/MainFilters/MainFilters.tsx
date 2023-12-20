import { type FC } from 'react'
import { IconChevronRight, IconX } from '@tabler/icons-react'

import { CActionIcon } from '@atoms/ActionIcon'
import { CButton } from '@atoms/Button'

import { type IMainFiltersProps } from './resources'

const MainFilters: FC<IMainFiltersProps> = ({ query, setQuery, closeDrawer, setStep, setIsMainFilter }) => {
    const removeUndefinedObj = JSON.parse(JSON.stringify(query))
    const isAvailableQueryParams = Object.entries(removeUndefinedObj).length > 0 ? true : false

    const removeFiltersQueryParams = () => {
        setQuery({ brand: null, category: null, min: null, max: null, available: null })
    }

    return (
        <section>
            {/* head */}
            <div className='p-4 flex justify-between'>
                <CActionIcon
                    onClick={closeDrawer}
                    variant='transparent'
                    className='flex gap-x-1'
                    color='dark'
                    size='auto'
                >
                    <IconX size={20} />
                    <p className='font-medium'>Filters</p>
                </CActionIcon>

                {isAvailableQueryParams && (
                    <CActionIcon
                        onClick={removeFiltersQueryParams}
                        variant='transparent'
                        className='flex gap-x-1'
                        color='red'
                        size='auto'
                    >
                        <p className='font-medium text-sm'>Remove filters</p>
                    </CActionIcon>
                )}
            </div>

            <div>
                <CButton
                    justify='space-between'
                    color='dark'
                    variant='transparent'
                    className='h-12'
                    fullWidth
                    onClick={() => {
                        setStep(1)
                        setIsMainFilter(false)
                    }}
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
                    onClick={() => {
                        setStep(2)
                        setIsMainFilter(false)
                    }}
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
                    onClick={() => {
                        setStep(3)
                        setIsMainFilter(false)
                    }}
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
                    onClick={() => {
                        setStep(4)
                        setIsMainFilter(false)
                    }}
                    rightSection={<IconChevronRight stroke={1.5} />}
                >
                    Available
                </CButton>
            </div>
        </section>
    )
}

export default MainFilters
