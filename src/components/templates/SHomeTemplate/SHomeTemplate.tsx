import { type FC } from 'react'
import { Input, Popover } from '@mantine/core'
import { IconSearch } from '@tabler/icons-react'

const SHomeTemplate: FC = () => {
    return (
        <main className='bg-white absolute inset-0 z-0 flex items-center justify-center'>
            <section className='w-[460px] relative flex flex-col gap-y-4'>
                <div className='flex flex-col gap-y-2'>
                    <h1 className='text-4xl text-red-600 font-bold'>Torob</h1>
                    <h6 className='text-black font-medium capitalize text-sm'>
                        Price comparison of millions of products between thousands of stores
                    </h6>
                </div>
                <div className='relative'>
                    <Popover offset={5} classNames={{ dropdown: 'w-full sm:w-[460px]' }} position='bottom' shadow='md'>
                        <Popover.Target>
                            <Input
                                placeholder='search products...'
                                classNames={{ input: 'py-4 text-lg' }}
                                leftSection={<IconSearch size={'1.2rem'} />}
                            />
                        </Popover.Target>
                        <Popover.Dropdown>
                            <p>This is uncontrolled popover, it is opened when button is clicked</p>
                        </Popover.Dropdown>
                    </Popover>
                </div>
            </section>
        </main>
    )
}

export default SHomeTemplate
