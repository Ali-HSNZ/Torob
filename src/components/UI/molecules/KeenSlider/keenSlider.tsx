import { type FC, memo, useEffect, useState } from 'react'
import { type KeenSliderInstance } from 'keen-slider'
import { useKeenSlider } from 'keen-slider/react'
import { IconChevronLeft, IconChevronRight } from '@tabler/icons-react'

import { CActionIcon } from '@atoms/ActionIcon'

import 'keen-slider/keen-slider.min.css'

import { type IKeenSliderProps } from './resources'

const CustomKeenSlider: FC<IKeenSliderProps> = ({ children, isHiddenArrow, activeSlide, setActiveSlide, ...res }) => {
    const [loaded, setLoaded] = useState(false)
    const [currentSlide, setCurrentSlide] = useState<number>(0)

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
            defaultAnimation: {
                duration: 300,
            },
            created: () => {
                setLoaded(true)
            },
            slideChanged(slider) {
                if (!activeSlide) setCurrentSlide(slider.track.details.rel)
            },
            ...res,
        },
        [AdaptiveHeight]
    )

    // update slider if activeSlide changed ((for thumbnails))
    useEffect(() => {
        activeSlide !== undefined && instanceRef.current?.moveToIdx(activeSlide)
    }, [activeSlide, instanceRef])

    const handleArrowLeft = () => {
        if (instanceRef.current) {
            instanceRef.current.prev()
            if (setActiveSlide) setActiveSlide(instanceRef.current?.track.details.rel - 1)
            else setCurrentSlide(instanceRef.current?.track.details.rel - 1)
        }
    }

    const handleArrowRight = () => {
        if (instanceRef.current) {
            instanceRef.current.next()
            if (setActiveSlide) setActiveSlide(instanceRef.current?.track.details.rel + 1)
            else setCurrentSlide(instanceRef.current?.track.details.rel + 1)
        }
    }

    const isDisabledArrowLeft: boolean = (activeSlide ?? currentSlide) === 0

    const isDisabledArrowRight =
        instanceRef.current && (activeSlide ?? currentSlide) === instanceRef.current.track.details.slides.length - 1

    return (
        <section className='keen-slider relative' ref={sliderRef}>
            {/* sliders */}
            {children}

            {/* Arrows */}
            {loaded && !isHiddenArrow && instanceRef.current && (
                <>
                    <div className={`absolute ${isDisabledArrowLeft ? 'hidden' : ''} left-4 top-1/2 -translate-y-1/2`}>
                        <CActionIcon
                            className='p-1.5 border  border-gray-200 shadow-md rounded-full bg-white text-gray-800'
                            color='dark'
                            size={40}
                            disabled={isDisabledArrowLeft}
                            onClick={handleArrowLeft}
                        >
                            <IconChevronLeft />
                        </CActionIcon>
                    </div>

                    <div
                        className={`absolute right-4 top-1/2 -translate-y-1/2 ${isDisabledArrowRight ? 'hidden' : ''}`}
                    >
                        <CActionIcon
                            className='p-1.5 border border-gray-200 shadow-md rounded-full bg-white text-gray-800'
                            color='dark'
                            size={40}
                            disabled={Boolean(isDisabledArrowRight)}
                            onClick={handleArrowRight}
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
