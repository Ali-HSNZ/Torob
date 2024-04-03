import { type FC, memo } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Avatar } from '@mantine/core'
import { IconThumbUpFilled } from '@tabler/icons-react'
import { IconBuildingStore } from '@tabler/icons-react'
import { IconThumbDownFilled } from '@tabler/icons-react'

import { CActionIcon } from '@atoms/ActionIcon'

import avatar from '@public/images/comments/avatar.jpg'

import { type ISingleCommentProps } from './resources'

const SingleComment: FC<ISingleCommentProps> = ({ comment }) => {
    return (
        <div className='mt-4 gap-4 flex flex-col sm:flex-row justify-center '>
            <Avatar
                variant='filled'
                radius='xl'
                size='lg'
                className='object-cover  hidden sm:block sticky top-4 bg-gray-300 aspect-square'
                src={avatar.src}
            />

            <div className='w-full flex flex-col items-end'>
                <div className='w-full p-4 flex flex-col gap-2 sm:mt-6 bg-white'>
                    {/* user avatar */}
                    <Avatar
                        variant='filled'
                        radius='xl'
                        size='lg'
                        className='object-cover sm:hidden bg-gray-300 aspect-square'
                        src={avatar.src}
                    />

                    {/* title */}
                    <p className='text-sm normal-case font-medium'>{comment.title}</p>

                    {/* description */}
                    <p className='text-sm '>{comment.description}</p>

                    {/* images */}
                    {comment.images.length > 0 && (
                        <div className='flex gap-x-1.5'>
                            {comment.images?.map((image, index) => (
                                <Link
                                    href={image.url}
                                    target='_blank'
                                    key={image.id}
                                    className={`w-6 h-6 rounded-md text-center relative`}
                                >
                                    <Image
                                        blurDataURL={image.url}
                                        fill
                                        src={image.url}
                                        alt={`user image-${index}`}
                                        sizes='(max-width: 640px) 40vw, (min-width: 640px) 20vw'
                                    />
                                </Link>
                            ))}
                        </div>
                    )}

                    <hr className='mt-2' />

                    <div className='flex justify-between items-center mt-2 gap-4'>
                        {/* store name and product color */}
                        <div className='flex gap-x-2'>
                            <div className='flex text-gray-700 gap-x-1 items-center'>
                                <IconBuildingStore className='shrink-0' size={18} stroke={1.5} />
                                <p className='text-sm whitespace-nowrap'>{comment.product?.store}</p>
                            </div>

                            {/* color */}
                            <div className='flex items-center gap-x-1'>
                                <div
                                    style={{ backgroundColor: comment.product?.color?.hex }}
                                    className='w-3.5 h-3.5 rounded-full border border-gray-200'
                                ></div>
                                <p className='capitalize text-sm'>{comment.product?.color?.name}</p>
                            </div>
                        </div>

                        {/* like & dislike */}
                        <div className='w-full flex rounded-full justify-end gap-x-2'>
                            <CActionIcon className='w-fit flex text-gray-400 gap-x-1 items-center bg-gray-100 px-2 py-1 rounded-md'>
                                <p className='text-sm font-semibold'>
                                    {Intl.NumberFormat('en-us').format(comment.dislike)}
                                </p>
                                <IconThumbDownFilled size={19} stroke={1.9} />
                            </CActionIcon>
                            <CActionIcon className='w-fit flex text-gray-400 gap-x-1 items-center bg-gray-100 px-2 py-1 rounded-md'>
                                <p className='text-sm font-semibold'>
                                    {Intl.NumberFormat('en-us').format(comment.like)}
                                </p>
                                <IconThumbUpFilled size={19} stroke={1.9} />
                            </CActionIcon>
                        </div>
                    </div>
                </div>
                <div className='w-full text-sm flex items-center justify-between mt-2'>
                    <div className='flex flex-col sm:flex-row gap-1'>
                        <div className='flex gap-x-1'>
                            <p className='font-medium'>{comment.user.first_name}</p>
                            <p className='font-medium'>{comment.user.last_name}</p>
                        </div>
                        <p className='text-gray-500'>{comment.created_at}</p>
                        <div className='flex flex-wrap gap-1.5'>
                            {comment?.tags?.map((tag, tagIndex) => (
                                <p
                                    key={tagIndex}
                                    className='text-green-600 text-sm capitalize bg-green-100 px-0.5 w-fit rounded-sm'
                                >
                                    #{tag}
                                </p>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default memo(SingleComment)
