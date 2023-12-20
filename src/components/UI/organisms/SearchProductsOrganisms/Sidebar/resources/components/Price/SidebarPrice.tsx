import { type FC, useCallback, useState } from 'react'
import { NumberInput, RangeSlider } from '@mantine/core'
import { NumberParam, useQueryParams } from 'use-query-params'
import { IconCurrencyDollar } from '@tabler/icons-react'

import { CButton } from '@atoms/Button'

import { type TPriceRangeType } from './resources'

const SidebarPrice: FC = () => {
    const maxPrice = 1000000

    const [query, setQuery] = useQueryParams({
        min: NumberParam,
        max: NumberParam,
    })

    // from query params
    const { min: minPriceQuery, max: maxPriceQuery } = query

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

    // submit handler
    const submitPriceRange = useCallback(() => {
        setQuery({ min: priceRange.min, max: priceRange.max })
    }, [priceRange.max, priceRange.min, setQuery])

    return (
        <section className='px-4 space-y-4'>
            <div className='flex w-full  gap-x-4'>
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

            <CButton onClick={submitPriceRange} variant='outline' color='dark' fullWidth>
                Submit
            </CButton>
        </section>
    )
}

export default SidebarPrice
