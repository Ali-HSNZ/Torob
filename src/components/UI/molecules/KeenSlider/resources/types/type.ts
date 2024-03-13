import { type ReactNode } from 'react'
import { type KeenSliderOptions } from 'keen-slider'

interface IExtraProps {
    isLoop?: boolean
    children: ReactNode
    activeSlide?: number
    setActiveSlide?: (arg: number) => void
}

type IKeenSliderProps = IExtraProps & KeenSliderOptions

export default IKeenSliderProps
