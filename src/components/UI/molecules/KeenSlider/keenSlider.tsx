import { type FC, useEffect, useState } from 'react'
import { type KeenSliderInstance } from 'keen-slider'
import { useKeenSlider } from 'keen-slider/react'
import { IconChevronLeft, IconChevronRight } from '@tabler/icons-react'

import { CActionIcon } from '@atoms/ActionIcon'

import 'keen-slider/keen-slider.min.css'

import { type IKeenSliderProps } from './resources'

const CustomKeenSlider: FC<IKeenSliderProps> = ({ children, isLoop, activeSlide, setActiveSlide, ...res }) => {
    const [currentSlide, setCurrentSlide] = useState<number>(0)
    const [loaded, setLoaded] = useState(false)

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
            created: () => {
                setLoaded(true)
            },
            slideChanged(slider) {
                setCurrentSlide(slider.track.details.rel)
                setActiveSlide && setActiveSlide(slider.track.details.rel)
            },
            ...res,
        },
        [AdaptiveHeight]
    )

    useEffect(() => {
        if (activeSlide !== undefined && activeSlide !== currentSlide) instanceRef.current?.moveToIdx(activeSlide || 0)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [activeSlide, instanceRef])

    return (
        <section className='keen-slider relative' ref={sliderRef}>
            {/* sliders */}
            {children}

            {/* Arrow */}
            {loaded && instanceRef.current && (
                <>
                    <div className={`absolute ${currentSlide === 0 ? 'hidden' : ''} left-0 top-1/2 -translate-y-1/2`}>
                        <CActionIcon
                            variant='light'
                            className='p-1.5 rounded-full'
                            color='dark'
                            disabled={currentSlide === 0}
                            onClick={() => instanceRef.current?.prev()}
                        >
                            <IconChevronLeft />
                        </CActionIcon>
                    </div>

                    <div
                        className={`absolute right-0 top-1/2 -translate-y-1/2 ${
                            currentSlide === instanceRef.current.track.details.slides.length - 1 ? 'hidden' : ''
                        }`}
                    >
                        <CActionIcon
                            variant='light'
                            className='p-1.5 rounded-full'
                            color='dark'
                            disabled={currentSlide === instanceRef.current.track.details.slides.length - 1}
                            onClick={() => instanceRef.current?.next()}
                        >
                            <IconChevronRight />
                        </CActionIcon>
                    </div>
                </>
            )}
        </section>
    )
}

export default CustomKeenSlider
