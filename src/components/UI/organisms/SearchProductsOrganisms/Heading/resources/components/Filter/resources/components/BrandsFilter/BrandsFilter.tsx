import { type FC, useMemo, useState } from 'react'
import { ActionIcon, TextInput } from '@mantine/core'
import { useQueryParam } from 'use-query-params'
import { IconChevronLeft, IconSearch } from '@tabler/icons-react'

import { CButton } from '@atoms/Button'

import { textToSlug } from '@core/utils/common/textToSlug'

import { type IBrandsFilterProps, STATIC_BRANDS_LIST } from './resources'

const BrandsFilter: FC<IBrandsFilterProps> = ({ setIsMainFilter }) => {
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
        <section className='flex flex-col h-screen p-4'>
            {/* head */}
            <div className=' space-y-4 bg-white'>
                <div className='flex justify-between'>
                    <ActionIcon
                        onClick={() => setIsMainFilter(true)}
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
            <div className='flex mt-4 flex-col overflow-y-auto gap-y-2'>
                {brandList.length > 0 ? (
                    brandList.map((brand) => (
                        <div key={brand.id}>
                            <CButton
                                fullWidth
                                justify='start'
                                onClick={() => setBrandQueryParams(brand.title)}
                                variant='transparent'
                                className={`px-0 ${
                                    textToSlug(brand.title) === query ? 'text-red-600' : 'text-gray-700'
                                }`}
                            >
                                {brand.title}
                            </CButton>
                        </div>
                    ))
                ) : (
                    <h6 className='text-sm font-medium'>Not Found!</h6>
                )}
            </div>
        </section>
    )
}

export default BrandsFilter
