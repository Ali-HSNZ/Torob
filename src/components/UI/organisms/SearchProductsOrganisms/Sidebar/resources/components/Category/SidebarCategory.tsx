import { type FC } from 'react'
import Link from 'next/link'
import { Button } from '@mantine/core'

const SidebarCategory: FC = () => {
    return (
        <section className='pl-4'>
            <Button
                component={Link}
                href={'#'}
                variant='transparent'
                className='pl-0 font-medium text-sm text-[#303030] capitalize'
            >
                Digital
            </Button>
            <div className='pl-6'>
                <Button
                    component={Link}
                    href={'#'}
                    variant='transparent'
                    className='pl-0 font-medium text-sm text-[#303030] capitalize'
                >
                    Phone
                </Button>
                <div className='pl-6'>
                    <Button
                        component={Link}
                        href={'#'}
                        variant='transparent'
                        className='pl-0 font-medium text-sm text-[#303030] capitalize'
                    >
                        Smart phone
                    </Button>

                    <div className='pl-6 flex flex-col w-fit'>
                        <Button
                            component={Link}
                            href={'#'}
                            variant='transparent'
                            className='pl-0 font-medium text-sm text-[#303030] capitalize'
                        >
                            Iphone
                        </Button>
                        <Button
                            component={Link}
                            href={'#'}
                            variant='transparent'
                            className='pl-0 font-medium text-sm text-[#303030] capitalize'
                        >
                            Tablet
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default SidebarCategory
