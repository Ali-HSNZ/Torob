import React, { type FC, useCallback, useEffect, useState } from 'react'
import { ActionIcon, Drawer } from '@mantine/core'
import { useDisclosure, useMediaQuery } from '@mantine/hooks'
import { NumberParam, StringParam, useQueryParams } from 'use-query-params'
import { IconFilter } from '@tabler/icons-react'

import {
    type IFilterDrawerProps,
    SidebarDrawerAvailableFilter,
    SidebarDrawerBrandsFilter,
    SidebarDrawerCategoriesFilter,
    SidebarDrawerMainFilters,
    SidebarDrawerPriceFilters,
} from './resources'

const FilterDrawer: FC<IFilterDrawerProps> = ({ className }) => {
    const [openedDrawer, { open, close }] = useDisclosure()

    const lgMatches = useMediaQuery('(min-width: 1024px)')

    const [step, setStep] = useState(0)

    const [query, setQuery] = useQueryParams({
        brand: StringParam,
        category: StringParam,
        min: NumberParam,
        max: NumberParam,
        available: StringParam,
    })

    useEffect(() => {
        close()
        setStep(0)
    }, [close, query])

    const renderStep = useCallback(() => {
        switch (step) {
            case 1: {
                return <SidebarDrawerBrandsFilter setStep={setStep} />
            }
            case 2: {
                return <SidebarDrawerCategoriesFilter setStep={setStep} />
            }
            case 3: {
                return <SidebarDrawerPriceFilters setStep={setStep} />
            }
            case 4: {
                return <SidebarDrawerAvailableFilter setStep={setStep} />
            }
        }
    }, [step])

    return (
        <section className={className}>
            <ActionIcon onClick={open} variant='transparent' size={'auto'} color='dark' className='space-x-1'>
                <IconFilter size={24} stroke={1.7} />
                <p className='text-sm font-medium capitalize'>Filters</p>
            </ActionIcon>

            <Drawer
                opened={lgMatches ? false : openedDrawer}
                classNames={{
                    title: 'text-sm',
                    content: `overflow-hidden`,
                }}
                onClose={close}
                className='relative'
                transitionProps={{ duration: 400 }}
                styles={{
                    body: {
                        padding: 0,
                    },
                }}
                withCloseButton={false}
                size={'100%'}
                position='bottom'
                title=''
            >
                {/* Main Filter */}
                <div className={`flex`}>
                    {/* Main */}
                    <div
                        className={`w-full absolute  transition-all duration-1000 ${
                            step === 0 ? 'right-0' : 'right-full'
                        } `}
                    >
                        <SidebarDrawerMainFilters
                            query={query}
                            setQuery={setQuery}
                            setStep={setStep}
                            closeDrawer={close}
                        />
                    </div>

                    {/* Brand */}
                    <div
                        className={`w-full absolute transition-all duration-1000 ${
                            step !== 0 ? 'left-0' : 'left-full'
                        }   `}
                    >
                        {renderStep()}
                    </div>
                </div>
            </Drawer>
        </section>
    )
}

export default FilterDrawer
