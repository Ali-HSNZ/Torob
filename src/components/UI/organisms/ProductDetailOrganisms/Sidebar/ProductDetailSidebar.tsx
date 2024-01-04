'use client'

import { type FC } from 'react'
import { useWindowScroll } from '@mantine/hooks'
import { IconChevronUp, IconHeart, IconQuestionMark, IconShare } from '@tabler/icons-react'
import { IconBell, IconBuildingStore, IconMessage, IconProgressAlert } from '@tabler/icons-react'

import { CActionIcon } from '@atoms/ActionIcon'
import { CTooltip } from '@atoms/Tooltip'

const ProductDetailSidebar: FC = () => {
    const [, scrollTo] = useWindowScroll()

    const backToTop = () => {
        scrollTo({ y: 0 })
    }

    return (
        <div className='sticky top-0  bg-white h-screen p-4 gap-y-4 flex justify-start flex-col items-center'>
            {/* Share */}
            <CTooltip label='Share' withArrow color='#383838' arrowSize={7} position='left'>
                <CActionIcon size={'lg'} className='text-gray-400' variant='transparent' color='dark'>
                    <IconShare />
                </CActionIcon>
            </CTooltip>

            {/* Like */}
            <CTooltip label='Like' withArrow color='#383838' arrowSize={7} position='left'>
                <CActionIcon size={'lg'} className='text-gray-400' variant='transparent' color='dark'>
                    <IconHeart />
                </CActionIcon>
            </CTooltip>

            {/* Analyze */}
            <CTooltip label='Analyze' withArrow color='#383838' arrowSize={7} position='left'>
                <CActionIcon size={'lg'} className='text-gray-400' variant='transparent' color='dark'>
                    <IconBell />
                </CActionIcon>
            </CTooltip>

            <div className='w-full border'></div>
            <div className='h-full flex flex-col justify-between'>
                <div className='flex flex-col gap-y-4'>
                    <CTooltip label='stores' withArrow color='#383838' arrowSize={7} position='left'>
                        <CActionIcon size={'lg'} className='text-gray-400' variant='transparent' color='dark'>
                            <IconBuildingStore />
                        </CActionIcon>
                    </CTooltip>

                    <CTooltip label='properties' withArrow color='#383838' arrowSize={7} position='left'>
                        <CActionIcon size={'lg'} className='text-gray-400' variant='transparent' color='dark'>
                            <IconProgressAlert />
                        </CActionIcon>
                    </CTooltip>

                    <CTooltip label='comments' withArrow color='#383838' arrowSize={7} position='left'>
                        <CActionIcon size={'lg'} className='text-gray-400' variant='transparent' color='dark'>
                            <IconMessage />
                        </CActionIcon>
                    </CTooltip>

                    <CTooltip label='questions' withArrow color='#383838' arrowSize={7} position='left'>
                        <CActionIcon size={'lg'} className='text-gray-400' variant='transparent' color='dark'>
                            <IconQuestionMark />
                        </CActionIcon>
                    </CTooltip>
                </div>

                <CTooltip label='Back to top' withArrow color='#383838' arrowSize={7} position='left'>
                    <CActionIcon
                        onClick={backToTop}
                        size={'lg'}
                        className='text-gray-400'
                        variant='transparent'
                        color='dark'
                    >
                        <IconChevronUp />
                    </CActionIcon>
                </CTooltip>
            </div>
        </div>
    )
}

export default ProductDetailSidebar
