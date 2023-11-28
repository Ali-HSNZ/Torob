import { type FC } from 'react'
import { useRouter } from 'next/navigation'
import { Controller, useForm } from 'react-hook-form'
import { Popover, TextInput } from '@mantine/core'
import { useElementSize } from '@mantine/hooks'
import { IconSearch } from '@tabler/icons-react'

import { Routes } from '@core/constants/routes'
import { type THomeSearchProductFormSchemaType } from '@core/types/forms-schema/home-search-product-form'

const HomeSearchInput: FC = () => {
    const { ref, width: searchInputWidth } = useElementSize()
    const { push } = useRouter()

    const onSubmitHandler = (values: THomeSearchProductFormSchemaType) => {
        push(Routes.FindProduct(values.name))
    }
    const { control, handleSubmit } = useForm<THomeSearchProductFormSchemaType>({
        defaultValues: {
            name: '',
        },
    })

    return (
        <form
            onSubmit={handleSubmit((values) => onSubmitHandler(values))}
            className='w-[460px] relative flex flex-col gap-y-4'
        >
            <div className='flex flex-col gap-y-2'>
                <h1 className='text-4xl text-red-500 font-bold'>Torob</h1>

                <h6 className='text-black font-medium capitalize text-sm'>
                    Price comparison of millions of products between thousands of stores
                </h6>
            </div>
            <section>
                <Controller
                    name='name'
                    control={control}
                    render={({ field }) => (
                        <Popover width={searchInputWidth} offset={5} position='bottom' shadow='md'>
                            <Popover.Target>
                                <TextInput
                                    {...field}
                                    ref={ref}
                                    placeholder='search products...'
                                    classNames={{ input: 'py-5 ' }}
                                    leftSection={<IconSearch size={'1.2rem'} />}
                                />
                            </Popover.Target>
                            <Popover.Dropdown>
                                <p>This is uncontrolled popover, it is opened when button is clicked</p>
                            </Popover.Dropdown>
                        </Popover>
                    )}
                />
            </section>
        </form>
    )
}

export default HomeSearchInput
