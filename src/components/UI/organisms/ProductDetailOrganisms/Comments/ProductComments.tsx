'use client'

import { useMemo, useState } from 'react'
import { Avatar } from '@mantine/core'
import { STATIC_PRODUCT_DETAIL } from '..'
import { IconX } from '@tabler/icons-react'

import { CActionIcon } from '@atoms/ActionIcon'
import { CButton } from '@atoms/Button'
import { CTextarea } from '@atoms/Textarea'

import { type TCriticalAny } from '@core/types/critical-any'
import { getTextWidth } from '@core/utils/common/get-text-width'
import { scrollToSection } from '@core/utils/common/scrollToSection'

const ProductComments = () => {
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

            return `Reply @${name}`
        }
        return undefined
    }, [senderInfo])

    return (
        <section id='comment-list'>
            <p className='text-lg font-medium'>Comments</p>

            <div className='flex flex-col gap-y-4'>
                {STATIC_PRODUCT_DETAIL.comments.map((comment) => (
                    <div key={comment.id} className='mt-4 flex justify-center gap-4'>
                        <Avatar
                            variant='filled'
                            radius='xl'
                            size='lg'
                            src='https://qto.dornicaapi.ir/storage/admin/dummyAvatar3_1702286597.png'
                        />

                        <div className='w-full flex flex-col items-end'>
                            <p className='w-full p-4 mt-6 bg-white '>{comment.description}</p>
                            <div className='w-full flex items-center justify-between '>
                                <div className='flex text-sm  gap-x-2'>
                                    <div className='flex gap-x-1'>
                                        <p className='font-medium'>{comment.user.first_name}</p>
                                        <p className='font-medium'>{comment.user.last_name}</p>
                                    </div>
                                    <p className='text-gray-500'>{comment.created_at}</p>
                                </div>

                                <CButton
                                    onClick={() => {
                                        setSenderInfo(comment.user)
                                        scrollToSection('comment-description-textarea')
                                    }}
                                    className='mt-4'
                                    variant='subtle'
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
                                'relative max-h-[215px] border border-transparent focus-within:border-red-500  bg-white overflow-y-auto   rounded-md p-3 pb-0',
                            section: 'absolute top-[13px] left-3 whitespace-nowrap w-fit h-fit z-50',
                        }}
                        styles={{
                            input: {
                                textIndent: `${senderName ? getTextWidth(senderName) + 40 : 0}px`,
                            },
                        }}
                        rows={9}
                        minRows={9}
                        label='Description'
                    />
                </div>
                <CButton variant='light'>Send</CButton>
            </div>
        </section>
    )
}

export default ProductComments
