'use client'

import { type FC } from 'react'
import { Tooltip } from '@mantine/core'
import { useWindowScroll } from '@mantine/hooks'
import { IconChevronUp, IconHeart, IconQuestionMark, IconShare } from '@tabler/icons-react'
import { IconBell, IconBuildingStore, IconMessage, IconProgressAlert } from '@tabler/icons-react'

import { CActionIcon } from '@atoms/ActionIcon'

const ProductDetailSidebar: FC = () => {
    const [, scrollTo] = useWindowScroll()

    const backToTop = () => {
        scrollTo({ y: 0 })
    }

    return (
        <div className='sticky top-0  bg-white h-screen p-4 gap-y-4 flex justify-start flex-col items-center'>
            {/* Share */}
            <Tooltip label='Share' withArrow color='#383838' arrowSize={7} position='left'>
                <CActionIcon size={'lg'} className='text-gray-400' variant='transparent' color='dark'>
                    <IconShare />
                </CActionIcon>
            </Tooltip>

            {/* Like */}
            <Tooltip label='Like' withArrow color='#383838' arrowSize={7} position='left'>
                <CActionIcon size={'lg'} className='text-gray-400' variant='transparent' color='dark'>
                    <IconHeart />
                </CActionIcon>
            </Tooltip>

            {/* Analyze */}
            <Tooltip label='Analyze' withArrow color='#383838' arrowSize={7} position='left'>
                <CActionIcon size={'lg'} className='text-gray-400' variant='transparent' color='dark'>
                    <IconBell />
                </CActionIcon>
            </Tooltip>

            <div className='w-full border'></div>
            <div className='h-full flex flex-col justify-between'>
                <div className='flex flex-col gap-y-4'>
                    <Tooltip label='stores' withArrow color='#383838' arrowSize={7} position='left'>
                        <CActionIcon size={'lg'} className='text-gray-400' variant='transparent' color='dark'>
                            <IconBuildingStore />
                        </CActionIcon>
                    </Tooltip>

                    <Tooltip label='properties' withArrow color='#383838' arrowSize={7} position='left'>
                        <CActionIcon size={'lg'} className='text-gray-400' variant='transparent' color='dark'>
                            <IconProgressAlert />
                        </CActionIcon>
                    </Tooltip>

                    <Tooltip label='comments' withArrow color='#383838' arrowSize={7} position='left'>
                        <CActionIcon size={'lg'} className='text-gray-400' variant='transparent' color='dark'>
                            <IconMessage />
                        </CActionIcon>
                    </Tooltip>

                    <Tooltip label='questions' withArrow color='#383838' arrowSize={7} position='left'>
                        <CActionIcon size={'lg'} className='text-gray-400' variant='transparent' color='dark'>
                            <IconQuestionMark />
                        </CActionIcon>
                    </Tooltip>
                </div>

                <Tooltip label='Back to top' withArrow color='#383838' arrowSize={7} position='left'>
                    <CActionIcon
                        onClick={backToTop}
                        size={'lg'}
                        className='text-gray-400'
                        variant='transparent'
                        color='dark'
                    >
                        <IconChevronUp />
                    </CActionIcon>
                </Tooltip>
            </div>
        </div>
    )
}

export default ProductDetailSidebar
