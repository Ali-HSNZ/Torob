import { type FC, useMemo, useState } from 'react'
import { ActionIcon, Highlight, TextInput } from '@mantine/core'
import { useQueryParam } from 'use-query-params'
import { IconChevronLeft, IconSearch } from '@tabler/icons-react'

import { CNoData } from '@molecules/NoData'

import { CButton } from '@atoms/Button'

import { textToSlug } from '@core/utils/common/textToSlug'

import { type IBrandsFilterProps, STATIC_BRANDS_LIST } from './resources'

const BrandsFilter: FC<IBrandsFilterProps> = ({ setStep }) => {
    const [query, setQuery] = useQueryParam<string | null>('brand')

    const [inputValue, setInputValue] = useState<string>('')

    // Set query param
    const setBrandQueryParams = (brandTitle: string): void => {
        setQuery(textToSlug(brandTitle))
    }

    // Remove query param
    const removeBrandQueryParams = () => {
        setQuery(null)
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
        <section>
            {/* head */}
            <div className='p-4 sticky top-0 space-y-4 z-10 bg-white'>
                <div className='flex justify-between'>
                    <ActionIcon
                        onClick={() => setStep(0)}
                        variant='transparent'
                        className='flex gap-x-1'
                        color='dark'
                        size='auto'
                    >
                        <IconChevronLeft size={20} />
                        <p className='font-medium'>Brands</p>
                    </ActionIcon>

                    {query && (
                        <ActionIcon
                            onClick={removeBrandQueryParams}
                            variant='transparent'
                            className='flex gap-x-1'
                            color='red'
                            size='auto'
                        >
                            <p className='font-medium text-sm'>Remove</p>
                        </ActionIcon>
                    )}
                </div>

                <div className='sticky top-16 z-10  bg-white'>
                    <TextInput
                        classNames={{ input: 'h-10 ' }}
                        color='gray'
                        leftSection={<IconSearch size={20} stroke={1.5} />}
                        placeholder='Search brand'
                        onChange={(input) => setInputValue(input.target.value)}
                    />
                </div>
            </div>

            {/* Content */}
            <section className='px-4'>
                <div className='flex flex-col z-0 gap-y-2 mp-4'>
                    {brandList.length > 0 ? (
                        brandList.map((brand) => (
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
            </section>
        </section>
    )
}

export default BrandsFilter
