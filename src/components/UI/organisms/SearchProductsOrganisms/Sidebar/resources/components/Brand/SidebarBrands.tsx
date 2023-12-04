'use client'

import React, { type FC, useMemo, useState } from 'react'
import { Button, Input } from '@mantine/core'
import { useDisclosure } from '@mantine/hooks'
import { IconSearch } from '@tabler/icons-react'

import NoData from '@atoms/NoData/NoData'

import { type ISidebarBrandsProps, STATIC_BRANDS_LIST } from './resources'

const SidebarBrands: FC<ISidebarBrandsProps> = ({ setQuery }) => {
    const [isShow, { toggle }] = useDisclosure(false)

    const [inputValue, setInputValue] = useState<string>('')

    const setBrandQueryParams = (brandTitle: string): void => {
        setQuery({
            brand: brandTitle.replace(/\s+/g, '-').toLowerCase(),
        })
    }

    const brandList = useMemo(() => {
        if (inputValue === '') {
            return STATIC_BRANDS_LIST
        }
        const findBrand = STATIC_BRANDS_LIST.filter((brand) =>
            brand.title.toLowerCase().includes(inputValue.toLowerCase())
        )
        return findBrand
    }, [inputValue])

    return (
        <section className='px-4 '>
            <Input
                color='gray'
                leftSection={<IconSearch size={20} stroke={1.5} />}
                placeholder='Search brand'
                onChange={(input) => setInputValue(input.target.value)}
            />
            <div className='flex flex-col px-1 max-h-[400px] overflow-y-auto gap-y-2 mt-5'>
                {brandList.length > 0 ? (
                    brandList.slice(0, isShow ? brandList.length : 7).map((brand) => (
                        <div key={brand.id}>
                            <Button onClick={() => setBrandQueryParams(brand.title)} variant='transparent' color='dark'>
                                {brand.title}
                            </Button>
                        </div>
                    ))
                ) : (
                    <NoData className='border-none' />
                )}
            </div>

            {brandList.length > 7 && (
                <Button onClick={toggle} fullWidth color='#333' className='mt-4' variant='outline'>
                    {isShow ? 'View less' : 'View more'}
                </Button>
            )}
        </section>
    )
}

export default SidebarBrands
