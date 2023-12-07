import React, { type FC, useState } from 'react'
import { Button, NumberInput, RangeSlider } from '@mantine/core'
import { IconCurrencyDollar } from '@tabler/icons-react'

import { type ISidebarPriceProps, type TPriceRangeType } from './resources'

const SidebarPrice: FC<ISidebarPriceProps> = ({ setQuery }) => {
    const maxPrice = 1000000

    const [priceRange, setPriceRange] = useState<TPriceRangeType>({
        min: 0,
        max: maxPrice,
    })

    const handlePriceRange = (range: [number, number]) => {
        const [minPrice, maxPrice] = range
        if (!isNaN(minPrice) && !isNaN(maxPrice)) {
            setPriceRange({ min: minPrice, max: maxPrice })
        }
    }

    const handleMinPrice = (minPrice: number) => {
        if (!isNaN(minPrice)) {
            setPriceRange((prevState) => ({ ...prevState, min: minPrice }))
        }
    }

    const handleMaxPrice = (maxPrice: number) => {
        if (!isNaN(maxPrice)) {
            setPriceRange((prevState) => ({ ...prevState, max: maxPrice }))
        }
    }

    const submitPriceRange = () => {
        setQuery({ min: priceRange.min, max: priceRange.max })
    }

    return (
        <section className='px-4 space-y-4'>
            <div className='flex w-full  gap-x-4'>
                <NumberInput
                    onChange={(value) => handleMinPrice(Number(value))}
                    defaultValue={priceRange.min}
                    value={priceRange.min}
                    min={0}
                    rightSection={<IconCurrencyDollar size={19} stroke={1.5} />}
                    label='From'
                    classNames={{ label: 'text-xs' }}
                    thousandSeparator=','
                />
                <NumberInput
                    onChange={(value) => handleMaxPrice(Number(value))}
                    defaultValue={priceRange.max}
                    value={priceRange.max}
                    rightSection={<IconCurrencyDollar size={19} stroke={1.5} />}
                    classNames={{ label: 'text-xs' }}
                    thousandSeparator=','
                    label='To'
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

            <Button onClick={submitPriceRange} variant='outline' color='dark' fullWidth>
                Submit
            </Button>
        </section>
    )
}

export default SidebarPrice
