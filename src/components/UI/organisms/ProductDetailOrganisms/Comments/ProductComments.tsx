import { type FC, memo, useMemo, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Avatar } from '@mantine/core'
import { IconThumbUpFilled, IconX } from '@tabler/icons-react'
import { IconBuildingStore } from '@tabler/icons-react'
import { IconThumbDownFilled } from '@tabler/icons-react'

import { CActionIcon } from '@atoms/ActionIcon'
import { CButton } from '@atoms/Button'
import { CTextarea } from '@atoms/Textarea'

import { STATIC_PRODUCTS_DATA } from '@core/constants/data/constants/products'
import { type TCriticalAny } from '@core/types/critical-any'
import { getTextWidth } from '@core/utils/common/get-text-width'
import { scrollToSection } from '@core/utils/common/scrollToSection'

import avatar from '@public/images/comments/avatar.jpg'

import { type IProductCommentsProps } from './resources'

const ProductComments: FC<IProductCommentsProps> = ({ productCode }) => {
    const product = STATIC_PRODUCTS_DATA.find((e) => e.code === productCode)

    const [senderInfo, setSenderInfo] = useState<TCriticalAny>()

    const senderName = useMemo(() => {
        let name = ''

        if (senderInfo) {
            if (senderInfo?.first_name) {
                name = senderInfo.first_name
            }
            if (senderInfo?.last_name) {
                name = name + ' ' + senderInfo.last_name
            }

            return `Reply to @${name}`
        }
        return undefined
    }, [senderInfo])

    return (
        <section id='comment-list' className='pt-4'>
            <p className='text-base font-medium'>Comments</p>

            <div className='flex flex-col gap-y-4'>
                {product?.comments.map((comment) => (
                    <div key={comment.id} className='mt-4 gap-4 flex flex-col sm:flex-row justify-center '>
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

                                {/* weaknesses & strengths */}
                                {/* <div className='grid grid-cols-2'>
                                    <div className={`${comment?.weaknesses?.length ? '' : 'col-span-full'}`}>
                                        {comment?.strengths?.map((strength, index) => (
                                            <div key={index} className='flex gap-x-1 items-center'>
                                                <IconPlus size={15} className='text-green-600' />
                                                <p className='text-xs normal-case'>{strength}</p>
                                            </div>
                                        ))}
                                    </div>
                                    <div className={`${comment?.strengths?.length ? '' : 'col-span-full'}`}>
                                        {comment?.weaknesses?.map((weakness, index) => (
                                            <div key={index} className='flex gap-x-1 items-center'>
                                                <IconMinus size={15} className='text-red-600' />
                                                <p className='text-xs normal-case'>{weakness}</p>
                                            </div>
                                        ))}
                                    </div>
                                </div> */}

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

                                <CButton
                                    onClick={() => {
                                        setSenderInfo(comment.user)
                                        scrollToSection('comment-description-textarea')
                                    }}
                                    variant='subtle'
                                    className='text-sm'
                                >
                                    Reply
                                </CButton>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <div className='flex flex-col items-end gap-y-4 mt-4'>
                <div id='comment-description-textarea' className='w-full text-sm flex flex-col  gap-y-1 font-medium'>
                    <CTextarea
                        autosize
                        leftSection={
                            senderName && (
                                <span className=' font-medium flex gap-x-1 text-sm text-gray-600 pointer-events-auto'>
                                    <CActionIcon
                                        className=''
                                        size={20}
                                        variant='transparent'
                                        onClick={() => {
                                            setSenderInfo(undefined)
                                        }}
                                    >
                                        <IconX />
                                    </CActionIcon>
                                    {senderName}
                                </span>
                            )
                        }
                        classNames={{
                            input: 'border-0 p-0   ',
                            wrapper:
                                'relative max-h-[215px] border border-transparent focus-within:border-red-500  bg-white overflow-y-auto p-3 pb-0',
                            section: 'absolute top-[13px] left-3 whitespace-nowrap w-fit h-fit z-50',
                        }}
                        styles={{
                            input: {
                                textIndent: `${senderName ? getTextWidth(senderName) + 40 : 0}px`,
                            },
                        }}
                        rows={9}
                        minRows={9}
                        label='description:'
                    />
                </div>
                <CButton variant='light'>Send</CButton>
            </div>
        </section>
    )
}

export default memo(ProductComments)
