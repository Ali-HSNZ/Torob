import React, { type FC, memo } from 'react'
import Image from 'next/image'
import { IconBuildingStore, IconChevronRight, IconUser } from '@tabler/icons-react'

import { CButton } from '@atoms/Button'

import type IPicturesOfBuyersTabDetailProps from './resources/types/type'

const PicturesOfBuyersTabDetail: FC<IPicturesOfBuyersTabDetailProps> = ({
    handleMoreDetailClick,
    images,
    moreDetail,
}) => {
    if (moreDetail && images)
        return (
            <div className='mt-4'>
                <p className='text-xs text-gray-500'>Detail</p>
                <div className='px-4 text-sm  font-medium flex items-start justify-between gap-y-1'>
                    <div className='flex flex-col mt-1 text-xs gap-y-2'>
                        <div className='flex text-gray-700 gap-x-1 items-center'>
                            <IconUser size={18} />
                            <p>
                                {moreDetail.user.name} {moreDetail.user.lastName}
                            </p>
                        </div>
                        <div className='flex gap-1.5'>
                            {moreDetail.tags.map((tag, tagIndex) => (
                                <p key={tagIndex} className='text-green-600 bg-green-100 px-0.5 w-fit rounded-sm'>
                                    #{tag}
                                </p>
                            ))}
                        </div>
                        <div className='flex text-gray-700 gap-x-1 items-center'>
                            <IconBuildingStore size={18} />
                            <p>{moreDetail.storeName}</p>
                        </div>

                        <div className='flex gap-x-1.5'>
                            {images.map((image, index) => (
                                <figure key={image.id} className={`w-6 h-6 rounded-md text-center relative`}>
                                    <Image
                                        blurDataURL={image.url}
                                        fill
                                        src={image.url}
                                        alt={`user image-${index}`}
                                        sizes='(max-width: 640px) 40vw, (min-width: 640px) 20vw'
                                    />
                                </figure>
                            ))}
                        </div>
                    </div>

                    {/* More Detail Button */}
                    <CButton
                        size='xs'
                        rightSection={<IconChevronRight stroke={1} size={20} />}
                        variant='transparent'
                        onClick={handleMoreDetailClick}
                        classNames={{ label: 'p-0', section: 'p-0 m-0' }}
                        color='dark'
                    >
                        More Detail
                    </CButton>
                </div>
            </div>
        )
}

export default memo(PicturesOfBuyersTabDetail)
