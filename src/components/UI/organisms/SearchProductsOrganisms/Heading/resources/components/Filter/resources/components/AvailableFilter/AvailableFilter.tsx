import { type FC } from 'react'
import { ActionIcon, Checkbox } from '@mantine/core'
import { useQueryParam } from 'use-query-params'
import { IconChevronLeft } from '@tabler/icons-react'

import { type IAvailableFilterProps } from './resources'

const AvailableFilter: FC<IAvailableFilterProps> = ({ setStep }) => {
    const [query, setQuery] = useQueryParam<string | null>('available')

    const isDefaultChecked: boolean = query && query === 'true' ? true : false

    const handleCheckbox = (status: boolean) => {
        setQuery(status ? 'true' : 'false')
    }
    const removeQueryParams = () => {
        setQuery(null)
    }

    return (
        <section className='p-4 flex flex-col gap-y-5 select-none'>
            <div className='sticky  flex justify-between  top-0 z-10 bg-white'>
                <ActionIcon
                    onClick={() => setStep(0)}
                    variant='transparent'
                    className='flex gap-x-1'
                    color='dark'
                    size='auto'
                >
                    <IconChevronLeft size={20} />
                    <p className='font-medium'>Price</p>
                </ActionIcon>

                {query && (
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

            <Checkbox
                defaultChecked={isDefaultChecked}
                onChange={(checkbox) => handleCheckbox(checkbox.target.checked)}
                label='Display available products'
            />
        </section>
    )
}

export default AvailableFilter