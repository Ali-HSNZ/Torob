import { type FC, useEffect, useState } from 'react'
import { useKeenSlider } from 'keen-slider/react'
import { IconChevronLeft, IconChevronRight } from '@tabler/icons-react'

import { CActionIcon } from '@atoms/ActionIcon'

import 'keen-slider/keen-slider.min.css'

import { type IKeenSliderProps } from './resources'

const CustomKeenSlider: FC<IKeenSliderProps> = ({
    children,
    height = 300,
    isLoop,
    isBullet = false,
    activeSlide,
    setActiveSlide,
    ...res
}) => {
    const [currentSlide, setCurrentSlide] = useState<number>(0)
    const [loaded, setLoaded] = useState(false)

    const [sliderRef, instanceRef] = useKeenSlider({
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
    })

    useEffect(() => {
        if (activeSlide !== undefined && activeSlide !== currentSlide) instanceRef.current?.moveToIdx(activeSlide || 0)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [activeSlide, instanceRef])

    return (
        <section className='flex' style={{ height }}>
            {/* slider image */}
            <div className='keen-slider relative' ref={sliderRef}>
                {/* sliders */}
                {children}

                {/* Arrow */}
                {loaded && instanceRef.current && (
                    <>
                        <CActionIcon
                            variant='light'
                            color='dark'
                            className={`absolute ${
                                currentSlide === 0 ? 'hidden' : ''
                            } left-0 h-fit p-1.5 rounded-full top-1/2 -translate-y-1/2`}
                            disabled={currentSlide === 0}
                            onClick={() => instanceRef.current?.prev()}
                        >
                            <IconChevronLeft />
                        </CActionIcon>

                        <CActionIcon
                            variant='light'
                            color='dark'
                            className={`absolute right-0 h-fit p-1.5 rounded-full top-1/2 -translate-y-1/2 ${
                                currentSlide === instanceRef.current.track.details.slides.length - 1 ? 'hidden' : ''
                            }`}
                            disabled={currentSlide === instanceRef.current.track.details.slides.length - 1}
                            onClick={() => instanceRef.current?.next()}
                        >
                            <IconChevronRight />
                        </CActionIcon>
                    </>
                )}
            </div>

            {/* bullets */}
            {loaded && isBullet && (
                <div className='flex flex-col gap-y-1   justify-center items-center'>
                    {[...Array.from({ length: instanceRef.current?.track.details.slides.length || 0 })].map(
                        (_, idx) => {
                            return (
                                <button
                                    key={idx}
                                    onClick={() => {
                                        instanceRef.current?.moveToIdx(idx)
                                    }}
                                    className={
                                        '[&.active]:bg-[#BFBFBF] bg-[#F0F0F0] w-1 h-1 aspect-square rounded-full ' +
                                        (currentSlide === idx ? ' active' : '')
                                    }
                                ></button>
                            )
                        }
                    )}
                </div>
            )}
        </section>
    )
}

export default CustomKeenSlider
