import { type ReactNode } from 'react'
import { type KeenSliderOptions } from 'keen-slider'

interface IExtraProps {
    height?: number
    isLoop?: boolean
    children: ReactNode
    isBullet?: boolean
    activeSlide?: number
    setActiveSlide?: (arg: number) => void
}

type IKeenSliderProps = IExtraProps & KeenSliderOptions

export default IKeenSliderProps
