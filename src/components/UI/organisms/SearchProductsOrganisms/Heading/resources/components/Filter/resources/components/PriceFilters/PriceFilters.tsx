import { type FC, useCallback, useState } from 'react'
import { ActionIcon, Button, NumberInput, RangeSlider } from '@mantine/core'
import { NumberParam, useQueryParams } from 'use-query-params'
import { IconChevronLeft, IconCurrencyDollar } from '@tabler/icons-react'

import { type IPriceFiltersProps, type TPriceRangeType } from './resources'

const PriceFilters: FC<IPriceFiltersProps> = ({ setIsMainFilter }) => {
    const [query, setQuery] = useQueryParams({
        min: NumberParam,
        max: NumberParam,
    })

    // from query params
    const { min: minPriceQuery, max: maxPriceQuery } = query

    const isQuery = query.min !== undefined || query.max !== undefined

    const maxPrice = 1000000

    let initialMinPrice = 0 // default min price
    let initialMaxPrice = maxPrice // default max price

    // Check if minPriceQuery exists, is greater than or equal to 0, and is less than or equal to the maximum price
    if (minPriceQuery && minPriceQuery >= 0 && minPriceQuery <= maxPrice) {
        initialMinPrice = minPriceQuery
    }

    // is less than or equal to the maximum price, and is greater than or equal to the initialMinPrice.
    if (maxPriceQuery && maxPriceQuery >= 0 && maxPriceQuery <= maxPrice && maxPriceQuery >= initialMinPrice) {
        initialMaxPrice = maxPriceQuery
    }

    const [priceRange, setPriceRange] = useState<TPriceRangeType>({
        min: initialMinPrice,
        max: initialMaxPrice,
    })

    // handle range price slider bar
    const handlePriceRange = useCallback((range: [number, number]) => {
        const [minPrice, maxPrice] = range
        if (!isNaN(minPrice) && !isNaN(maxPrice)) {
            setPriceRange({ min: minPrice, max: maxPrice })
        }
    }, [])

    // handle min price number input
    const handleMinPrice = useCallback((minPrice: number) => {
        if (!isNaN(minPrice)) {
            setPriceRange((prevState) => {
                return { ...prevState, min: minPrice }
            })
        }
    }, [])

    // handle max price number input
    const handleMaxPrice = useCallback((maxPrice: number) => {
        if (!isNaN(maxPrice)) {
            setPriceRange((prevState) => ({ ...prevState, max: Math.max(maxPrice, prevState.min) }))
        }
    }, [])

    // Remove query param
    const removeQueryParams = () => {
        setQuery({ max: null, min: null })
    }

    // submit handler
    const submitPriceRange = useCallback(() => {
        setQuery({ min: priceRange.min, max: priceRange.max })
    }, [priceRange.max, priceRange.min, setQuery])

    return (
        <section className='p-4 flex flex-col w-full h-[100dvh] '>
            <div className=' h-full'>
                <div className='flex justify-between  bg-white'>
                    <ActionIcon
                        onClick={() => setIsMainFilter(true)}
                        variant='transparent'
                        className='flex gap-x-1'
                        color='dark'
                        size='auto'
                    >
                        <IconChevronLeft size={20} />
                        <p className='font-medium'>Price</p>
                    </ActionIcon>

                    {isQuery && (
                        <ActionIcon
                            onClick={removeQueryParams}
                            variant='transparent'
                            className='flex gap-x-1'
                            color='red'
                            size='auto'
                        >
                            <p className='font-medium text-sm'>Remove</p>
                        </ActionIcon>
                    )}
                </div>

                <div className='w-full space-y-6 mt-4'>
                    <div className='grid grid-cols-2 w-full  gap-x-4'>
                        <NumberInput
                            label='From'
                            value={priceRange.min}
                            min={0}
                            max={priceRange.max}
                            onChange={(value) => handleMinPrice(Number(value))}
                            clampBehavior='strict'
                            allowDecimal={false}
                            thousandSeparator=','
                            rightSection={<IconCurrencyDollar size={19} stroke={1.5} />}
                            classNames={{ label: 'text-xs' }}
                        />
                        <NumberInput
                            label='To'
                            value={priceRange.max}
                            min={priceRange.min}
                            max={maxPrice}
                            onChange={(value) => handleMaxPrice(Number(value))}
                            clampBehavior='strict'
                            thousandSeparator=','
                            allowDecimal={false}
                            rightSection={<IconCurrencyDollar size={19} stroke={1.5} />}
                            classNames={{ label: 'text-xs' }}
                        />
                    </div>

                    {/* Range Slider */}
                    <div>
                        <RangeSlider
                            onChange={(value) => handlePriceRange(value)}
                            color='red'
                            label={null}
                            defaultValue={[priceRange.min, priceRange.max]}
                            value={[priceRange.min, priceRange.max]}
                            thumbSize={17}
                            min={0}
                            max={maxPrice}
                        />

                        <div className='flex justify-between select-none text-xs mt-1'>
                            <span>cheapest</span>
                            <span>expensive</span>
                        </div>
                    </div>
                </div>
            </div>

            <Button onClick={submitPriceRange} variant='outline' color='dark' fullWidth>
                Submit
            </Button>
        </section>
    )
}

export default PriceFilters
