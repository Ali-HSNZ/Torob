'use client'
import { memo } from 'react'
import { useWindowScroll } from '@mantine/hooks'
import { IconChevronUp, IconHeart, IconShare } from '@tabler/icons-react'
import { IconBell, IconBuildingStore, IconMessage, IconProgressAlert } from '@tabler/icons-react'

import { CActionIcon } from '@atoms/ActionIcon'
import { CTooltip } from '@atoms/Tooltip'

import { scrollToSection } from '@core/utils/common/scrollToSection'

const ProductDetailSidebar = () => {
    const [, scrollTo] = useWindowScroll()

    const backToTop = () => {
        scrollTo({ y: 0 })
    }

    return (
        <div className=' flex sm:sticky top-0  bg-white sm:h-screen p-4 gap-y-4 justify-between w-full sm:w-fit sm:justify-start sm:flex-col items-center'>
            <div className='flex sm:flex-col justify-around sm:justify-normal gap-y-4 w-1/2 sm:w-fit'>
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
            </div>

            <div className='w-[1px] h-7 sm:h-auto sm:w-full border  '></div>

            <div className='sm:h-full flex sm:flex-col justify-between w-1/2 sm:w-fit'>
                <div className='w-full sm:w-fit flex sm:flex-col justify-around sm:justify-normal gap-y-4'>
                    <CTooltip label='stores' withArrow color='#383838' arrowSize={7} position='left'>
                        <CActionIcon
                            onClick={() => scrollToSection('store_list')}
                            size={'lg'}
                            className='text-gray-400'
                            variant='transparent'
                            color='dark'
                        >
                            <IconBuildingStore />
                        </CActionIcon>
                    </CTooltip>

                    <CTooltip label='properties' withArrow color='#383838' arrowSize={7} position='left'>
                        <CActionIcon
                            onClick={() => scrollToSection('product_properties_list')}
                            size={'lg'}
                            className='text-gray-400'
                            variant='transparent'
                            color='dark'
                        >
                            <IconProgressAlert />
                        </CActionIcon>
                    </CTooltip>

                    <CTooltip label='comments' withArrow color='#383838' arrowSize={7} position='left'>
                        <CActionIcon
                            onClick={() => scrollToSection('comment-list')}
                            size={'lg'}
                            className='text-gray-400'
                            variant='transparent'
                            color='dark'
                        >
                            <IconMessage />
                        </CActionIcon>
                    </CTooltip>
                </div>

                <div className='hidden sm:block'>
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
        </div>
    )
}

export default memo(ProductDetailSidebar)
