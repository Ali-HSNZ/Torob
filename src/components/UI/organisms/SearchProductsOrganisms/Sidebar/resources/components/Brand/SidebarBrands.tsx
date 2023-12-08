'use client'

import React, { type FC, useMemo, useState } from 'react'
import { Button, Highlight, Input } from '@mantine/core'
import { useDisclosure } from '@mantine/hooks'
import { IconSearch } from '@tabler/icons-react'

import { CNoData } from '@molecules/NoData'

import { CButton } from '@atoms/Button'

import { textToSlug } from '@core/utils/common/textToSlug'

import { type ISidebarBrandsProps, STATIC_BRANDS_LIST } from './resources'

const SidebarBrands: FC<ISidebarBrandsProps> = ({ query, setQuery }) => {
    const [isShow, { toggle }] = useDisclosure(false)

    const [inputValue, setInputValue] = useState<string>('')

    const setBrandQueryParams = (brandTitle: string): void => {
        setQuery({
            brand: textToSlug(brandTitle),
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
        <section className='px-4'>
            <Input
                color='gray'
                leftSection={<IconSearch size={20} stroke={1.5} />}
                placeholder='Search brand'
                onChange={(input) => setInputValue(input.target.value)}
            />
            <div className='flex flex-col px-1 min-h-[310px] max-h-[310px] overflow-y-auto gap-y-2 mt-5'>
                {brandList.length > 0 ? (
                    brandList.slice(0, isShow ? brandList.length : 7).map((brand) => (
                        <div key={brand.id}>
                            <CButton
                                onClick={() => setBrandQueryParams(brand.title)}
                                variant='transparent'
                                className={`p-0`}
                            >
                                <Highlight
                                    classNames={{
                                        root: `text-sm font-medium ${
                                            textToSlug(brand.title) === query ? 'text-red-600' : 'text-gray-700'
                                        }`,
                                    }}
                                    color='gray'
                                    highlight={inputValue}
                                >
                                    {brand.title}
                                </Highlight>
                            </CButton>
                        </div>
                    ))
                ) : (
                    <CNoData className='border-none' />
                )}
            </div>

            {brandList.length > 7 && (
                <Button onClick={toggle} fullWidth color='gray' className='mt-4 ' variant='outline'>
                    {isShow ? 'View less' : 'View more'}
                </Button>
            )}
        </section>
    )
}

export default SidebarBrands
