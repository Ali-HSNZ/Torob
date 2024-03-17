import { type FC, memo, useEffect, useState } from 'react'
import { type KeenSliderInstance } from 'keen-slider'
import { useKeenSlider } from 'keen-slider/react'
import { IconChevronLeft, IconChevronRight } from '@tabler/icons-react'

import { CActionIcon } from '@atoms/ActionIcon'

import 'keen-slider/keen-slider.min.css'

import { type IKeenSliderProps } from './resources'

const CustomKeenSlider: FC<IKeenSliderProps> = ({ children, isLoop, activeSlide, setActiveSlide, ...res }) => {
    const [loaded, setLoaded] = useState(false)

    // slider image height dependency
    const AdaptiveHeight = (slider: KeenSliderInstance) => {
        function updateHeight() {
            slider.container.style.height = slider.slides[slider.track.details.rel].offsetHeight + 'px'
        }
        slider.on('created', updateHeight)
        slider.on('slideChanged', updateHeight)
    }

    const [sliderRef, instanceRef] = useKeenSlider(
        {
            initial: 0,
            loop: isLoop,
            defaultAnimation: {
                duration: 300,
            },
            created: () => {
                setLoaded(true)
            },
            drag: false,
            ...res,
        },
        [AdaptiveHeight]
    )

    // update slider if activeSlide changed ((for thumbnails))
    useEffect(() => {
        activeSlide !== undefined && instanceRef.current?.moveToIdx(activeSlide)
    }, [activeSlide, instanceRef])

    return (
        <section className='keen-slider relative' ref={sliderRef}>
            {/* sliders */}
            {children}

            {/* Arrows */}
            {loaded && instanceRef.current && (
                <>
                    <div className={`absolute ${activeSlide === 0 ? 'hidden' : ''} left-4 top-1/2 -translate-y-1/2`}>
                        <CActionIcon
                            className='p-1.5 border border-gray-200 shadow-md rounded-full bg-white text-gray-800'
                            color='dark'
                            size={40}
                            disabled={activeSlide === 0}
                            onClick={() => {
                                instanceRef.current?.prev()
                                instanceRef.current &&
                                    setActiveSlide &&
                                    setActiveSlide(instanceRef.current?.track.details.rel - 1 || 0)
                            }}
                        >
                            <IconChevronLeft />
                        </CActionIcon>
                    </div>

                    <div
                        className={`absolute right-4 top-1/2 -translate-y-1/2 ${
                            activeSlide === instanceRef.current.track.details.slides.length - 1 ? 'hidden' : ''
                        }`}
                    >
                        <CActionIcon
                            className='p-1.5 border border-gray-200 shadow-md rounded-full bg-white text-gray-800'
                            color='dark'
                            size={40}
                            disabled={activeSlide === instanceRef.current.track.details.slides.length - 1}
                            onClick={() => {
                                instanceRef.current?.next()
                                instanceRef.current &&
                                    setActiveSlide &&
                                    setActiveSlide(instanceRef.current?.track.details.rel + 1 || 0)
                            }}
                        >
                            <IconChevronRight />
                        </CActionIcon>
                    </div>
                </>
            )}
        </section>
    )
}

export default memo(CustomKeenSlider)
