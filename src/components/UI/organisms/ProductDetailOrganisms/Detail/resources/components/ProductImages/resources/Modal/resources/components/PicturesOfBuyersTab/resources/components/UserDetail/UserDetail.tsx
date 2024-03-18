import { type FC, memo } from 'react'
import Image from 'next/image'
import { ActionIcon } from '@mantine/core'
import {
    IconBuildingStore,
    IconCalendar,
    IconChevronLeft,
    IconDotsVertical,
    IconFlag,
    IconMinus,
    IconPlus,
    IconThumbDownFilled,
    IconThumbUpFilled,
    IconUser,
} from '@tabler/icons-react'

import { CKeenSlider } from '@molecules/KeenSlider'

import { CActionIcon } from '@atoms/ActionIcon'
import { CButton } from '@atoms/Button'
import { CMenu } from '@atoms/Menu'
import { CRating } from '@atoms/Rating'

import { type IPicturesOfBuyersTabUserDetailProps } from './resources'

const PicturesOfBuyersTabUserDetail: FC<IPicturesOfBuyersTabUserDetailProps> = ({ data, handlePointOfViewClick }) => {
    if (data)
        return (
            <section className='w-full flex flex-col gap-y-4 items-start'>
                {/* point of view button */}
                <CButton
                    size='xs'
                    variant='transparent'
                    onClick={handlePointOfViewClick}
                    leftSection={<IconChevronLeft stroke={2} size={20} />}
                    className='mt-4 font-semibold text-gray-600 text-sm'
                    classNames={{
                        label: 'pl-0 relative  -left-1.5',
                        section: 'p-0 m-0 relative -left-1.5',
                        root: 'p-0',
                    }}
                >
                    More Detail
                </CButton>

                <div className='lg:h-[500px] w-full overflow-y-auto  gap-4 flex flex-col-reverse lg:grid grid-cols-2'>
                    {/* detail */}
                    <div className='h-full flex   flex-col gap-4 overflow-y-auto  grow  '>
                        <div className='flex justify-between'>
                            <div className='text-xs flex flex-col gap-y-1.5'>
                                {/* user name */}
                                <div className='flex gap-x-1 items-center'>
                                    <IconUser size={18} stroke={1} />
                                    <p>
                                        {data.moreDetail.user.name} {data.moreDetail.user.lastName}
                                    </p>
                                </div>

                                {/* store name */}
                                <div className='flex  gap-x-1 items-center'>
                                    <IconBuildingStore stroke={1} size={18} />
                                    <p>{data.moreDetail.storeName}</p>
                                </div>

                                {/* date */}
                                <div className='flex  gap-x-1 items-center'>
                                    <IconCalendar stroke={1} size={18} />
                                    <p>{data.moreDetail.date}</p>
                                </div>

                                {/* color */}
                                <div className='flex items-center gap-x-1'>
                                    <div
                                        style={{ backgroundColor: data.moreDetail.color.hex }}
                                        className='w-3 h-3 rounded-full border border-gray-200'
                                    ></div>
                                    <p className='capitalize'>{data.moreDetail.color.name}</p>
                                </div>

                                {/* rating */}
                                <CRating readOnly size='xs' value={4.3} fractions={2} />

                                {/* tags */}
                                <div className='flex gap-x-1'>
                                    {data.moreDetail.tags.map((tag, tagIndex) => (
                                        <p
                                            key={tagIndex}
                                            className='text-green-600 bg-green-100 px-0.5 w-fit rounded-sm'
                                        >
                                            #{tag}
                                        </p>
                                    ))}
                                </div>
                            </div>

                            <CMenu position='bottom' arrowSize={10} withArrow shadow='sm'>
                                <CMenu.Target>
                                    <ActionIcon variant='white' className='text-gray-500'>
                                        <IconDotsVertical stroke={1.8} />
                                    </ActionIcon>
                                </CMenu.Target>
                                <CMenu.Dropdown className='text-center sm:text-base'>
                                    <CMenu.Item
                                        className='text-sm font-medium text-red-500'
                                        leftSection={<IconFlag stroke={2} size={18} />}
                                        href={'#'}
                                    >
                                        Report this comment
                                    </CMenu.Item>
                                </CMenu.Dropdown>
                            </CMenu>
                        </div>

                        <div className='flex flex-col gap-y-2'>
                            <p className='text-sm font-semibold'>{data.moreDetail.title}</p>
                            <p className='text-sm'>{data.moreDetail.body}</p>
                            <div className='flex flex-col gap-y-1'>
                                {data.moreDetail.strengths.map((strength, index) => (
                                    <div key={index} className='flex gap-x-1 items-center'>
                                        <IconPlus size={15} className='text-green-600' />
                                        <p className='text-xs normal-case'>{strength}</p>
                                    </div>
                                ))}
                                {data.moreDetail.weaknesses.map((weakness, index) => (
                                    <div key={index} className='flex gap-x-1 items-center'>
                                        <IconMinus size={15} className='text-red-600' />
                                        <p className='text-xs normal-case'>{weakness}</p>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className='w-full flex rounded-full justify-end gap-x-2 pb-1'>
                            <CActionIcon className='w-fit flex text-gray-400 gap-x-1 items-center bg-gray-100 px-2 py-1 rounded-md'>
                                <p className='text-sm font-semibold'>12</p>
                                <IconThumbDownFilled size={19} stroke={1.9} />
                            </CActionIcon>
                            <CActionIcon className='w-fit flex text-gray-400 gap-x-1 items-center bg-gray-100 px-2 py-1 rounded-md'>
                                <p className='text-sm font-semibold'>2</p>
                                <IconThumbUpFilled size={19} stroke={1.9} />
                            </CActionIcon>
                        </div>
                    </div>

                    {/* slider */}
                    <div className='h-full overflow-y-auto grow'>
                        <CKeenSlider>
                            {data.images.map((image, index) => (
                                <figure
                                    key={index}
                                    className={`keen-slider__slide h-[400px] lg:h-[500px] !w-[100%] shrink-0 relative flex items-start justify-center`}
                                >
                                    <Image
                                        sizes='80vw'
                                        className='object-contain'
                                        fill
                                        blurDataURL={image.url}
                                        src={image.url}
                                        loading='lazy'
                                        alt={'user image'}
                                    />
                                </figure>
                            ))}
                        </CKeenSlider>
                    </div>
                </div>
            </section>
        )
}

export default memo(PicturesOfBuyersTabUserDetail)
