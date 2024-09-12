import { type PropsWithChildren } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { IconHeart, IconHistory, IconShoppingBag } from '@tabler/icons-react'

import { NextImage } from '@atoms/Image'

import { cn } from '@core/utils/common/cn'

const UserProfileLayout = ({ children }: PropsWithChildren) => {
    const pathName = usePathname()

    const userPages = [
        {
            title: 'Favorites',
            href: '/favorites',
            icon: <IconHeart />,
        },
        {
            title: 'Recent',
            href: '/recent',
            icon: <IconHistory />,
        },
        {
            title: 'Orders',
            href: '/orders',
            icon: <IconShoppingBag />,
        },
    ]

    return (
        <section className='flex justify-between p-6 gap-6'>
            <div className='bg-white border w-72 shrink-0 p-4 rounded'>
                <div className='flex gap-x-2'>
                    <figure className='size-20 overflow-hidden'>
                        <NextImage
                            width={40}
                            height={40}
                            className='size-10 aspect-square rounded-full'
                            src={'/images/comments/avatar.jpg'}
                            alt='user avatar'
                        />
                    </figure>
                    <div>
                        <div className='font-medium'>Ali Hassanzadeh</div>
                        <div className='font-normal text-xs'>0930252508</div>
                    </div>
                </div>

                <div className='mt-4'>
                    {userPages.map((link, index) => (
                        <Link
                            key={index}
                            href={link.href}
                            className={cn(
                                'duration-300 hover:cursor-pointer border border-transparent flex rounded-sm gap-2 p-2 bg-white text-gray-600',
                                {
                                    'bg-red-50 border-red-100 text-red-600': pathName.includes(link.href),
                                }
                            )}
                        >
                            {link.icon}
                            <p className='font-semibold'>{link.title}</p>
                        </Link>
                    ))}
                </div>
            </div>
            <div className='grow bg-red-100 p-4 '>{children}</div>
        </section>
    )
}

export default UserProfileLayout
